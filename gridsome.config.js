// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: "Tachiyomi",
	siteDescription: "Free and open source manga reader for Android",
	icon: {
		favicon: "./src/assets/favicon.png",
		touchicon: "./src/assets/favicon.png",
	},
	siteUrl: process.env.SITE_URL ? process.env.SITE_URL : "https://tachiyomi.org",
	pathPrefix: process.env.SITE_URL_PREFIX ? process.env.SITE_URL_PREFIX : "",
	settings: {
		web: process.env.URL_WEB || false,
		twitter: process.env.URL_TWITTER || false,
		discord: process.env.URL_DISCORD || false,
		github: process.env.URL_GITHUB || false,
		nav: {
			links: [{ path: "/help/", title: "Help" }],
		},
		sidebar: [
			{
				name: "default",
				sections: [
					{
						title: "Frequently Asked Questions",
						items: [
							"/help/faq/application/",
							"/help/faq/settings/",
							"/help/faq/extensions/",
							"/help/faq/sources/",
						],
					},
					{
						title: "Guides",
						items: [
							"/help/guides/getting-started/",
							"/help/guides/troubleshooting-problems/",
							"/help/guides/source-migration/",
							"/help/guides/creating-backups/",
							"/help/guides/reading-local-manga/",
							"/help/guides/reader-settings/",
							"/help/guides/categories/",
						],
					},
					{
						title: "Tachiyomi",
						items: ["/help/contribution/", "/extensions/"],
					},
					{
						title: "Tachiyomi Forks",
						index: "/forks/",
					},
				],
			},
		],
	},
	plugins: [
		{
			use: "gridsome-plugin-tailwindcss",
			options: {
				tailwindConfig: "./tailwind.config.js",
				purgeConfig: {
					// Prevent purging of prism classes.
					whitelistPatternsChildren: [/token$/],
				},
			},
		},

		{
			use: "@gridsome/plugin-google-analytics",
			options: {
				id: process.env.GA_ID ? process.env.GA_ID : "XX-999999999-9",
			},
		},

		{
			use: "@gridsome/plugin-sitemap",
			options: {},
		},
		{
			use: "@gridsome/vue-remark",
			options: {
				typeName: "MarkdownPage",
				baseDir: "./content",
				template: "./src/templates/MarkdownPage.vue",
				plugins: [
					"@gridsome/remark-prismjs",
					[
						"gridsome-plugin-remark-container",
						{
							customTypes: {
								videolink: {
									keyword: "videolink",
									customBlock: true,
									tagName: "div",
									children: `[contentNodes]`,
									properties: {
										class: ["videolink"],
									},
								},
								note: {
									keyword: "note",
									customBlock: true,
									tagName: "div",
									children: `[contentNodes]`,
									properties: {
										class: ["note"],
									},
								},
								"e-guide": {
									keyword: "e-guide",
									customBlock: true,
									children: `[contentNodes]`,
									tagName: "div",
									properties: {
										class: ["guide", "g-empty"],
									},
								},
								guide: {
									keyword: "guide",
									customBlock: true,
									tagName: "div",
									children: `[element('p', 'title', titleNodes), contentNodes]`,
									properties: {
										class: ["guide"],
									},
								},
								"c-tip": {
									keyword: "c-tip",
									defaultTitle: "Tip",
									customBlock: true,
									tagName: "div",
									children: `[element('h4', 'title', titleNodes), contentNodes]`,
									properties: {
										class: ["custom-block", "c-tip"],
									},
								},
								"c-warning": {
									keyword: "c-warning",
									defaultTitle: "Warning",
									customBlock: true,
									tagName: "div",
									children: `[element('h4', 'title', titleNodes), contentNodes]`,
									properties: {
										class: ["custom-block", "c-warning"],
									},
								},
								"c-danger": {
									keyword: "c-danger",
									defaultTitle: "Danger",
									customBlock: true,
									tagName: "div",
									children: `[element('h4', 'title', titleNodes), contentNodes]`,
									properties: {
										class: ["custom-block", "c-danger"],
									},
								},
								expander: {
									keyword: "expander",
									customBlock: true,
									tagName: "details",
									children: `[element('summary', 'expansion', titleNodes), contentNodes]`,
									properties: {
										class: ["guide"],
									},
								},
							},
						},
					],
				],
			},
		},
	],
	chainWebpack: config => {
		const svgRule = config.module.rule("svg");
		svgRule.uses.clear();
		svgRule.use("vue-svg-loader").loader("vue-svg-loader");
	},
};
