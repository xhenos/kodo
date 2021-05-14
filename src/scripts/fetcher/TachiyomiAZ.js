import axios from "axios";

import { TACHIYOMI_AZ_STABLE_API_URL, TACHIYOMI_AZ_PREVIEW_API_URL } from "~/constants";
import { VariantEnum } from "./VariantEnum";
import { TypeEnum } from "./TypeEnum";
import { BaseVariant } from "./BaseVariant";

export class TachiyomiAZ extends BaseVariant {
	constructor(store) {
		super(store, VariantEnum.TACHIYOMI_AZ);
		this.githubUrl = "https://github.com/az4521/tachiyomiAZ";
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
			this.fetchRemote(TACHIYOMI_AZ_STABLE_API_URL).then(({ data }) => {
				this.store.commit("setRelease", {
					variant: this.variant,
					type: type,
					newData: this.stripStableData(data),
				});
				resolve(this.fetchLocal(type));
			});
		});
	};

	stripStableData = data => {
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

			this.fetchRemote("https://crafty.moe/cors/buildtime.htm").then(({ data }) => {
				this.store.commit("setRelease", {
					variant: this.variant,
					type: type,
					newData: stripPreviewData(data),
				});
				resolve(this.fetchLocal(type));
			});
			resolve(this.fetchLocal(type));
		});
	};

	stripPreviewData = data => {
		return {
			body: "",
			version: "Preview",
			downloadUrl: TACHIYOMI_AZ_PREVIEW_API_URL,
			releaseDate: new Date(data * 1000).toJSON(),
		};
	};
}
