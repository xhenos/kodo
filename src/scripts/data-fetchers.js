import Tachiyomi from "./data-tachiyomi";
import TachiyomiAZ from "./data-tachiyomi-az";
import TachiyomiJ2K from "./data-tachiyomi-j2k";
import TachiyomiSY from "./data-tachiyomi-sy";
import Neko from "./data-neko";

export default class Fetchers {
	constructor() {
		this.fetchers = {
			tachiyomi: new Tachiyomi(),
			tachiyomiaz: new TachiyomiAZ(),
			tachiyomij2k: new TachiyomiJ2K(),
			tachiyomisy: new TachiyomiSY(),
			neko: new Neko(),
		};
		this.install = function(Vue) {
			Vue.prototype.$fetchers = this.fetchers;
		};
	}
}
