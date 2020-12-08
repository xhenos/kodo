import Default from "~/scripts/data";
import { TACHIYOMI_STABLE_API_URL, TACHIYOMI_PREVIEW_API_URL } from "~/constants";

export default class Tachiyomi extends Default {
	constructor() {
		super();
		this.stableUrl = TACHIYOMI_STABLE_API_URL;
		this.previewUrl = TACHIYOMI_PREVIEW_API_URL;
		this.githubUrl = "https://github.com/inorichi/tachiyomi";
		this.JOB = {};
		this.REPO = "tachiyomi";
	}

	async stable(store) {
		const REPO = this.REPO;
		const FLAVOUR = "stable";
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
		try {
			this.JOB[FLAVOUR] = new Promise((resolve, reject) => {
				super
					.stable()
					.then(stable => {
						let data = {
							body: stable.body,
							version: "v" + stable.version,
							downloadUrl: stable.downloadUrl,
							releaseDate: stable.releaseDate,
						};
						store.commit({
							type: "setRelease",
							_repo: REPO,
							_flavour: FLAVOUR,
							_data: data,
						});
						resolve(store.getters.getRelease({ _repo: REPO, _flavour: FLAVOUR }));
					})
					.catch(err => {
						reject(e);
						throw new Error(err);
					});
			});
			let response = await this.JOB[FLAVOUR];
			delete this.JOB[FLAVOUR];
			return response;
		} catch (e) {
			console.error(e);
			throw new Error(e);
		}
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
		try {
			this.JOB[FLAVOUR] = new Promise((resolve, reject) => {
				super
					.preview()
					.then(preview => {
						let data = {
							body: preview.body,
							version: "v" + preview.version,
							downloadUrl: preview.downloadUrl,
							releaseDate: preview.releaseDate,
						};
						store.commit({
							type: "setRelease",
							_repo: REPO,
							_flavour: FLAVOUR,
							_data: data,
						});
						resolve(store.getters.getRelease({ _repo: REPO, _flavour: FLAVOUR }));
					})
					.catch(err => {
						throw new Error(err);
					});
			});
			let response = await this.JOB[FLAVOUR];
			delete this.JOB[FLAVOUR];
			return response;
		} catch (e) {
			console.error(e);
			throw new Error(e);
		}
	}
}
