<template>
	<div class="default-vue">
		<div class="whole-page">
			<header ref="header" @resize="setHeaderHeight">
				<LayoutHeader />
			</header>

			<main class="container">
				<aside
					v-if="hasSidebar && this.$page.markdownPage.sidebar"
					class="sidebar"
					:class="{ open: sidebarOpen }"
					:style="sidebarStyle"
				>
					<div>
						<Sidebar @navigate="sidebarOpen = false" />
					</div>
				</aside>

				<div
					class="main-content"
					:class="{
						'has-sidebar': hasSidebar && this.$page.markdownPage.sidebar,
						'no-sidebar': !hasSidebar,
					}"
				>
					<slot />
				</div>
			</main>
		</div>

		<div v-if="hasSidebar && this.$page.markdownPage.sidebar !== ''" class="sidebar-button">
			<button @click="sidebarOpen = !sidebarOpen">
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
			settings {
				themeColor
			}
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
						content: this.$static.metadata.settings.themeColor,
					},
				],
			};
		}
	},
};
</script>

<style lang="stylus">
.default-vue {
	background-color var(--color-ui-background)
	color var(--color-ui-typo)
	font-family system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
	-webkit-font-smoothing antialiased
	-moz-osx-font-smoothing grayscale

	.whole-page {
		display flex
		flex-direction column
		justify-content flex-start
		min-height 100vh

		header {
			background-color var(--color-ui-background)
			border-color var(--color-ui-border)
			border-bottom-width 1px
			position sticky
			top 0
			z-index 10
			width 100%

			svg {
				&:not(.feather-search):hover {
					color var(--color-ui-primary)
				}
			}
		}

		main {
			background-color var(--color-ui-background)
			position relative
			display flex
			flex 1 1 0%
			flex-wrap wrap
			justify-content flex-start
			width 100%

			.sidebar {
				position fixed
				background-color var(--color-ui-background)
				padding-left 1rem
				padding-right 1rem
				right 0
				left 0
				bottom 0
				width 100%
				border-right-width 1px
				border-color var(--color-ui-border)
				overflow-y auto
				z-index 40
				transform translateX(-100%)

				&.open {
					transform translateX(0)
				}

				> div {
					width 100%
					padding-bottom 4rem
					background-color var(--color-ui-background)
				}

				@media (min-width 1024px) {
					width 25%
					padding-left 0
					padding-right 0
					background-color transparent
					top 0
					bottom auto
					right auto
					left auto
					position sticky
					z-index 0
					transform translateX(0)
				}
			}

			.main-content {
				width 100%
				padding-bottom 6rem

				&.has-sidebar {
					padding-left 0

					@media (min-width 1024px) {
						padding-left 3rem
						width 75%
					}
				}

				&.no-sidebar {
					@media (min-width 1280px) {
						margin-left 12rem
						margin-right 12rem
					}
				}
			}
		}
	}

	.sidebar-button {
		position fixed
		bottom 0
		right 0
		z-index 50
		padding 2rem

		@media (min-width 1024px) {
			display none
		}

		button {
			padding 0.75rem
			color #ffffff
			border-radius 9999px
			box-shadow 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)
			background-color var(--color-ui-primary)

			&:hover {
				color #ffffff
			}
		}
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
</style>
