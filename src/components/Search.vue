<template>
	<div @keydown.down="increment" @keydown.up="decrement" @keydown.enter="go" class="search">
		<label>
			<span class="sr-only">Search docs...</span>
			<div class="search-icon">
				<SearchIcon size="1.25x" />
			</div>
			<input
				ref="input"
				type="search"
				:value="query"
				placeholder="Search docs..."
				@focus="focused = true"
				@blur="focused = false"
				@input="
					focusIndex = -1;
					query = $event.target.value;
				"
				@change="query = $event.target.value"
			/>
		</label>
		<div v-if="showResult" class="search-results">
			<ul>
				<li v-if="results.length === 0" class="no-results">
					No results for
					<span>{{ query }}</span>
					.
				</li>

				<li
					v-else
					v-for="(result, index) in results"
					:key="result.path + result.anchor"
					@mouseenter="focusIndex = index"
					@mousedown="go"
					class="result-item"
				>
					<g-link :to="result.path + result.anchor">
						<span v-if="result.value === result.title" class="single">
							{{ result.value }}
						</span>

						<span v-else class="multi">
							{{ result.title }}
							<ChevronsRightIcon size="1x" />
							<span>{{ result.value }}</span>
						</span>
					</g-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<static-query>
	query Search {
		allMarkdownPage {
			edges {
				node {
					id
					path
					title
					headings {
						depth
						value
						anchor
					}
				}
			}
		}
	}
</static-query>

<script>
import Fuse from "fuse.js";
import { ChevronsRightIcon, SearchIcon } from "vue-feather-icons";

export default {
	components: {
		ChevronsRightIcon,
		SearchIcon,
	},

	data() {
		return {
			query: "",
			focusIndex: -1,
			focused: false,
		};
	},
	computed: {
		results() {
			const fuse = new Fuse(this.headings, {
				keys: ["value"],
				threshold: 0.25,
			});

			return fuse.search(this.query).slice(0, 15);
		},
		headings() {
			let result = [];
			const allPages = this.$static.allMarkdownPage.edges.map(edge => edge.node);

			// Create the array of all headings of all pages.
			allPages.forEach(page => {
				page.headings.forEach(heading => {
					result.push({
						...heading,
						path: page.path,
						title: page.title,
					});
				});
			});

			return result;
		},
		showResult() {
			// Show results, if the input is focused and the query is not empty.
			return this.focused && this.query.length > 0;
		},
	},
	methods: {
		increment() {
			if (this.focusIndex < this.results.length - 1) {
				this.focusIndex++;
			}
		},
		decrement() {
			if (this.focusIndex >= 0) {
				this.focusIndex--;
			}
		},
		go() {
			// Do nothing if we don't have results.
			if (this.results.length === 0) {
				return;
			}

			let result;

			// If we don't have focus on a result, just navigate to the first one.
			if (this.focusIndex === -1) {
				result = this.results[0];
			} else {
				result = this.results[this.focusIndex];
			}

			this.$router.push(result.path + result.anchor);

			// Unfocus the input and reset the query.
			this.$refs.input.blur();
			this.query = "";
		},
	},
};
</script>

<style lang="stylus">
.search {
	position relative

	label {
		position relative
		display block

		.search-icon {
			position absolute
			top 0
			bottom 0
			left 0
			display flex
			opacity 0.6
			padding-left 0.75rem
			padding-right 0.75rem
			align-items center
			justify-content center

			svg {
				color var(--color-ui-typo)
			}
		}

		input {
			display block
			width 100%
			padding 0.5rem 1rem 0.5rem 2.5rem
			border-width 2px
			border-radius 0.5rem
			user-select none
		}
	}

	.search-results {
		position fixed
		z-index 50
		bottom 0
		left 0
		right 0
		margin-top 0.5rem
		box-shadow 0 10px 15px -3px #000, 0 4px 6px -2px #000
		border-width 2px
		border-color var(--color-ui-sidebar)
		border-radius 0.5rem
		border-top-width 0
		border-top-left-radius 0
		border-top-right-radius 0
		max-height calc(100vh - 120px)
		background-color var(--color-ui-background)
		overflow-y auto

		@media (min-width 640px) {
			bottom auto
			position absolute
		}

		ul {
			padding 0.5rem 1rem 0.5rem 1rem
			margin 0

			.no-results {
				padding-left 0.5rem
				padding-right 0.5rem

				span {
					font-weight 700
				}
			}

			.result-item {
				border-color var(--color-ui-sidebar)
				border-bottom-width 1px

				&:last-child {
					border-bottom-width 0px
				}

				&:hover a {
					background-color var(--color-ui-sidebar)
					color var(--color-ui-primary)
				}

				a {
					display block
					padding 0.5rem
					margin-left -0.5rem
					margin-right -0.5rem
					font-size 1rem
					font-weight 700
					border-radius 0.5rem

					.multi {
						display flex
						align-items center

						svg {
							margin-left 0.25rem
							margin-right 0.25rem
						}

						span {
							font-weight 400
							opacity 0.75
						}
					}
				}
			}
		}
	}
}

@css {
	header input {
		background-color: rgba(var(--color-ui-search), 1);
		border-color: transparent;
		transition: border-color 0.3s;
	}

	header input:focus {
		outline: 0;
		border-color: var(--color-ui-primary);
	}
}
</style>
