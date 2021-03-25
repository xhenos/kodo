<template>
	<div class="index">
		<header ref="header" @resize="setHeaderHeight">
			<LayoutHeader />
		</header>

		<main>
			<div class="jumbotron">
				<div class="container">
					<div class="branding">
						<Logo :width="80" />
						<h2>
							Tachiyomi
						</h2>
					</div>
					<h1 class="description">
						Tachiyomi is an open-source Android app that lets you read any manga from your smartphone –
						faster and easier than ever.
					</h1>

					<div class="buttons">
						<g-link to="/download/" class="button transform">
							<DownloadIcon size="1x" />
							Download
						</g-link>
						<g-link to="/help/guides/getting-started/" class="button transform">
							<BookIcon size="1x" />
							User guide
						</g-link>
					</div>
					<span class="disclaimer">* Requires Android 5.0 or higher.</span>
				</div>
			</div>
			<div class="features container px-4 pt-8 pb-0 xl:py-4 xl:px-48">
				<div class="feature-container flex-wrap justify-center -mx-4">
					<div class="feature flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
						<UserCheckIcon size="3x" class="mb-6 text-ui-primary" />
						<h3 class="font-bold tracking-wide uppercase text-ui-primary">
							Tracking
						</h3>
						<p class="text-lg text-center">
							Automatically keep track of your manga with MyAnimeList, AniList, Kitsu, Shikimori,and
							Bangumi.
						</p>
					</div>

					<div class="feature flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
						<PackageIcon size="3x" class="mb-6 text-ui-primary" />
						<h3 class="font-bold tracking-wide uppercase text-ui-primary">
							Extensions
						</h3>
						<p class="text-lg text-center">
							Online and offline reading from sources like MangaDex, MangaKakalot, and hundreds more.
						</p>
					</div>

					<div class="feature flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
						<LayoutIcon size="3x" class="mb-6 text-ui-primary" />
						<h3 class="font-bold tracking-wide uppercase text-ui-primary">
							Customization
						</h3>
						<p class="text-lg text-center">
							A configurable reader with multiple reading modes, custom color filters, and other settings.
						</p>
					</div>
				</div>
			</div>
			<footer class="container">
				<div class="copyright">
					<a href="https://www.apache.org/licenses/LICENSE-2.0">Open-source Apache Licensed</a>
					| Copyright &copy; 2015{{ " - " + new Date().getFullYear() }} Javier Tomás
				</div>
				<div class="netlify">
					<a target="_blank" href="https://www.netlify.com/">This site is powered by Netlify</a>
					<netlify-logo height="0.8rem" width="0.8rem" />
				</div>
			</footer>
		</main>
	</div>
</template>

<static-query>
	query {
		metadata {
			siteName
			siteDescription
			settings {
				themeColor
			}
		}
	}
</static-query>

<script>
import LayoutHeader from "@/components/LayoutHeader";
import Logo from "@/components/Logo";
import NetlifyLogo from "@/assets/images/netlify-logo.svg";
import { DownloadIcon, BookIcon, UserCheckIcon, LayoutIcon, PackageIcon } from "vue-feather-icons";

export default {
	components: {
		LayoutHeader,
		Logo,
		DownloadIcon,
		BookIcon,
		UserCheckIcon,
		LayoutIcon,
		PackageIcon,
		NetlifyLogo,
	},
	data() {
		return {
			headerHeight: 0,
		};
	},
	methods: {
		setHeaderHeight() {
			this.$nextTick(() => {
				this.headerHeight = this.$refs.header.offsetHeight;
			});
		},
	},
	computed: {
		meta() {
			return this.$static.metadata;
		},
	},
	beforeMount() {
		this.$store.dispatch("init");
	},
	mounted() {
		this.setHeaderHeight();
	},
	metaInfo() {
		if (!this.$page) {
			return {
				title: "Home",
				meta: [
					{
						key: "og:type",
						name: "og:type",
						content: "website",
					},
					{
						key: "twitter:card",
						name: "twitter:card",
						content: "summary_large_image",
					},
					{
						key: "og:image",
						name: "og:image",
						content: process.env.SITE_URL + process.env.SITE_URL_PREFIX + "/ogimage_large.png",
					},
					{
						key: "twitter:image",
						name: "twitter:image",
						content: process.env.SITE_URL + process.env.SITE_URL_PREFIX + "/ogimage_large.png",
					},
					{
						key: "theme-color",
						name: "theme-color",
						content: this.$static.metadata.settings.themeColor,
					},
				],
			};
		}
	},
};
</script>

