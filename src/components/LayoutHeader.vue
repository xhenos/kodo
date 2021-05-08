<template>
	<div class="layout-header">
		<div class="container">
			<div class="header-row">
				<div class="header-item">
					<g-link to="/" class="brand nav-link nav-primary" title="Home">
						<Logo :width="32" />
						<span>{{ meta.siteName }}</span>
					</g-link>

					<div v-if="settings.nav.links.length > 0" class="links">
						<g-link
							v-for="link in settings.nav.links"
							:key="link.path"
							:to="link.path"
							class="link nav-link nav-secondary"
						>
							{{ link.title }}
						</g-link>
					</div>
				</div>

				<div class="header-item">
					<ClientOnly>
						<Search />
					</ClientOnly>
				</div>

				<div class="header-item">
					<ToggleTheme />

					<a
						v-if="settings.twitter"
						:href="settings.twitter"
						class="icon twitter"
						target="_blank"
						rel="noopener noreferrer"
						title="Twitter"
						name="Twitter"
					>
						<twitter-logo height="20px" width="20px" />
					</a>

					<a
						v-if="settings.discord"
						:href="settings.discord"
						class="icon discord"
						target="_blank"
						rel="noopener noreferrer"
						title="Discord"
						name="Discord"
					>
						<discord-logo height="24px" width="24px" />
					</a>

					<a
						v-if="settings.github"
						:href="settings.github"
						class="icon github"
						target="_blank"
						rel="noopener noreferrer"
						title="Github"
						name="Github"
					>
						<github-logo height="20px" width="20px" />
					</a>

					<g-link to="/download/" class="download icon nav-link">
						<DownloadIcon size="22" />
					</g-link>

					<g-link to="/download/" class="download hidden nav-link">
						{{ stable.version }}
					</g-link>
				</div>
			</div>
		</div>
	</div>
</template>

<static-query>
	query {
		metadata {
			siteName
			settings {
				github
				twitter
				discord
				nav {
					links {
						path
						title
					}
				}
			}
		}
	}
</static-query>

<script>
import { VariantEnum } from "../scripts/fetcher/VariantEnum.js";
import { TypeEnum } from "../scripts/fetcher/TypeEnum.js";
import Logo from "@/components/Logo.vue";
import ToggleTheme from "@/components/ToggleTheme";
import { DownloadIcon } from "vue-feather-icons";
import GithubLogo from "@/assets/images/github-logo.svg";
import TwitterLogo from "@/assets/images/twitter-logo.svg";
import DiscordLogo from "@/assets/images/discord-logo.svg";

const Search = () => import(/* webpackChunkName: "search" */ "@/components/Search").catch(error => console.warn(error));

export default {
	components: {
		Logo,
		Search,
		ToggleTheme,
		DownloadIcon,
		GithubLogo,
		TwitterLogo,
		DiscordLogo,
	},
	data: function() {
		return {
			stable: {
				version: "v0.00.0",
			},
		};
	},
	created: async function() {
		let stable = await this.fetcher().fetch(VariantEnum.TACHIYOMI, TypeEnum.STABLE);
		this.stable = stable.data;
	},
	computed: {
		meta() {
			return this.$static.metadata;
		},
		settings() {
			return this.meta.settings;
		},
	},
};
</script>

<style lang="stylus">
.layout-header {
	border-color var(--primary)
	border-top-width 2px
	padding-top 0.5rem
	padding-bottom 0.5rem

	.header-row {
		align-items center
		display flex
		justify-content space-between
		margin-left -0.5rem
		margin-right -0.5rem

		@media (min-width 640px) {
			margin-left -1rem
			margin-right -1rem
		}

		.header-item {
			padding-left 0.5rem
			padding-right 0.5rem

			@media (min-width 640px) {
				padding-left 1rem
				padding-right 1rem
			}

			&:nth-child(2) {
				width 100%
			}

			&:not(:nth-child(2)) {
				display flex
				align-items center
				justify-content flex-end
			}

			.brand {
				align-items center
				display flex

				svg {
					color var(--primary)
				}

				span {
					display none
					margin-left 0.5rem
					font-size 1.25rem
					font-weight 600
					user-select none

					@media (min-width 768px) {
						display block
					}
				}
			}

			.links {
				margin-left 0.5rem
				margin-right 1.25rem
				display none

				@media (min-width 640px) {
					margin-left 2rem
					display block
				}

				& .link {
					display block
					font-weight 500
					padding 0.25rem
					user-select none
				}
			}

			.icon {
				margin-left 1rem
				display none

				@media (min-width 640px) {
					display block
				}

				&.twitter {
					svg:hover {
						color #1da1f2
					}
				}

				&.discord {
					svg:hover {
						color #7289da
					}
				}

				&.github {
					display block
				}
			}

			.download {
				display none
				font-family Jost, Helvetica, Helvetica Neue, Segoe UI, Arial, sans-serif
				font-weight 500
				font-size 1.125rem
				margin-left 1rem
				padding 0.25rem
				color var(--typo)
				user-select none

				&:hover {
					color var(--primary)
				}

				@media (min-width 768px) {
					display block
				}

				&.icon {
					display block

					@media (min-width 768px) {
						display none
					}
				}
			}

			.nav-link {
				&.active {
					color var(--primary)
				}

				&:not(.active--exact) {
					&:hover {
						color var(--primary)
					}

					&.nav-primary {
						color var(--typo)

						&:hover {
							color var(--primary)
						}
					}
				}
			}
		}
	}
}
</style>
