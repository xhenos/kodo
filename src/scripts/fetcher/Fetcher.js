import { Tachiyomi } from "./Tachiyomi";
import { TachiyomiAZ } from "./TachiyomiAZ";
import { TachiyomiJ2K } from "./TachyomiJ2K";
import { TachiyomiSY } from "./TachiyomiSY";
import { Neko } from "./Neko";
import { TypeEnum } from "./TypeEnum";
import { VariantEnum } from "./VariantEnum";

let fetch = {};

export class Fetch {
	constructor(store) {
		this.store = store;
		this.fetcher = {};
		this.fetcher[VariantEnum.TACHIYOMI] = () => new Tachiyomi(this.store);
		this.fetcher[VariantEnum.TACHIYOMI_AZ] = () => new TachiyomiAZ(this.store);
		this.fetcher[VariantEnum.TACHIYOMI_J2K] = () => new TachiyomiJ2K(this.store);
		this.fetcher[VariantEnum.TACHIYOMI_SY] = () => new TachiyomiSY(this.store);
		this.fetcher[VariantEnum.NEKO] = () => new Neko(this.store);
		this.install = function(Vue, { appOptions }) {
			this.store = appOptions.store;
			Vue.prototype.fetcher = () => this;
		};
	}

	fetch(variant, type) {
		let bit = variant << type;
		switch (bit) {
			case VariantEnum.NEKO << TypeEnum.PREVIEW:
			case VariantEnum.TACHIYOMI_J2K << TypeEnum.PREVIEW:
				return Promise.reject("Type is not allowed with variant");
		}
		return (fetch[bit] = fetch[bit] || this.fetcher[variant]().fetch(type));
	}

	githubUrl(variant) {
		return this.fetcher[variant]().githubUrl
	}

	destory() {
		fetch = {};
	}
}
