<template>
	<div
		class="download-button rounded-md px-20 py-2 select-none"
		v-bind:class="`${isGithub ? 'github' : ''} ${isPreview ? 'preview' : ''} ${this.name !== 'tachiyomi' ? (isPreview ? 'preview-' : 'stable-') + this.name : ''}`"
		@click="isGithub ? onClickGitHub() : isPreview ? onClickPreview() : onClickStable()"
		:style="colorStyle"
	>
		<div class="download-header">
			<i v-if="isGithub" class="download-icon material-icons"><github-logo height="21px" width="21.61px" /></i>
			<CpuIcon v-else-if="isPreview" class="download-icon  mr-4" size="1x" />
			<DownloadIcon v-else class="download-icon  mr-4" size="1x" />
			<p class="download-title">{{ title }}</p>
		</div>

		<p v-show="!isGithub" class="download-description">{{ data.version }}</p>
	</div>
	<!--
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
		@click="isPreview ? downloadPreview() : downloadStable()"
	>
		<div class="download-container">
			<material-icon iconOnly :icon="isPreview ? 'memory' : 'get_app'" />
			<p class="font-bold text-white mb-0">{{ title }}</p>
			<p v-if="data" class="text-sm font-light text-white m-0">{{ data.version }}</p>
		</div>
	</button>

	-->
</template>

<script>
import moment from "moment";
import GithubLogo from "@/assets/images/github-logo.svg";
import { DownloadIcon, CpuIcon } from "vue-feather-icons";

export default {
	components: {
		GithubLogo,
		DownloadIcon,
		CpuIcon,
	},
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
		let response = await release;
		this.data = response.data;
	},
	computed: {
		name() {
			return this.$page.markdownPage.forkName || "tachiyomi";
		},
		prettifyName() {
			return this.name
				.split("-")
				.map(string =>
					string.match(/az|j2k|sy/gi) ? string.toUpperCase() : string[0].toUpperCase() + string.slice(1)
				)
				.join(" ");
		},
		fetcher() {
			try {
				console.log(this.name);
				return this.$fetchers[this.name]();
			} catch (e) {
				console.error("Missing fetcher in data-fetcher.js, or check the variable names is correct", e);
			}
			return null;
		},
		link() {
			return this.fetcher.githubUrl;
		},
	},
	methods: {
		// TODO Remove console logs when modal is in place
		onClickStable() {
			let name = this.$page.markdownPage.forkName || "tachiyomi";
			console.log(name, "Lets download stable version");
			// TODO Add modal
			this.promptStable();
		},
		onClickPreview() {
			let name = this.$page.markdownPage.forkName || "tachiyomi";
			console.log(name, "Lets download preview version");
			// TODO Add modal
			this.promptPreview();
		},
		onClickGitHub() {
			if (window) {
				window.location.href = this.link;
			}
		},
		promptStable() {
			const name = this.prettifyName;
			console.log(name);
			window.location.assign(this.data.downloadUrl);
			// window.ga("send", "event", "Action", "Download", name);
		},
		promptPreview() {
			const name = this.prettifyName;
			console.log(`${name} Preview`);
			window.location.assign(this.data.downloadUrl);
			// window.ga("send", "event", "Action", "Download", `${name} Preview`);
		},
	},
};
</script>

<style lang="stylus" scoped>

.download-button {
	background var(--color-ui-primary)

	&:hover {
		filter brightness(1.25)
	}

	p {
		margin 0
	}

	svg {
		margin 0
	}

	&.github {
		display flex
		align-items center
		justify-content center
		height 64px

		path {
			fill var(--color-ui-primary)
		}
	}

	&.preview {
		background var(--color-ui-primary-light)
	}

	&.github {
		background transparent
		border 1px solid var(--color-ui-primary-light)

		p {
			color var(--color-ui-primary-dark)
		}
	}

	.download-header {
		& > * {
			display inline
		}
		display flex
		align-items center
		justify-content center

		.download-icon {
			position unset
			top 0
		}

		.download-title {
			font-weight 600
			font-size 1.1rem
			margin-left 0.25rem
		}
	}

	.download-description {
		font-size 0.85rem
	}
}
</style>
