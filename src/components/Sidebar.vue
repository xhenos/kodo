<template>
	<div ref="sidebar" v-if="showSidebar" class="sidebar-container">
		<div v-for="section in sidebar.sections" :key="section.title" class="sidebar-section">
			<g-link
				v-if="section.index.length > 0"
				:to="`${section.index}`"
				class="sidebar-header sidebar-link sidebar-item"
				:class="getClassesForAnchor({ page: section.index })"
				@mousedown="$emit('navigate')"
			>
				<h3 class="sidebar-item">
					{{ section.title }}
				</h3>
			</g-link>
			<h3 v-else class="sidebar-item">
				{{ section.title }}
			</h3>

			<ul>
				<li
					v-for="page in findPages(section.items)"
					:id="page.path"
					:key="page.path"
					:class="getClassesForAnchor(page)"
					@mousedown="$emit('navigate')"
				>
					<g-link :to="`${page.path}`" class="sidebar-subheader sidebar-item sidebar-link">
						<span
							class="sidebar-item-dot"
							:class="{
								visible: currentPage.path === page.path,
							}"
						></span>
						{{ page.title }}
					</g-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<static-query>
	query Sidebar {
		metadata {
			settings {
				sidebar {
					name
					sections {
						title
						index
						items
					}
				}
			}
		}
	}
</static-query>

<script>
export default {
	data() {
		return {
			expanded: [],
		};
	},
	computed: {
		pages() {
			return this.$page.allMarkdownPage.edges.map(edge => edge.node);
		},
		sidebar() {
			return this.$static.metadata.settings.sidebar.find(
				sidebar => sidebar.name === this.$page.markdownPage.sidebar
			);
		},
		showSidebar() {
			return this.$page.markdownPage.sidebar && this.sidebar;
		},
		currentPage() {
			return this.$page.markdownPage;
		},
	},
	methods: {
		getClassesForAnchor({ path }) {
			if (!path) return {};
			return {
				active: this.currentPage.path === path,
			};
		},
		findPages(links) {
			return links.map(link => this.pages.find(page => page.path === link));
		},
	},
};
</script>

<style lang="stylus">
.sidebar {
	.sidebar-container {
		padding-left 1rem
		padding-right 1rem
		padding-top 2rem

		@media (min-width 1024px) {
			padding-top 3rem
		}

		.sidebar-section {
			padding-bottom 1rem
			margin-bottom 1rem
			border-color var(--color-ui-border)
			border-bottom-width 1px

			&:last-child {
				border-bottom-width 0px
			}

			.sidebar-header,
			.sidebar-subheader {
				display flex
				align-items center
				padding-top 0.25rem
				padding-bottom 0.25rem
				font-weight 600
			}

			.sidebar-item-dot {
				position absolute
				width 0.5rem
				height 0.5rem
				margin-left -0.75rem
				border-radius 100%
				opacity 0
				background var(--color-ui-primary)
				transition translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))
				transform-origin center
				--transform-scale-x 0
				--transform-scale-y 0

				&.visible {
					opacity 1
					--transform-scale-x 1
					--transform-scale-y 1
				}
			}

			h3 {
				color currentColor
				padding-top 0
				margin-top 0
				margin-bottom 0.25rem
				font-size 0.875rem
				letter-spacing -0.025em
				text-transform uppercase
				border-style none
			}

			ul {
				max-width 100%
				padding-left 0.5rem
				margin-bottom 0

				li {
					&:hover {
						color var(--color-ui-primary)
					}

					&.active {
						color var(--color-ui-primary)
					}

					a {
						transition all 0.3s, color 0s

						&.active {
							color var(--color-ui-primary)
							padding-left 0.8rem
						}
					}
				}
			}
		}
	}
}
</style>
