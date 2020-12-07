import Tachiyomi from "~/scripts/data-tachiyomi";
import { TACHIYOMI_SY_STABLE_API_URL, TACHIYOMI_SY_PREVIEW_API_URL } from "~/constants";

export default class TachiyomiSY extends Tachiyomi {
	constructor() {
		super();
		this.stableUrl = TACHIYOMI_SY_STABLE_API_URL;
		this.previewUrl = TACHIYOMI_SY_PREVIEW_API_URL;
		this.REPO = "tachiyomisy";
	}
}
