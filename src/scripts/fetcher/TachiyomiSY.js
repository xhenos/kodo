import { TACHIYOMI_SY_STABLE_API_URL, TACHIYOMI_SY_PREVIEW_API_URL } from "~/constants";
import { VariantEnum } from "./VariantEnum";
import { TypeEnum } from "./TypeEnum";
import { BaseVariant } from "./BaseVariant";

export class TachiyomiSY extends BaseVariant {
	constructor(store) {
		super(store, VariantEnum.TACHIYOMI_SY);
	}

	fetch = type => {
		switch (type) {
			case TypeEnum.STABLE:
				return this.fetchStable(type);
			case TypeEnum.PREVIEW:
				return this.fetchPreview(type);
			default:
				Promise.reject("Unknown type!");
		}
	};

	fetchStable = type => {
		return new Promise((resolve, reject) => {
			if (this.isUpdated(type)) {
				resolve(this.fetchLocal(type));
				return;
			}
			this.fetchRemote(TACHIYOMI_SY_STABLE_API_URL).then(({ data }) => {
				this.store.commit("setRelease", {
					variant: this.variant,
					type: type,
					newData: this.stripData(data),
				});
				resolve(this.fetchLocal(type));
			});
		});
	};

	stripData = data => {
		return {
			body: data.body,
			version: data.tag_name,
			downloadUrl: data.assets.find(a => a.name.includes(".apk")),
			releaseDate: data.published_at,
		};
	};

	fetchPreview = type => {
		return new Promise((resolve, reject) => {
			if (this.isUpdated(type)) {
				resolve(this.fetchLocal(type));
				return;
			}
			this.fetchRemote(TACHIYOMI_SY_PREVIEW_API_URL).then(({ data }) => {
				this.store.commit("setRelease", {
					variant: this.variant,
					type: type,
					newData: this.stripData(data),
				});
				resolve(this.fetchLocal(type));
			});
		});
	};
}
