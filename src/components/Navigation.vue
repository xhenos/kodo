<template>
	<span v-if="nav.link" id="NavigationVue" class="app-navigation" :class="nav.class" title="App navigation">
		<g-link class="app-link" :to="nav.link + entry">
			<MaterialIcon v-if="nav.icon" class="app-icon select-none" :icon="nav.icon" />
			<span class="app-label" :class="nav.internalClass">{{ nav.text }}</span>
			<slot />
		</g-link>
	</span>
	<span v-else id="NavigationVue" class="app-navigation" :class="nav.class" title="App navigation">
		<MaterialIcon v-if="nav.icon" class="app-icon select-none" :icon="nav.icon" />
		<span class="app-label" :class="nav.internalClass">{{ nav.text }}</span>
		<slot />
	</span>
</template>

<script>
/**
 * Code example: <Navigation item="library"/>
 */
export default {
	props: {
		item: {
			type: String,
			required: true,
		},
		entry: {
			type: String,
			default: "",
		},
	},
	computed: {
		nav() {
			// prettier-ignore
			return {
				/* Menus */
				library: { text: "Library", icon: "collections_bookmark" },
				updates: { text: "Updates", icon: "new_releases" },
				history: { text: "History", icon: "history" },
				browse: { text: "Browse", icon: "explore" },
				more: { text: "More", icon: "more_horiz" },
				/* Actions */
				update_library: { text: "Update library", icon: "refresh" },
				search: { text: "Search", icon: "search" },
				filter: { text: "Filter", icon: "filter_list" },
				edit: { text: "EDIT", icon:"edit" },
				delete: { text: "DELETE", icon:"delete" },
				/* More */
				downloaded_only: { text: "Downloaded only", icon: "cloud_off" },
				download_queue: { text: "Download queue", icon: "get_app" },
				categories: { text: "Categories", icon: "label" },
				settings: { text: "Settings", icon: "settings" },
				about: { text: "About", icon: "info" },
				help: { text: "Help", icon: "help" },
				source_migration: { text: "Source migration", icon: "compare_arrows" },
				/* Settings */
				settings_general: { text: "General", icon: "tune" },
				settings_library: { text: "Library", icon: "collections_bookmark" },
				settings_reader: { text: "Reader", icon: "chrome_reader_mode" },
				settings_downloads: { text: "Downloads", icon: "get_app" },
				settings_tracking: { text: "Tracking", icon: "autorenew" },
				settings_browse: { text: "Browse", icon: "explore" },
				settings_backup: { text: "Backup", icon: "backup" },
				settings_security: { text: "Security", icon: "security" },
				settings_advanced: { text: "Advanced", icon: "code" },
				/* Library info */
				bookmark: { text: "Add to library", icon: "favorite_border" },
				bookmarked: { text: "In library", icon: "favorite" },
				tracking: { text: "Tracking", icon: "sync" },
				set_categories: { text: "Set categories", icon: "label" },
				share: { text: "Share", icon: "share" },
				webview: { text: "WebView", icon: "public" },
				/* Browse */
				button_latest: { text: "LATEST" },
				button_browse: { text: "BROWSE" },
				tab_sources: { text: "SOURCES" },
				tab_extensions: { text: "EXTENSIONS" },
				sources: { text: "Sources" },
				latest: { text: "Latest" },
				extensions: { text: "Extensions" },
				migrate: { text: "Migrate" },
				/* Misc */
				install: { text: "INSTALL", class:"ext-installation" },
				reorder: { text: "Reorder", icon:"reorder" },
				overflow: { text: "Overflow", icon:"more_vert" },
				/* Forks */
				neko: { text: "Neko", link:"/forks/Neko/", class:"forkLink forkIconNeko"},
				tachiyomij2k: { text: "TachiyomiJ2K", link:"/forks/TachiyomiJ2K/", class:"forkLink forkIconJ2K"},
				tachiyomiaz: { text: "TachiyomiAZ", link:"/forks/TachiyomiAZ/", class:"forkLink forkIconAZ"},
				tachiyomisy: { text: "TachiyomiSY", link:"/forks/TachiyomiSY/", class:"forkLink forkIconSY"},
				tachiyomieh: { text: "TachiyomiEH", link:"/forks/TachiyomiEH/", class:"forkLink forkIconEH"},
			}[this.item];
		},
	},
};
</script>

<style lang="stylus">
.forkLink {
	font-size inherit !important
	&.forkIconNeko::before {
		content ""
		display inline-block
		background url("/assets/forks_logo-neko.png") no-repeat
		vertical-align middle
		background-size 1.4em
		width 1.4em
		height 1.4em
		margin-bottom 0.2em
		margin-right 0.2em
	}
	&.forkIconJ2K::before {
		content ""
		display inline-block
		background url("/assets/forks_logo-j2k.png") no-repeat
		vertical-align middle
		background-size 1.4em
		width 1.4em
		height 1.4em
		margin-bottom 0.2em
		margin-right 0.2em
	}
	&.forkIconAZ::before {
		content ""
		display inline-block
		background url("/assets/forks_logo-az.png") no-repeat
		vertical-align middle
		background-size 1.4em
		width 1.4em
		height 1.4em
		margin-bottom 0.2em
		margin-right 0.2em
	}
	&.forkIconSY::before {
		content ""
		display inline-block
		background url("/assets/forks_logo-sy.png") no-repeat
		vertical-align middle
		background-size 1.4em
		width 1.4em
		height 1.4em
		margin-bottom 0.2em
		margin-right 0.2em
	}
	&.forkIconEH::before {
		content ""
		display inline-block
		background url("/assets/forks_logo-eh.png") no-repeat
		vertical-align middle
		background-size 1.4em
		width 1.4em
		height 1.4em
		margin-bottom 0.2em
		margin-right 0.2em
	}
	.app-label {
		font-size inherit !important
	}
}

#NavigationVue {

	&.app-navigation {
		white-space pre
		font-size 0

		.app-icon,
		.app-label {
			color var(--color-ui-primary)
			font-weight 500
			font-size 1rem
		}

		.app-icon {
			vertical-align top
			padding-right 0.25rem
		}

		.app-link {

			&:hover {
				cursor pointer
				text-decoration none !important

				.app-icon,
				.app-label {
					color #2e84bf // TODO $accentColor;
				}
			}
		}

		.app-image {
			max-height 1.5em
			vertical-align sub
		}

		&:hover {
			cursor default
		}
	}
}

blockquote {

	.app-navigation .app-icon,
	.app-label {
		color inherit !important
	}
}
</style>
