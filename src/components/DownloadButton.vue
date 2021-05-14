<template>
	<div
		class="download-button"
		:class="{
			github: isGithub,
			preview: isPreview,
			[`${(isPreview ? 'preview-' : 'stable-') + this.name}`]: this.name !== 'tachiyomi',
		}"
		@click="isGithub ? onClickGitHub() : isPreview ? onClickPreview() : onClickStable()"
	>
		<div class="download-header">
			<i v-if="isGithub" class="download-icon material-icons"><github-logo height="21px" width="21.61px" /></i>
			<CpuIcon v-else-if="isPreview" class="download-icon" size="1x" />
			<DownloadIcon v-else class="download-icon" size="1x" />
			<p class="download-title">{{ title }}</p>
		</div>

		<p v-show="!isGithub" class="download-description">{{ data.version }}</p>
	</div>
</template>

<script>
import { VariantEnum } from "../scripts/fetcher/VariantEnum.js";
import { TypeEnum } from "../scripts/fetcher/TypeEnum.js";
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
		let release = this.isPreview
			? this.fetcher().fetch(this.variant, TypeEnum.PREVIEW)
			: this.fetcher().fetch(this.variant, TypeEnum.STABLE);
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
		variant() {
			switch (this.name) {
				case "tachiyomi-az":
					return VariantEnum.TACHIYOMI_AZ;
				case "tachiyomi-j2k":
					return VariantEnum.TACHIYOMI_J2K;
				case "tachiyomi-sy":
					return VariantEnum.TACHIYOMI_SY;
				case "neko":
					return VariantEnum.NEKO;
				default:
					return VariantEnum.TACHIYOMI;
			}
		},
		link() {
			return this.fetcher().githubUrl(this.variant);
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
			if (confirm("Are you sure? Preview can break features and contain bugs!")) {
  				this.promptPreview();
			}
		},
		onClickGitHub() {
			if (window) {
				window.location.href = this.link;
			}
		},
		promptStable() {
			const name = this.prettifyName;
			console.log(name);
			window.location.assign(this.data.downloadUrl.browser_download_url);
			// window.ga("send", "event", "Action", "Download", name);
		},
		promptPreview() {
			const name = this.prettifyName;
			console.log(`${name} Preview`);
			window.location.assign(this.data.downloadUrl.browser_download_url);
			// window.ga("send", "event", "Action", "Download", `${name} Preview`);
		},
	},
};
</script>

<style lang="stylus" scoped>
// TODO Add fork specific colors

.download-button {
	background var(--primary)
	border-radius 0.375em
	width 100%
	padding 0.5rem 5rem
	user-select none

	@media (min-width 640px) {
		width 100%
		max-width 250px
	}

	&:hover {
		filter brightness(1.25)
	}

	p {
		margin 0
		color #fff
	}

	svg {
		margin 0
		stroke #fff
	}

	&:nth-child(1) {
		margin-left auto
	}

	&:nth-child(2) {
		margin-right auto
	}

	&:nth-child(3) {
		margin 0 auto
	}

	&.github {
		display flex
		align-items center
		justify-content center
		height 64px


		path {
			fill var(--primary)
		}
	}

	&.preview {
		background transparent
		border 2px solid var(--primary)

		p {
			color var(--primary)
		}

		svg {
			stroke var(--primary)
		}
	}

	&.github {
		background transparent
		border 1px solid var(--primary-light)

		p {
			color var(--primary)
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
