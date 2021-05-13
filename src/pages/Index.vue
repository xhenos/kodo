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
			<div class="features container">
				<div class="feature-container">
					<div class="feature">
						<UserCheckIcon size="3x" />
						<h3>
							Tracking
						</h3>
						<p>
							Automatically keep track of your manga with MyAnimeList, AniList, Kitsu, Shikimori,and
							Bangumi.
						</p>
					</div>

					<div class="feature">
						<PackageIcon size="3x" />
						<h3>
							Extensions
						</h3>
						<p>
							Online and offline reading from sources like MangaDex, MangaKakalot, and hundreds more.
						</p>
					</div>

					<div class="feature">
						<LayoutIcon size="3x" />
						<h3>
							Customization
						</h3>
						<p>
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
						content: process.env.SITE_URL + "/ogimage_large.png",
					},
					{
						key: "twitter:image",
						name: "twitter:image",
						content: process.env.SITE_URL + "/ogimage_large.png",
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
	display flex
	flex-direction column
	justify-content flex-start
	min-height 100vh
	color var(--text)
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

		svg {
			&:not(.feather-search):hover {
				color var(--primary)
			}
		}
	}

	main {
		position absolute
		top 0
		right 0
		left 0

		.jumbotron {
			display flex
			flex-wrap wrap
			align-content center

			.container {
				display flex
				flex-direction column
				align-items center
				margin 8rem auto 2rem
				padding-right 1rem
				padding-left 1rem

				@media (min-width 1280px) {
					margin-top 12rem
					margin-bottom 6rem
					padding-right 12rem
					padding-left 12rem
				}

				.branding {
					display flex
					flex-direction column
					align-items center
					margin-bottom 0.5rem
					color var(--primary)

					h2 {
						margin-top 1.25rem
						border-style none
						letter-spacing -0.05em
						font-weight 500
						font-size 3rem

						@media (min-width 1024px) {
							margin-top 0.5rem
							font-size 4rem
						}
					}
				}

				.description {
					text-align center
					font-weight 400
					font-size 1.5rem

					@media (min-width 1024px) {
						font-size 1.875rem
					}
				}

				.buttons {
					display flex
					flex-direction column
					justify-content center
					margin-top 2rem
					width 100%

					@media (min-width 768px) {
						flex-direction row
						width auto
					}

					.button {
						display flex
						align-items center
						margin-right auto
						margin-left auto
						padding 1rem 1.5rem
						width 83.333333%
						border-width 1px
						border-color var(--primary)
						border-radius 0.5rem
						background-color var(--primary)
						box-shadow -1px 2px 15px -3px #0000009c
						color #ffffff
						font-weight 700
						font-size 1.5rem
						line-height 1
						transition-timing-function cubic-bezier(0, 0, 0.2, 1)
						transition-duration 200ms
						transition-property all
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
			margin-right auto
			margin-left auto
			padding 2rem 1rem 0rem 1rem

			@media (min-width 1280px) {
				padding 1rem 12rem 1rem 12rem
			}

			.feature-container {
				display flex
				flex-wrap wrap
				justify-content center
				margin-left -1rem
				margin-right -1rem

				.feature {
					display flex
					flex-direction column
					align-items center
					width 100%
					padding-left 1rem
					padding-right 1rem
					margin-bottom 2rem
					text-align center

					@media (min-width 768px) {
						width 33.333333%
					}

					svg {
						color var(--primary)
						margin-bottom 1.5rem
					}

					h3 {
						font-weight 700
						letter-spacing 0.025em
						text-transform uppercase
						color var(--primary)
					}

					p {
						font-size 1.125rem
						text-align center
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
					color var(--text)
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
					color var(--primary)
					font-weight 500

					&:hover {
						color #24827a
					}
				}

				svg {
					display inline-block
					margin-bottom 2px
					margin-left 4px
					width 1em
					height 1em
					transform rotate(360deg)
					-ms-transform rotate(360deg)
					-webkit-transform rotate(360deg)
				}
			}
		}
	}
}


@css {
	.index header input {
		background-color: rgba(var(--search), 0.7) !important;
		filter: brightness(var(--search-fade));
	}

	.index header input::placeholder {
		color: var(--search-text);
	}

	.index main .jumbotron {
		background: linear-gradient(
				0deg,
				rgba(var(--index-background-gradient-start), 100%) 1%,
				rgba(var(--index-background-gradient-end), var(--index-background-gradient-start-alpha))
			),
			var(--index-background-image);
		background-position: center;
		background-size: 1500px;
	}

	@media screen and (max-width: 800px) {
		.index main .jumbotron {
			background-size: 800px;
		}
	}
}
</style>
