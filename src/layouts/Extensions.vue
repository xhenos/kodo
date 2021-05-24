<template>
	<div class="extension-list">
		<div v-if="extensions.length > 0" class="extension-list">
			<span class="filters-list">
				<div class="search-bar">
					<input
						type="search"
						name="extension-search"
						v-model="filters.search"
						placeholder="Search extensions by name..."
					/>
				</div>
				<div class="select-container">
					<p><b>Filter by Language</b></p>
					<span class="select">
						<div v-for="[group] in extensions" :key="group.lang">
							<input type="checkbox" v-model="filters.lang" :id="group.lang" :value="group.lang" />
							<label class="chips" :for="group.lang">
								{{ group.lang == "en" ? simpleLangName(group.lang) : langName(group.lang) }}
							</label>
						</div>
					</span>
				</div>

				<div class="radio">
					<b>Sort by:</b>
					<input
						label="Ascending"
						type="radio"
						id="Ascending"
						name="Ascending"
						value="Ascending"
						v-model="filters.sort"
						checked
					/>
					<input
						label="Descending"
						type="radio"
						id="Descending"
						name="Descending"
						value="Descending"
						v-model="filters.sort"
					/>
				</div>

				<div class="radio">
					<b>Display extensions with NSFW content?</b>
					<input label="Yes" type="radio" id="Yes" name="Yes" value="Yes" v-model="filters.nsfw" />
					<input label="No" type="radio" id="No" name="No" value="No" v-model="filters.nsfw" />
					<input
						label="Don't care"
						type="radio"
						id="Don't care"
						name="Don't care"
						value="Don't care"
						v-model="filters.nsfw"
						checked
					/>
				</div>
			</span>
			<br />
			<p>
				List of available extensions to use with Tachiyomi, you can download them from here or from the app.
			</p>
			<div v-for="extensionGroup in filteredExtensions" :key="extensionGroup[0].lang">
				<h3>
					{{
						extensionGroup[0].lang === "en"
							? simpleLangName(extensionGroup[0].lang)
							: langName(extensionGroup[0].lang)
					}}
					<span class="extensions-total">
						Total:
						<span class="extensions-total-sum">
							{{ filteredExtensions.reduce((sum, item) => sum + item.length, 0) }}
						</span>
					</span>
				</h3>
				<div
					v-for="extension in extensionGroup"
					:id="extension.pkg.replace('eu.kanade.tachiyomi.extension.', '')"
					:key="extension.apk"
					class="anchor"
				>
					<div class="extension">
						<a
							:href="`#${extension.pkg.replace('eu.kanade.tachiyomi.extension.', '')}`"
							@click.stop
							aria-hidden="true"
							class="header-anchor"
						>
							#
						</a>
						<img class="extension-icon" :src="iconUrl(extension.apk)" width="42" height="42" />
						<div class="extension-text">
							<div class="upper">
								<span class="font-semibold">{{ extension.name.split(": ")[1] }}</span>
								<Badge :text="'v' + extension.version" />
							</div>
							<div class="down">
								{{ extension.pkg.replace("eu.kanade.tachiyomi.extension.", "") }}
							</div>
						</div>
						<a :href="apkUrl(extension.apk)" class="extension-download" title="Download APK" download>
							<DownloadIcon class="inline" size="1x" />
							<span>Download</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div v-else class="extension-list">
			<p>
				List of available extensions to use with Tachiyomi, you can download them from here or from the app.
			</p>
			<div class="circle-loader"></div>
		</div>
	</div>
</template>

<script>
import ISO6391 from "iso-639-1";
import { DownloadIcon } from "vue-feather-icons";

export default {
	components: {
		DownloadIcon,
	},

	data() {
		return {
			extensions: [],
			filters: {
				search: "",
				lang: [],
				nsfw: "Don't care",
				sort: "Ascending",
			},
			loading: true,
		};
	},
	computed: {
		filteredExtensions() {
			const { extensions, filters } = this;

			const filtered = [];

			for (const group of extensions) {
				let filteredGroup = filters.lang.length ? (filters.lang.includes(group[0].lang) ? group : []) : group;

				if (filters.search) {
					filteredGroup = filteredGroup.filter(ext =>
						ext.name.toLowerCase().includes(filters.search.toLowerCase())
					);
				}

				filteredGroup = filteredGroup.filter(ext =>
					filters.nsfw === "Don't care" ? true : ext.nsfw === (filters.nsfw === "Yes" ? 1 : 0)
				);

				if (filters.sort && filters.sort === "Descending") {
					filteredGroup = filteredGroup.reverse();
				}

				if (filteredGroup.length) {
					filtered.push(filteredGroup);
				}
			}

			return filtered;
		},
	},
	mounted() {
		this.$store.dispatch("fetchExtensions").then(data => {
			const values = Object.values(data);
			values.sort((a, b) => {
				const langA = this.simpleLangName(a[0].lang);
				const langB = this.simpleLangName(b[0].lang);
				if (langA === "All" && langB === "English") {
					return -1;
				}
				if (langA === "English" && langB === "All") {
					return 1;
				}
				if (langA === "English") {
					return -1;
				}
				if (langB === "English") {
					return 1;
				}
				if (langA < langB) {
					return -1;
				}
				if (langA > langB) {
					return 1;
				}
				return 0;
			});
			this.$data.extensions = values;
		});
	},

	updated() {
		if (window.location.hash) {
			window.location.replace(window.location.hash);
		}
	},

	methods: {
		simpleLangName: code => (code === "all" ? "All" : ISO6391.getName(code)),
		langName: code => (code === "all" ? "All" : `${ISO6391.getName(code)} (${ISO6391.getNativeName(code)})`),
		iconUrl(pkg) {
			const pkgName = pkg.substring(0, pkg.lastIndexOf("."));
			return `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/icon/${pkgName}.png`;
		},
		apkUrl: apk => `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/apk/${apk}`,
	},
};
</script>