<style lang="stylus">
.index {
	color var(--color-ui-typo)
	display flex
	flex-direction column
	justify-content flex-start
	min-height 100vh
	font-family system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale

	header {
		position sticky
		top 0
		z-index 10
		width 100%
		background-color inherit
		backdrop-filter none
	}

	main {
		position absolute
		top 0
		left 0
		right 0

		.jumbotron {
			display flex
			flex-wrap wrap
			align-content center

			.container {
				margin 8rem auto 2rem auto
				padding-left 1rem
				padding-right 1rem
				display flex
				flex-direction column
				align-items center

				@media (min-width 1280px) {
					margin-top 12rem
					margin-bottom 6rem
					padding-left 12rem
					padding-right 12rem
				}

				.branding {
					display flex
					flex-direction column
					align-items center
					margin-bottom 0.5rem
					color var(--color-ui-primary)

					h2 {
						font-size 3rem
						margin-top 1.25rem
						font-weight 500
						letter-spacing -0.05em
						border-style none

						@media (min-width 1024px) {
							font-size 4rem
							margin-top 0.5rem
						}
					}
				}

				.description {
					font-size 1.5rem
					font-weight 400
					text-align center

					@media (min-width 1024px) {
						font-size 1.875rem
					}
				}

				.buttons {
					width 100%
					display flex
					flex-direction column
					justify-content center
					margin-top 2rem

					@media (min-width 768px) {
						width auto
						flex-direction row
					}

					.button {
						display flex
						align-items center
						padding 1rem 1.5rem 1rem 1.5rem
						width 83.333333%
						font-size 1.5rem
						font-weight 700
						margin-left auto
						margin-right auto
						line-height 1
						color #ffffff
						background-color var(--color-ui-primary)
						border-width 1px
						border-color var(--color-ui-primary)
						border-radius 0.5rem
						box-shadow -1px 2px 15px -3px #0000009c
						transition-property all
						transition-duration 200ms
						transition-timing-function cubic-bezier(0, 0, 0.2, 1)
						user-select none
						place-content center

						&:hover {
							--transform-translate-y -0.25rem
						}

						@media (min-width 768px) {
							width auto
						}

						&:first-child {
							order 1

							@media (min-width 768px) {
								margin-right 0.5rem
							}
						}

						&:last-child {
							order 2
							margin-top 0.5rem

							@media (min-width 768px) {
								margin-top auto
							}
						}

						svg {
							margin-right 1rem
						}
					}
				}

				.disclaimer {
					margin-top 1rem
				}
			}
		}

		.features {
			margin-left auto
			margin-right auto

			.feature-container {
				display flex

				.feature {
					display flex
				}
			}
		}
	}

	footer {
		position relative
		padding 2.5rem
		text-align center

		.copyright {
			font-size 0.9rem

			a {
				color var(--color-ui-typo)
				font-weight normal

				&:hover {
					text-decoration underline
				}
			}
		}

		.netlify {
			margin-top 1rem
			font-size 0.8rem

			a {
				color var(--color-ui-primary)
				font-weight 500

				&:hover {
					color #24827a
				}
			}

			svg {
				display inline-block
				-ms-transform rotate(360deg)
				-webkit-transform rotate(360deg)
				transform rotate(360deg)
				margin-bottom 2px
				margin-left 4px
				width 1em
				height 1em
			}
		}
	}
}

@css {
	.index header input {
		background-color: rgba(var(--color-ui-search), 0.7) !important;
		filter: brightness(var(--color-ui-search-fade));
	}

	.index header input::placeholder {
		color: var(--color-ui-search-text);
	}

	.index main .jumbotron {
		background: linear-gradient(
				0deg,
				rgba(var(--index-background-gradient-start), 100%) 1%,
				rgba(var(--index-background-gradient-end), var(--index-background-gradient-start-alpha))
			),
			var(--index-background-image);
		background-position: center;
		background-size: 2000px;
	}

	@media screen and (max-width: 800px) {
		.index main .jumbotron {
			background-size: 800px;
		}
	}
}
</style>
