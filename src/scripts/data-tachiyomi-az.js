import Tachiyomi from "~/scripts/data-tachiyomi";
import { TACHIYOMI_AZ_STABLE_API_URL, TACHIYOMI_AZ_PREVIEW_API_URL } from "~/constants";

export default class TachiyomiAZ extends Tachiyomi {
	constructor() {
		super();
		this.stableUrl = TACHIYOMI_AZ_STABLE_API_URL;
		this.previewUrl = TACHIYOMI_AZ_PREVIEW_API_URL;
		this.REPO = "tachiyomiaz";
	}

	async preview(store) {
		const REPO = this.REPO;
		const FLAVOUR = "preview";
		if (store.getters.isFlavourUpdated({ _repo: REPO, _flavour: FLAVOUR })) {
			return store.getters.getRelease({ _repo: REPO, _flavour: FLAVOUR });
		}
		let data = {
			body: "We have no idea!",
			version: "Ask AZ",
			downloadUrl: TACHIYOMI_AZ_PREVIEW_API_URL,
			releaseDate: Date.now(),
		};
		store.commit({
			type: "setRelease",
			_repo: REPO,
			_flavour: FLAVOUR,
			_data: data,
		});
		return Promise.resolve(store.getters.getRelease({ _repo: REPO, _flavour: FLAVOUR }));
	}
}
