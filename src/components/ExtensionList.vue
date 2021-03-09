<template>
	<div id="ExtensionList">
		<div v-for="extensionGroup in extensions" :key="extensionGroup[0].lang">
			<h3>
				{{ langName(extensionGroup[0].lang) }}
				<span class="extensions-total">
					Total:
					<span class="extensions-total-sum">
						{{ extensions.reduce((sum, item) => sum + item.length, 0) }}
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
							<span class="bold">{{ extension.name.split(": ")[1] }}</span>
							<Badge :text="'v' + extension.version" />
						</div>
						<div class="down">
							{{ extension.pkg.replace("eu.kanade.tachiyomi.extension.", "") }}
						</div>
					</div>
					<a
						:href="apkUrl(extension.apk)"
						class="extension-download mr-auto py-2 text-ui-primary font-bold px-4 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors"
						title="Download APK"
						download
					>
						<DownloadIcon class="inline" size="1x" />
						<span class="ml-2">Download</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import groupBy from "lodash.groupby";
import ISO6391 from "iso-639-1";
import { DownloadIcon } from "vue-feather-icons";
import { EXTENSION_JSON } from "~/constants";

export default {
	components: {
		DownloadIcon,
	},

	data() {
		return {
			extensions: [],
		};
	},

	async beforeMount() {
		const { data } = await axios.get(EXTENSION_JSON);
		const values = Object.values(groupBy(data, "lang"));
		values.sort((a, b) => {
			console.log(a, b);
			let langA = this.langName(a[0].lang).split(" ")[0];
			let langB = this.langName(b[0].lang).split(" ")[0];
			console.log(langA, langB);
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
	},

	updated() {
		if (window.location.hash) {
			window.location.replace(window.location.hash);
		}
	},

	methods: {
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
#ExtensionList {
	h3 {
		padding-bottom 0.75em
		border-bottom 1px solid var(--color-ui-border)
	}
}

.extensions-total {
	float right
	&-sum {
		color var(--color-ui-primary)
	}
}

.anchor {
	margin-top -3.9em
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
			&:hover {
				color white !important
			}
			svg {
				margin-bottom 4px
			}
		}
		@media (max-width: 767px) {
			.extension-text .down,
			.extension-download span {
				display none
			}
		}
	}
	&:target {
		.extension {
			background-color var(--color-ui-container)
			border-radius 8px
			transition 500ms background-color
			.extension-download {
				background-color var(--color-ui-background)
				&:hover {
					background-color var(--color-ui-primary)
					span {
						color white
					}
				}
			}
		}
	}
	&:first-child {
		border-top 1px solid var(--color-ui-border)
	}
}
#ExtensionList > div {
	&:not(:first-child) {
		.extensions-total {
			display none
		}
	}
}
</style>
