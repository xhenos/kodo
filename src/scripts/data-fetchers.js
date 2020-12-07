import Tachiyomi from "./data-tachiyomi";
import TachiyomiAZ from "./data-tachiyomi-az";
import TachiyomiJ2K from "./data-tachiyomi-j2k";
import TachiyomiSY from "./data-tachiyomi-sy";
import Neko from "./data-neko";

const fetchOrCreate = (object, target, clazz) => {
	if (object[target]) {
		return object[target];
	}
	object[target] = new clazz();
	return object[target];
};

export default class Fetchers {
	constructor() {
		this.fetchers = {
			tachiyomi: null,
			tachiyomiaz: null,
			tachiyomij2k: null,
			tachiyomisy: null,
			neko: null,
		};
		this.install = function(Vue) {
			Vue.prototype.$fetchers = {
				tachiyomi: () => fetchOrCreate(this.fetchers, "tachiyomi", Tachiyomi),
				tachiyomiaz: () => fetchOrCreate(this.fetchers, "tachiyomiaz", TachiyomiAZ),
				tachiyomij2k: () => fetchOrCreate(this.fetchers, "tachiyomij2k", TachiyomiJ2K),
				tachiyomisy: () => fetchOrCreate(this.fetchers, "tachiyomisy", TachiyomiSY),
				neko: () => fetchOrCreate(this.fetchers, "neko", Neko),
			};
		};
	}
}
