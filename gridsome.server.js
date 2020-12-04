// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require("axios");

module.exports = function(api) {
	api.loadSource(async ({ addMetadata, addCollection }) => {
		let appVerStable = "v0.00.0";
		let appVerPreview = "v0.00.0";

		let dataStable = {};
		let dataPreview = {};

		try {
			const { data } = await axios.get("https://api.github.com/repos/inorichi/tachiyomi/releases/latest");

			const apkAsset = data.assets.find(a => a.name.includes(".apk"));

			dataStable = {
				body: data.body,
				version: data.tag_name.slice(1),
				downloadUrl: apkAsset.browser_download_url,
				releaseDate: data.published_at,
			};

			appVerStable = data.tag_name.slice(1);
		} catch (err) {
			console.warn("Failed to get Tachiyomi version from GitHub.");
		}

		try {
			const { data } = await axios.get(
				"https://api.github.com/repos/tachiyomiorg/android-app-preview/releases/latest"
			);

			const apkAsset = data.assets.find(a => a.name.includes(".apk"));

			dataPreview = {
				body: data.body,
				version: data.tag_name.slice(1),
				downloadUrl: apkAsset.browser_download_url,
				releaseDate: data.published_at,
			};

			appVerPreview = data.tag_name;
		} catch (err) {
			console.warn("Failed to get Tachiyomi Preview version from GitHub.");
		}

		addMetadata("appStable", dataStable);
		addMetadata("appPreview", dataPreview);
		addMetadata("appVerStable", appVerStable);
		addMetadata("appVerPreview", appVerPreview);

		// Use the Data Store API here: https://gridsome.org/docs/data-store-api/
		addMetadata("settings", require("./gridsome.config").settings);
	});

	api.createPages(({ createPage }) => {
		// Use the Pages API here: https://gridsome.org/docs/pages-api/
	});
};
