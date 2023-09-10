// https://vitepress.dev/guide/custom-theme
import DefaultTheme from "vitepress/theme"

// Import Stylus files
import "./styles/base.styl"

// Import Global plugins
import "element-plus/theme-chalk/dark/css-vars.css"

// Import Google Analytics plugin
import googleAnalytics from "vitepress-plugin-google-analytics"

import { VueQueryPlugin } from "@tanstack/vue-query"

import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client"

// Import components
import { IconBugReport, IconDownload, IconNewspaperVariant } from "@iconify-prerendered/vue-mdi"
import Layout from "./Layout.vue"

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.use(VueQueryPlugin)
		enhanceAppWithTabs(app)
		app.component("IconDownload", IconDownload)
		app.component("IconNewspaperVariant", IconNewspaperVariant)
		app.component("IconBugReport", IconBugReport)
		googleAnalytics({ id: "G-2CBXXM1Y86" })
	},
	Layout,
}
