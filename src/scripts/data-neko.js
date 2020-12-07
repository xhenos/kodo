import Tachiyomi from "~/scripts/data-tachiyomi";
import { EMPTY_URL, NEKO_STABLE_API_URL } from "~/constants";

export default class Neko extends Tachiyomi {
	constructor() {
		super();
		this.stableUrl = NEKO_STABLE_API_URL;
		this.previewUrl = EMPTY_URL;
		this.githubUrl = "https://github.com/CarlosEsco/Neko";
		this.REPO = "neko";
	}

	async preview(store) {
		return Promise.resolve({});
	}
}
