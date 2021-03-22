<template>
	<div class="index font-sans antialiased text-ui-typo">
		<div class="flex flex-col justify-start min-h-screen">
			<header ref="header" class="sticky top-0 z-10 w-full border-b border-ui-border" @resize="setHeaderHeight">
				<LayoutHeader />
			</header>

			<main>
				<div class="jumbotron flex flex-wrap content-center">
					<div
						class="container mx-auto px-4 flex flex-col items-center mt-32 mb-8 xl:mt-48 xl:mb-24 xl:px-48"
					>
						<div class="flex flex-col items-center mb-2 text-ui-primary">
							<Logo :width="80" />
							<h2 class="text-5xl mt-5 lg:mt-2 lg:text-6xl font-medium tracking-tighter border-none">
								Tachiyomi
							</h2>
						</div>
						<h1 class="text-2xl font-normal text-center lg:text-3xl">
							Tachiyomi is an open-source Android app that lets you read any manga from your smartphone –
							faster and easier than ever.
						</h1>

						<div class="w-full md:w-auto flex flex-col md:flex-row justify-center mt-8">
							<g-link
								to="/download/"
								class="flex order-1 items-center place-content-center px-6 w-10/12 md:w-auto py-4 mx-auto md:mr-2 text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1 select-none"
							>
								<DownloadIcon class="mr-4" size="1x" />
								Download
							</g-link>
							<g-link
								to="/help/guides/getting-started/"
								class="flex order-2 items-center place-content-center px-6 w-10/12 md:w-auto py-4 mx-auto mt-2 md:mt-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1 select-none"
							>
								<BookIcon class="mr-4" size="1x" />
								User guide
							</g-link>
						</div>
						<span class="versionDisclaimer mt-4">* Requires Android 5.0 or higher.</span>
					</div>
				</div>
				<div class="features container mx-auto px-4 pt-8 pb-0 xl:py-4 xl:px-48">
					<div class="flex flex-wrap justify-center -mx-4">
						<div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
							<UserCheckIcon size="3x" class="mb-6 text-ui-primary" />
							<h3 class="font-bold tracking-wide uppercase text-ui-primary">
								Tracking
							</h3>
							<p class="text-lg text-center">
								Automatically keep track of your manga with MyAnimeList, AniList, Kitsu, Shikimori,and
								Bangumi.
							</p>
						</div>

						<div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
							<PackageIcon size="3x" class="mb-6 text-ui-primary" />
							<h3 class="font-bold tracking-wide uppercase text-ui-primary">
								Extensions
							</h3>
							<p class="text-lg text-center">
								Online and offline reading from sources like MangaDex, MangaKakalot, and hundreds more.
							</p>
						</div>

						<div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
							<LayoutIcon size="3x" class="mb-6 text-ui-primary" />
							<h3 class="font-bold tracking-wide uppercase text-ui-primary">
								Customization
							</h3>
							<p class="text-lg text-center">
								A configurable reader with multiple reading modes, custom color filters, and other
								settings.
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

<style>
.index main {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
}

.jumbotron {
	background: linear-gradient(
			0deg,
			rgba(var(--index-background-gradient-start), 100%) 1%,
			rgba(var(--index-background-gradient-end), var(--index-background-gradient-start-alpha))
		),
		var(--index-background-image);
	background-size: 2000px;
	background-position: center;

	@media screen and (max-width: 800px) {
		background-size: 800px;
	}
}

.index header {
	backdrop-filter: none;
	background-color: inherit;
	border-bottom: none;
}

.index header input {
	background-color: rgba(var(--color-ui-search), 0.7) !important;
	filter: brightness(var(--color-ui-search-fade));
}

.index header input::placeholder {
	color: var(--color-ui-search-text);
}
</style>

<style lang="stylus">
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
</style>
