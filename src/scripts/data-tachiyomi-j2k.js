import Tachiyomi from "~/scripts/data-tachiyomi";
import { EMPTY_URL, TACHIYOMI_J2K_STABLE_API_URL } from "~/constants";

export default class TachiyomiJ2K extends Tachiyomi {
	constructor() {
		super();
		this.stableUrl = TACHIYOMI_J2K_STABLE_API_URL;
		this.previewUrl = EMPTY_URL;
		this.REPO = "tachiyomij2k";
	}

	async preview(store) {
		return Promise.resolve({});
	}
}
