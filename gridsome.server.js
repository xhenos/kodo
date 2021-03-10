// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
	api.onCreateNode(variables => {
		// Use the Server API here: https://gridsome.org/docs/server-api/
		if (variables.internal.typeName === "MarkdownPage") {
			variables.editOnGithub = variables.editOnGithub !== false ? true : false;
			variables.onThisPage = variables.onThisPage !== false ? true : false;
			return { ...variables };
		}
	});

	api.loadSource(async ({ addMetadata }) => {
		// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
		addMetadata("settings", require("./gridsome.config").settings);
	});

	api.createPages(({ createPage }) => {
		// Use the Pages API here: https://gridsome.org/docs/pages-api/
	});

	api.configureWebpack(config => {
		config.mode = "development";
		return config;
	});
};
