import axios from "axios";
import { EMPTY_URL } from "~/constants";

export default class Default {
	constructor() {
		this.stableUrl = EMPTY_URL;
		this.previewUrl = EMPTY_URL;
	}

	async stable() {
		const { data } = await axios.get(this.stableUrl);

		const apkAsset = data.assets.find(a => a.name.includes(".apk"));

		return {
			body: data.body,
			version: data.tag_name.slice(1),
			downloadUrl: apkAsset.browser_download_url,
			releaseDate: data.published_at,
		};
	}

	async preview() {
		const { data } = await axios.get(this.previewUrl);

		const apkAsset = data.assets.find(a => a.name.includes(".apk"));

		return Promise.resolve({
			body: data.body,
			version: data.tag_name.slice(1),
			downloadUrl: apkAsset.browser_download_url,
			releaseDate: data.published_at,
		});
	}
}
