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
				<aside v-if="hasSidebar" class="sidebar" :class="{ open: sidebarOpen }" :style="sidebarStyle">
					<div class="w-full pb-16 bg-ui-background">
						<Sidebar @navigate="sidebarOpen = false" />
					</div>
				</aside>

				<div class="w-full pb-24" :class="{ 'pl-0 lg:pl-12 lg:w-3/4': hasSidebar, 'xl:mx-48': !hasSidebar }">
					<slot />
				</div>
			</main>
		</div>

		<div v-if="hasSidebar" class="fixed bottom-0 right-0 z-50 p-8 lg:hidden">
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
						content: process.env.SITE_COLOR || "#667EEA",
					},
				],
			};
		}
	},
};
</script>

<style lang="scss">
* {
	transition-property: color, background-color, border-color;
	transition-duration: 0ms;
	transition-timing-function: ease-in-out;
}

h1,
h2,
h3,
h4 {
	@apply leading-snug font-semibold mb-4 text-ui-typo;

	&:hover {
		a::before {
			@apply opacity-100;
		}
	}

	a {
		&::before {
			content: "#";
			margin-left: -1em;
			padding-right: 1em;
			@apply text-ui-primary absolute opacity-0 float-left;
		}
	}
}

h1 {
	@apply text-4xl;
}

h2 {
	@apply text-2xl;
}

h3 {
	@apply text-xl;
}

h4 {
	@apply text-lg;
}

a:not(.active):not(.text-ui-primary):not(.text-white):not(:hover) {
	@apply text-ui-typo;
}

p,
ol,
ul,
pre,
strong,
blockquote {
	@apply mb-4 text-base text-ui-typo;
}

.content {
	a {
		@apply text-ui-primary underline;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		@apply -mt-12 pt-20;
	}

	h2 + h3,
	h2 + h2,
	h3 + h3 {
		@apply border-none -mt-20;
	}

	h2,
	h3 {
		@apply border-b border-ui-border pb-1 mb-3;
	}

	ul {
		@apply list-disc;

		ul {
			list-style: circle;
		}
	}

	ol {
		@apply list-decimal;
	}

	ol,
	ul {
		@apply pl-5 py-1;

		li {
			@apply mb-2;

			p {
				@apply mb-0;
			}

			&:last-child {
				@apply mb-0;
			}
		}
	}
}

blockquote {
	@apply border-l-4 border-ui-border py-2 pl-4;

	p:last-child {
		@apply mb-0;
	}
}

code {
	@apply px-1 py-1 text-ui-typo bg-ui-sidebar font-mono border-b border-r border-ui-border text-sm rounded;
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

header {
	background-color: rgba(255, 255, 255, 0.9);
	backdrop-filter: blur(4px);
}

table {
	@apply text-left mb-6;

	td,
	th {
		@apply py-3 px-4;
		&:first-child {
			@apply pl-0;
		}
		&:last-child {
			@apply pr-0;
		}
	}

	tr {
		@apply border-b border-ui-border;
		&:last-child {
			@apply border-b-0;
		}
	}
}

.sidebar {
	@apply fixed bg-ui-background px-4 inset-x-0 bottom-0 w-full border-r border-ui-border overflow-y-auto transition-all z-40;
	transform: translateX(-100%);

	&.open {
		transform: translateX(0);
	}

	@screen lg {
		@apply w-1/4 px-0 bg-transparent top-0 bottom-auto inset-x-auto sticky z-0;
		transform: translateX(0);
	}
}

.bg-ui-container {
	background: var(--color-ui-container);
}

.videolink {
	background-color: transparent !important;
	border: none !important;
	padding-left: 0.25rem !important;
	font-size: 0.9rem;
	text-align: left;
	p {
		margin-top: 0;
	}
	a,
	.material-holder {
		color: var(--color-ui-primary) !important;
	}
}

.note {
	* {
		font-size: 0.9rem;
		text-align: right;
	}
	p {
		color: rgba(0, 0, 0, 0.4) !important;
	}
	a {
		color: var(--color-ui-primary) !important;
	}
}

// TODO Move color to a varaible?
html[lights-out] {
	.note {
		p {
			color: rgba(255, 255, 255, 0.4) !important;
		}
	}
}

.guide {
	background-color: var(--color-ui-container);
	border-radius: 0.5em; //$containerBorderRadius;
	margin: 1rem 0;
	padding: 0.1rem 1.5rem;
	.title {
		font-weight: bold;
	}
	.videolink {
		margin-top: -1rem;
	}
}

.custom-block {
	padding-left: 1.25rem;
	padding-right: 1rem;
	border-radius: 0.125rem;
	overflow: hidden;
	position: relative;
	background-color: var(--color-ui-container);
	border: 1px solid #e4e8ef;
	border-radius: 6px;
	margin-bottom: 0.5rem;
	.c-title {
		margin-top: 1rem;
		margin-bottom: -0.75rem;
		&:empty {
			display: none;
		}
	}

	&.c- {
		&tip &warning &danger {
			padding-left: 3.75rem;
			&:before {
				content: "";
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				margin-top: 1rem;
				margin-left: 1rem;
				width: 1.75rem;
				height: 1.75rem;
				background-size: contain;
			}
		}

		&tip {
			background-color: rgba(#184cef, 0.02); // alpha($customTip, 2%);
			border: 1px solid rgba(#184cef, 0.2); // alpha($customTip, 20%);
			&:before {
				background: transparent url(https://tachiyomi.org/assets/icon_warning.svg) no-repeat 0 0;
			}
			a {
				color: #184cef; // $customTip;
			}
			h4 {
				color: darken(#184cef, 60%); // darken($customTip, 60%);
			}
		}

		&warning {
			background-color: rgba(#b29400, 0.02); // alpha($customWarning, 2%);
			border: 1px solid rgba(#b29400, 0.2); // alpha($customWarning, 20%);
			&:before {
				background: transparent url(https://tachiyomi.org/assets/icon_warning.svg) no-repeat 0 0;
			}
			a {
				color: #b29400; // $customWarning;
			}

			h4 {
				color: darken(#b29400, 40%); // darken($customWarning, 40%);
			}
		}

		&danger {
			background-color: rgba(#e5422b, 0.02); // alpha($customDanger, 2%);
			border: 1px solid rgba(#e5422b, 0.2); // alpha($customDanger, 20%);
			&:before {
				background: transparent url(https://tachiyomi.org/assets/icon_warning.svg) no-repeat 0 0;
			}
			a {
				color: #e5422b; // $customDanger;
			}
			h4 {
				color: darken(#e5422b, 40%); // darken($customDanger, 40%);
			}
		}
	}

	&.aside {
		background-color: transparent;
		border: none;
		color: transparentify(#2c3e50, 0.4); // transparentify($textColor, 0.4);
		font-size: 0.9rem;
		text-align: right;
	}

	&.aside-guide {
		background-color: transparent;
		border: none;
		font-size: 0.9rem;
		text-align: left;
		padding-left: unset;
		p {
			margin-top: 0;
		}
		a {
			color: #476582; // $accentColorSecondary;
		}
	}
}
</style>
