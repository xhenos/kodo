import axios from "axios";
import Tachiyomi from "~/scripts/data-tachiyomi";
import { TACHIYOMI_AZ_STABLE_API_URL, TACHIYOMI_AZ_PREVIEW_API_URL } from "~/constants";

export default class TachiyomiAZ extends Tachiyomi {
	constructor() {
		super();
		this.stableUrl = TACHIYOMI_AZ_STABLE_API_URL;
		this.previewUrl = TACHIYOMI_AZ_PREVIEW_API_URL;
		this.githubUrl = "https://github.com/az4521/TachiyomiAZ";
		this.REPO = "tachiyomiaz";
	}

	async preview(store) {
		const REPO = this.REPO;
		const FLAVOUR = "preview";
		if (this.JOB.hasOwnProperty(FLAVOUR)) {
			try {
				await this.JOB;
			} catch (e) {
				throw new Error(e);
			}
		}
		if (store.getters.isFlavourUpdated({ _repo: REPO, _flavour: FLAVOUR })) {
			return store.getters.getRelease({ _repo: REPO, _flavour: FLAVOUR });
		}
		this.JOB[FLAVOUR] = new Promise((resolve, reject) => {
			axios
				.get("https://crafty.moe/cors/buildtime.htm")
				.then(res => {
					let data = {
						body: "We have no idea!",
						version: "Version Noice",
						downloadUrl: TACHIYOMI_AZ_PREVIEW_API_URL,
						releaseDate: new Date(res.data * 1000).toJSON(),
					};
					store.commit({
						type: "setRelease",
						_repo: REPO,
						_flavour: FLAVOUR,
						_data: data,
					});
					resolve(store.getters.getRelease({ _repo: REPO, _flavour: FLAVOUR }));
				})
				.catch(e => {
					reject(e);
				});
		});
		let response = await this.JOB[FLAVOUR];
		delete this.JOB[FLAVOUR];
		return response;
	}
}
