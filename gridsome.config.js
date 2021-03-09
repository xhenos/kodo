// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
	siteName: "Tachiyomi",
	siteDescription: "Free and open source manga reader for Android",
	siteUrl: process.env.SITE_URL ? process.env.SITE_URL : "https://tachiyomi.org",
	pathPrefix: process.env.SITE_URL_PREFIX ? process.env.SITE_URL_PREFIX : "",
	icon: {
		favicon: "./src/assets/favicon.png",
		touchicon: "./src/assets/favicon.png",
	},
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
						index: "/help/",
						items: [
							"/help/faq/application/",
							"/help/faq/settings/",
							"/help/faq/extensions/",
							"/help/faq/sources/",
						],
					},
					{
						title: "Guides",
						index: "/help/",
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
						items: ["/help/contribution/", "/download/", "/extensions/", "/forks/"],
					},
				],
			},
		],
	},
	images: {
		defaultBlur: 20,
		defaultQuality: 90,
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: [require("tailwindcss")],
			},
		},
	},
	plugins: [
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
						"remark-containers",
						{
							default: false,
							custom: [
								{
									type: "videolink",
									element: "div",
									transform: function(node, config, tokenize) {
										node.data.hProperties = {
											className: "videolink",
										};
									},
								},
								{
									type: "note",
									element: "div",
									transform: function(node, config, tokenize) {
										node.data.hProperties = {
											className: "note",
										};
									},
								},
								{
									type: "guide",
									element: "div",
									transform: function(node, config, tokenize) {
										return transformContainer(node, config, "guide", "p");
									},
								},
								{
									type: "alert",
									element: "div",
									transform: function(node, config, tokenize) {
										return transformContainer(node, config, "alert", "p");
									},
								},
								{
									type: "c-tip",
									element: "div",
									transform: function(node, config, tokenize) {
										return transformContainer(node, config, "tip", "p");
									},
								},
								{
									type: "c-warning",
									element: "div",
									transform: function(node, config, tokenize) {
										return transformContainer(node, config, "warning", "p");
									},
								},
								{
									type: "c-danger",
									element: "div",
									transform: function(node, config, tokenize) {
										return transformContainer(node, config, "danger", "p");
									},
								},
								{
									type: "collapse",
									element: "details",
									transform: function(node, config, tokenize) {
										return transformContainer(node, config, "details", "summary");
									},
								},
							],
						},
					],
				],
			},
		},
		{
			use: "gridsome-plugin-netlify-cms",
			options: {
				modulePath: "src/cms/index.js",
				configPath: "src/cms/config.yml",
				htmlPath: "src/cms/index.html",
				publicPath: "/cms",
				htmlTitle: "Tachiyomi CMS",
				enableIdentityWidget: true,
			},
		},
	],
	chainWebpack: config => {
		const svgRule = config.module.rule("svg");
		svgRule.uses.clear();
		svgRule.use("vue-svg-loader").loader("vue-svg-loader");
	},
};

function transformContainer(node, config, type, element) {
	node.data.hProperties = {
		className: `custom-block c-${type} ${config ? "" : "c-empty"}`,
	};
	node.children.splice(0, 0, {
		type: "paragraph",
		data: {
			hName: element,
			hProperties: {
				className: "c-title",
			},
		},
		children: [{ type: "text", value: config || "" }],
	});
}
