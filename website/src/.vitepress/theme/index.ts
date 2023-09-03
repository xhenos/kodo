// https://vitepress.dev/guide/custom-theme
import DefaultTheme from "vitepress/theme";

// Import Stylus files
import "./styles/base.styl";

// Import Global plugins
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";

import { VueQueryPlugin } from "@tanstack/vue-query";

import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";

// Import Icon components
import { IconDownload, IconNewReleases, IconBugReport } from "@iconify-prerendered/vue-mdi";

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.use(ElementPlus);
		app.use(VueQueryPlugin);
		enhanceAppWithTabs(app);
		app.component("IconDownload", IconDownload);
		app.component("IconNewReleases", IconNewReleases);
		app.component("IconBugReport", IconBugReport);
	},
};
