import axios from "axios";

export class BaseVariant {
	constructor(store, variant) {
		this.store = store;
		this.variant = variant;
	}

	isUpdated = type => {
		return this.store.getters.isUpdated({ variant: this.variant, type: type });
	};

	fetchRemote = url => {
		return axios.get(url);
	};

	fetchLocal = type => {
		return this.store.getters.getRelease({ variant: this.variant, type: type });
	};
}
