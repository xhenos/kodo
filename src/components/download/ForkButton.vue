<template >
	<button
		:style="style"
		v-if="isGithub"
		class="fork rounded-md my-2 md:mx-2 px-20 py-2"
		v-bind:class="`fork fork-${fork} ${isGithub ? 'github' : ''}`"
	>
		<a v-bind:href="link">
			<p class="font-bold text-white mb-0">GitHub</p>
		</a>
	</button>
	<download-button
		:style="style"
		v-else
		v-bind:title="isPreview ? 'Preview' : 'Stable'"
		v-bind:data="data"
		v-bind:class="`fork fork-${fork} ${isPreview ? 'preview' : ''}`"
	/>
</template>

<script>
import "~/scripts/prototypes";

import moment from "moment";
import DownloadButton from "./DownloadButton.vue";

export default {
	components: { DownloadButton },
	props: {
		fork: {
			type: String,
		},
		isPreview: {
			type: Boolean,
			default: false,
		},
		isGithub: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			data: {
				body: "",
				date: moment(0).fromNow(),
				downloadUrl: "",
				version: "v0.00.0",
			},
			link: "",
			darkMode: false,
		};
	},
	async mounted() {
		var fetcher;
		switch (this.fork) {
			case "az":
				fetcher = this.$fetchers.tachiyomiaz();
				break;
			case "j2k":
				fetcher = this.$fetchers.tachiyomij2k();
				break;
			case "sy":
				fetcher = this.$fetchers.tachiyomisy();
				break;
			case "neko":
				fetcher = this.$fetchers.neko();
				break;
			default:
				throw new Error("Unknown fork");
				break;
		}
		this.link = fetcher.githubUrl;
		const fetch = this.isPreview ? fetcher.preview(this.$store) : fetcher.stable(this.$store);
		this.data = (await fetch).data;
		this.darkMode = localStorage.getItem("lights-out") === "true" ? true : false;
		console.log(window);
		if (window.addEventListener) {
			window.addEventListener("storage", onStorage, false);
		} else {
			window.attachEvent("onstorage", onStorage);
		}

		var onStorage = function (e) {
			console.log("Hello");
			this.darkMode = e["light-out"];
		};
	},
	computed: {
		lighter() {
			switch (this.fork) {
				case 'az':
					return 10
					break;
				case 'j2k':
					return 10
					break;
				case 'sy':
					return 8
					break;
				case 'neko':
					return 10
					break;
				default:
					return 0
					break;
			}
		},
		darker() {
			switch (this.fork) {
				case 'az':
					return -10
					break;
				case 'j2k':
					return -8
					break;
				case 'sy':
					return -4
					break;
				case 'neko':
					return -8
					break;
				default:
					return 0
					break;
			}
		},
		style() {
			return `
						fork {
							--color-ui-primary-light: ${this.$page.markdownPage.metaColor.toHSL(this.lighter)};
							--color-ui-primary-light: ${this.$page.markdownPage.metaColor.toHSL(this.lighter)};
    						--color-ui-primary: ${this.$page.markdownPage.metaColor.toHSL(0)};
    						--color-ui-primary: ${this.$page.markdownPage.metaColor.toHSL(0)};
							--color-ui-primary-dark: ${this.$page.markdownPage.metaColor.toHSL(this.darker)};
							--color-ui-primary-dark: ${this.$page.markdownPage.metaColor.toHSL(this.darker)};
						}
					`;
		},
	},
};
</script>

<style lang="scss" scoped>
.fork {
	&-az {
		background: var(--color-ui-primary);
		&.preview {
			background: var(--color-ui-primary-light);
		}
		&.github {
			background: transparent;
			border: 1px solid var(--color-ui-primary-light);
			p { 
				color: var(--color-ui-primary-dark);
			}
		
		}
	}
	&-j2k {
		background: var(--color-ui-primary);
		
		&.preview {
			background: var(--color-ui-primary-light);
		}
		&.github {
			background: transparent;
			border: 1px solid var(--color-ui-primary-light);
			p { 
				color: var(--color-ui-primary-dark);
			}
		}
	}
	&-sy {
		background: var(--color-ui-primary);
		&.preview {
			background: var(--color-ui-primary-light);
		}
		&.github {
			background: transparent;
			border: 1px solid var(--color-ui-primary-light);
			p { 
				color: var(--color-ui-primary-dark);
			}
		}
	}
	&-neko {
		background: var(--color-ui-primary);
		&.preview {
			background: var(--color-ui-primary-light);
		}
		&.github {
			background: transparent;
			border: 1px solid var(--color-ui-primary-light);
			p { 
				color: var(--color-ui-primary-dark);
			}
		}
	}
}
</style>
