<template>
	<button
		v-if="isGithub"
		class="fork rounded-md my-2 md:mx-2 px-20 py-2"
		v-bind:class="`${isGithub ? 'github' : ''}`"
		:style="style"
	>
		<a v-bind:href="link">
			<p class="font-bold text-white mb-0">{{ title }}</p>
		</a>
	</button>
	<button
		v-else
		class="fork rounded-md my-2 md:mx-2 px-20 py-2"
		v-bind:class="`${isPreview ? 'preview' : ''}`"
		:style="style"
	>
		<p class="font-bold text-white mb-0">{{ title }}</p>
		<p v-if="data" class="text-sm font-light text-white m-0">{{ data.version }}</p>
	</button>
</template>

<script>
import moment from "moment";

export default {
	props: {
		title: String,
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
		};
	},
	async mounted() {
		let release = this.isPreview ? this.fetcher.preview(this.$store) : this.fetcher.stable(this.$store);
		this.data = (await release).data;
	},
	computed: {
		fetcher() {
			switch (this.$page.markdownPage.title || "tachiyomi") {
				case "TachiyomiAZ":
					return this.$fetchers.tachiyomiaz();
					break;
				case "TachiyomiJ2K":
					return this.$fetchers.tachiyomij2k();
					break;
				case "TachiyomiSY":
					return this.$fetchers.tachiyomisy();
					break;
				case "Neko":
					return this.$fetchers.neko();
					break;
				default:
					return this.$fetchers.tachiyomi();
					break;
			}
		},
		link() {
			return this.fetcher.githubUrl;
		},
		lighter() {
			switch (this.$page.markdownPage.forkName || "tachiyomi") {
				case "az":
					return 10;
					break;
				case "j2k":
					return 10;
					break;
				case "sy":
					return 8;
					break;
				case "neko":
					return 10;
					break;
				default:
					return 5;
					break;
			}
		},
		darker() {
			switch (this.$page.markdownPage.forkName || "tachiyomi") {
				case "az":
					return -10;
					break;
				case "j2k":
					return -8;
					break;
				case "sy":
					return -4;
					break;
				case "neko":
					return -8;
					break;
				default:
					return -10;
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
</style>