<style lang="stylus">
.extension-list {
	h3 {
		padding-bottom 0.75em
		border-bottom 1px solid var(--border)
	}

	> div {
		&:not(:first-of-type) {
			.extensions-total {
				display none
			}
		}
	}
}

.filters-list {
	display flex
	flex-direction column
	row-gap 1rem
}

input[type=search] {
	display block
	width 100%
	padding 0.5rem 1rem 0.5rem 2.5rem
	border-width 2px
	border-radius 0.5rem
	user-select none
	background-color var(--background)
}

.extensions-total {
	float right

	&-sum {
		color var(--primary)
	}
}

.anchor {
	margin-top -3.9em
	padding-bottom 0.2em
	padding-top 4.5em

	.extension {
		align-items center
		display flex
		padding 0.4em 0.2em

		.header-anchor {
			padding-left 0.2em
			padding-right 0.2em
			font-size 1.4em
			opacity 0
		}

		&:hover .header-anchor {
			opacity 1
		}

		.extension-icon {
			margin-right 0.5em
		}

		.extension-text {
			flex 1

			.upper {
				.badge {
					margin-left 8px
				}
			}

			.down {
				color #6c757d
				font-family monospace
				font-size 0.9rem
			}
		}

		.extension-download {
			color var(--primary) !important
			font-weight 700
			border-color var(--border)
			border-width 1px
			border-radius 0.5rem
			margin-right 0.5em
			padding-top 0.5rem
			padding-bottom 0.5rem
			padding-left 1rem
			padding-right 1rem
			transition-property background-color, border-color, color, fill, stroke

			&:hover {
				background-color var(--primary)
				color #ffffff !important
			}

			span {
				margin-left 0.5rem
			}

			svg {
				margin-bottom 4px
				display inline-block
			}
		}

		@media (max-width 767px) {
			.extension-text .down,
			.extension-download span {
				display none
			}
		}
	}

	@media (max-width 767px) {
		.extension {
			border 1px solid var(--border)
			border-radius 8px

			.extension-download {
				background-color var(--container)
			}
		}
	}

	&:target {
		.extension {
			background-color var(--container)
			border-radius 8px
			transition 500ms background-color

			.extension-download {
				background-color var(--background)

				&:hover {
					background-color var(--primary)

					span {
						color white
					}
				}
			}
		}
	}

	&:first-child {
		border-top 1px solid var(--border)
	}
}

.circle-loader {
	border 8px solid #efefef
	border-top 8px solid var(--primary)
	border-radius 99em
	width 3em
	height 3em
	animation spin 2s linear infinite
	margin 0 auto
}

@keyframes spin {
	from {
		transform rotate(0deg)
	}

	to {
		transform rotate(360deg)
	}
}

.radio {
	background var(--background)
	padding 4px
	border-radius 3px
	position relative
	margin-top 0.5rem
}

.radio input {
	display inline-flex
	gap 0.5rem 0.5rem
	width 120px
	height 50px
	align-items center
	justify-content center
	appearance none
	outline none
	cursor pointer
	border-radius 2px
	padding 4px 8px
	background var(--background)
	border 1px solid #808080
	color var(--text)
	font-size 14px
	font-family system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		"Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
		"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
	transition all 100ms linear
}

.radio input:checked {
	background-image linear-gradient(180deg, var(--primary), var(--primary))
	color #fff
	box-shadow 0 1px 1px #0000002e
	text-shadow 0 1px 0px #79485f7a
}

.radio input:before {
	content attr(label)
	display inline-block
	text-align center
	width 100%
}

.select {
	display flex
	gap 0.45rem 0.5rem
	flex-wrap wrap
	height 125px
	overflow-x hidden
	overflow-y scroll
}

input[type=checkbox] {
	appearance none
}

.chips {
	display inline-block
	position relative
	padding 15px 30px 15px 62px
	border 2px solid #808080
	border-radius 99em
	color var(--text)
	transition background-color 0.2s, box-shadow 0.2s
}

.chips {
	display inline-flex
	padding 0.5rem 2rem
	border 2px solid #808080
	border-radius 99em
	color var(--text)
	align-items center
	justify-content center

	&::before {
		content '-'
		font-size 1.5rem
		font-weight bold
		text-align center
		color grey
		display inline-block
		padding-right 0.5rem
		transition border 2s linear
	}
}

label:hover,
input:focus + label {
	border 2px solid var(--primary)
}

input:checked + label {
	border 2px solid var(--primary)
}

input:checked + label::before {
	content '✔'
	color var(--text)
	display inline-block
	font-family arial, Segoe UI Symbol
}
</style>
