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
								class="flex order-1  items-center place-content-center px-6 w-10/12 md:w-auto py-4 mx-auto md:mr-2 text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1 select-none"
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
				<div class="copyright container mx-auto px-4 py-8 ">
					<p class="mt-8 text-center">
						<a href="https://www.apache.org/licenses/LICENSE-2.0">Open-source Apache Licensed</a>
						| Copyright &copy; 2015{{ " - " + new Date().getFullYear() }} Javier Tomás
					</p>
				</div>
			</main>
		</div>
	</div>
</template>

<static-query>
	query {
		metadata {
			siteName
			siteDescription
		}
	}
</static-query>

<script>
import LayoutHeader from "@/components/LayoutHeader";
import Logo from "@/components/Logo";
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
						content: process.env.SITE_COLOR || "#667EEA",
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

@media screen and (max-width: 800px) {
	.jumbotron {
		background-size: 800px;
	}
}
</style>

<style lang="scss" scoped>
// Temporary as SCSS until I figure out how Stylus does this

.home-links a {
	margin-right: 1rem;
}

.content {
	h2 + h3,
	h2 + h2,
	h3 + h3 {
		@apply border-none -mt-20;
	}
}

h1 + .videolink,
h2 + .videolink,
h3 + .videolink {
	margin-top: -1rem;
}

pre[class*="language-"] {
	@apply max-w-full overflow-x-auto rounded;

	& + p {
		@apply mt-4;
	}

	& > code[class*="language-"] {
		@apply border-none leading-relaxed;
	}
}
</style>

<style lang="stylus">
* {
	transition-property color, background-color, border-color
	transition-duration 0ms
	transition-timing-function ease-in-out
}

h1,
h2,
h3,
h4 {
	@apply leading-snug font-semibold mb-4 text-ui-header

	&:hover {
		a::before {
			@apply opacity-100
		}
	}

	a {
		&::before {
			content "#"
			margin-left -1em
			padding-right 1em

			@apply text-ui-primary absolute opacity-0 float-left
		}
	}
}

h1 {
	@apply text-4xl
}

h2 {
	@apply text-2xl
}

h3 {
	@apply text-xl
}

h4 {
	@apply text-lg
}

a:not(.active):not(.text-ui-primary):not(.text-white):not(:hover) {
	@apply text-ui-typo
}

p,
ol,
ul,
pre,
strong,
blockquote {
	@apply mb-4 text-base text-ui-typo
}

.content {
	a {
		@apply text-ui-primary underline
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		@apply -mt-12 pt-20
	}

	h2,
	h3 {
		@apply border-b border-ui-border pb-1 mb-3
	}

	ul {
		@apply list-disc

		ul {
			list-style circle
		}
	}

	ol {
		@apply list-decimal
	}

	ol,
	ul {
		@apply pl-5 py-1

		li {
			@apply mb-2

			p {
				@apply mb-0
			}

			&:last-child {
				@apply mb-0
			}
		}
	}
}

blockquote {
	@apply border-l-4 py-2 pl-4 mt-4

	border-left-color var(--color-ui-gray)

	p:last-child {
		@apply mb-0
	}
}

code {
	@apply px-1 py-1 text-ui-typo bg-ui-sidebar font-mono border-b border-r border-ui-border text-sm rounded
}

table {
	@apply text-left mb-6

	td,
	th {
		@apply py-3 px-4

		&:first-child {
			@apply pl-0
		}

		&:last-child {
			@apply pr-0
		}
	}

	tr {
		@apply border-b border-ui-border

		&:last-child {
			@apply border-b-0
		}
	}
}

.bg-ui-container {
	background var(--color-ui-container)
}

.videolink {
	background-color transparent !important
	border none !important
	padding-left 0.75rem !important
	padding-top 0.25rem
	text-align left

	p {
		margin-top 0
		font-size 0.9rem
	}

	.material-holder {
		user-select none
	}

	a,
	.material-holder {
		color var(--color-ui-primary)
	}
}

.note {
	* {
		font-size 0.9rem
		text-align right
	}

	p {
		color rgba(0, 0, 0, 0.4) !important
	}

	a {
		color var(--color-ui-primary) !important
	}
}

// TODO Move color to a varaible?

html [data-theme=dark],
html [data-theme=experimental] {
	.note {
		p {
			color rgba(255, 255, 255, 0.4) !important
		}
	}
}

.guide {
	background-color var(--color-ui-container)
	border-radius 0.5em // $containerBorderRadius;
	margin 1rem 0
	padding 0.1rem 1.5rem

	.title {
		font-weight bold
	}

	.videolink {
		margin-top -1rem
	}
}
</style>
