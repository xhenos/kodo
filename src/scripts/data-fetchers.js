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
			"tachiyomi": null,
			"tachiyomi-az": null,
			"tachiyomi-j2k": null,
			"tachiyomi-sy": null,
			"neko": null,
		};
		this.install = function(Vue) {
			Vue.prototype.$fetchers = {
				"tachiyomi": () => fetchOrCreate(this.fetchers, "tachiyomi", Tachiyomi),
				"tachiyomi-az": () => fetchOrCreate(this.fetchers, "tachiyomi-az", TachiyomiAZ),
				"tachiyomi-j2k": () => fetchOrCreate(this.fetchers, "tachiyomi-j2k", TachiyomiJ2K),
				"tachiyomi-sy": () => fetchOrCreate(this.fetchers, "tachiyomi-sy", TachiyomiSY),
				"neko": () => fetchOrCreate(this.fetchers, "neko", Neko),
			};
		};
	}
}
