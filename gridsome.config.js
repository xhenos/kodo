// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: "Tachiyomi",
	siteDescription: "Free and open source manga reader for Android",
	icon: {
		favicon: "./src/assets/favicon.png",
		touchicon: "./src/assets/favicon.png"
	},
	siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : "https://tachiyomi.org"),
	settings: {
		web: process.env.URL_WEB || false,
		twitter: process.env.URL_TWITTER || false,
		discord: process.env.URL_DISCORD || false,
		github: process.env.URL_GITHUB || false,
		nav: {
			links: [
				{ path: "/help/", title: "Help" }
			],
		},
		sidebar: [
			{
				name: "guides",
				sections: [
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
						]
					},
				]
			}
		]
	},
	plugins: [
		{
			use: "gridsome-plugin-tailwindcss",
			options: {
				tailwindConfig: "./tailwind.config.js",
				purgeConfig: {
					// Prevent purging of prism classes.
					whitelistPatternsChildren: [
						/token$/
					]
				}
			}
		},

		{
			use: "@gridsome/plugin-google-analytics",
			options: {
				id: (process.env.GA_ID ? process.env.GA_ID : "XX-999999999-9")
			}
		},

		{
			use: "@gridsome/plugin-sitemap",
			options: {
			}
		},
		{
			use: "@gridsome/vue-remark",
			options: {
				typeName: "MarkdownPage",
				baseDir: "./content",
				template: "./src/templates/MarkdownPage.vue",
				plugins: [
					'@gridsome/remark-prismjs',
					[
						"gridsome-plugin-remark-container",
						{
							customTypes: {
								// This is an example how one can define custom types
								videolink : {
									keyword: 'videolink',
									customBlock: true,
									tagName: 'div',
									properties: {
										class: ['videolink']
									}
								},
							},
						}
					]
				]
			}
		}

	]
}
