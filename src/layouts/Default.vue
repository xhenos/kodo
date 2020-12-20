<template>
	<div class="font-sans antialiased text-ui-typo bg-ui-background">
		<div class="flex flex-col justify-start min-h-screen">
			<header
				ref="header"
				class="sticky top-0 z-10 w-full border-b bg-ui-background border-ui-border"
				@resize="setHeaderHeight"
			>
				<LayoutHeader />
			</header>

			<main class="container relative flex flex-wrap justify-start flex-1 w-full bg-ui-background">
				<aside
					v-if="hasSidebar && this.$page.markdownPage.sidebar !== ''"
					class="sidebar"
					:class="{ open: sidebarOpen }"
					:style="sidebarStyle"
				>
					<div class="w-full pb-16 bg-ui-background">
						<Sidebar @navigate="sidebarOpen = false" />
					</div>
				</aside>

				<div
					class="w-full pb-24"
					:class="{
						'pl-0 lg:pl-12 lg:w-3/4': hasSidebar && this.$page.markdownPage.sidebar !== '',
						'xl:mx-48': !hasSidebar,
					}"
				>
					<slot />
				</div>
			</main>
		</div>

		<div
			v-if="hasSidebar && this.$page.markdownPage.sidebar !== ''"
			class="fixed bottom-0 right-0 z-50 p-8 lg:hidden"
		>
			<button
				class="p-3 text-white rounded-full shadow-lg bg-ui-primary hover:text-white"
				@click="sidebarOpen = !sidebarOpen"
			>
				<XIcon v-if="sidebarOpen" />
				<MenuIcon v-else />
			</button>
		</div>
	</div>
</template>

<static-query>
query {
	metadata {
		siteName
	}
}
</static-query>

<script>
import Sidebar from "@/components/Sidebar";
import LayoutHeader from "@/components/LayoutHeader";
import { MenuIcon, XIcon } from "vue-feather-icons";

export default {
	components: {
		Sidebar,
		LayoutHeader,
		MenuIcon,
		XIcon,
	},
	data() {
		return {
			headerHeight: 0,
			sidebarOpen: false,
		};
	},
	watch: {
		sidebarOpen: function(isOpen) {
			document.body.classList.toggle("overflow-hidden", isOpen);
		},
	},
	methods: {
		setHeaderHeight() {
			this.$nextTick(() => {
				this.headerHeight = this.$refs.header.offsetHeight;
			});
		},
	},
	computed: {
		sidebarStyle() {
			return {
				top: this.headerHeight + "px",
				height: `calc(100vh - ${this.headerHeight}px)`,
			};
		},
		hasSidebar() {
			return this.$page && this.headerHeight > 0;
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

<style lang="scss">
// Temporary as SCSS until I figure out how Stylus does this

.content {

	h2 + h3,
	h2 + h2,
	h3 + h3 {
		@apply border-none -mt-20;
	}
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

header {
	background-color rgba(255, 255, 255, 0.9)
	backdrop-filter blur(4px)
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

.sidebar {
	@apply fixed bg-ui-background px-4 inset-x-0 bottom-0 w-full border-r border-ui-border overflow-y-auto z-40
	transform translateX(-100%)

	&.open {
		transform translateX(0)
	}

	@media (min-width theme('screens.lg')) {
		@apply w-1/4 px-0 bg-transparent top-0 bottom-auto inset-x-auto sticky z-0
		transform translateX(0)
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
	padding-bottom 1rem
	text-align left

	p {
		margin-top 0
		font-size 0.9rem
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

html[dark-mode] {

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
