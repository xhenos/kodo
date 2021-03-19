import axios from "axios";

import { EXTENSION_JSON } from "~/constants";

const RELEASE_KEY = "releases";
const EXTENSION_KEY = "extensions";

export const ReleaseStore = {
	state: {
		releases: {},
	},
	getters: {
		getRelease: state => ({ variant, type }) => {
			const bit = variant << type;
			return state.releases[bit];
		},
		isUpdated: state => ({ variant, type }) => {
			const bit = variant << type;
			const release = state.releases[bit];

			if (release != undefined) {
				const now = Date.now();
				const threeHours = 1000 * 60 * 60 * 3;
				return release.lastUpdated && now - release.lastUpdated < threeHours;
			}

			return false;
		},
	},
	mutations: {
		setRelease(state, { variant, type, newData }) {
			const bit = variant << type;
			state.releases[bit] = state.releases[bit] || {};
			state.releases[bit] = {
				lastUpdated: Date.now(),
				data: newData,
			};
			if (process.isClient) {
				localStorage.setItem(RELEASE_KEY, JSON.stringify(state.releases));
			}
		},
	},
	actions: {
		init({ state }) {
			if (process.isClient) {
				if (localStorage.getItem(RELEASE_KEY) == null) {
					localStorage.setItem(RELEASE_KEY, JSON.stringify({}));
				}
				state.releases = JSON.parse(localStorage.getItem(RELEASE_KEY));
			}
		},
	},
};

export const ExtensionStore = {
	state: {
		lastUpdated: 0,
		extensionGroups: {},
	},
	mutations: {
		setExtensions(state, { data }) {
			state.extensionGroups = data.reduce((object, value) => {
				(object[value["lang"]] = object[value["lang"]] || []).push(value);
				return object;
			}, {});
			state.lastUpdated = Date.now();
			if (process.isClient) {
				localStorage.setItem(EXTENSION_KEY, JSON.stringify(state));
			}
		},
	},
	actions: {
		fetchExtensions({ state, commit }) {
			return new Promise((resolve, reject) => {
				if (state.lastUpdated == 0 || state.lastUpdated >= Date.now() + 1000 * 60 * 15) {
					console.log("Updating store");
					axios.get(EXTENSION_JSON).then(({ data }) => {
						commit("setExtensions", { data });
						resolve(state.extensionGroups);
					});
					return;
				}

				resolve(state.extensionGroups);
			});
		},
		init({ state }) {
			if (process.isClient) {
				if (localStorage.getItem(RELEASE_KEY) == null) {
					localStorage.setItem(RELEASE_KEY, JSON.stringify({}));
				}
				state = JSON.parse(localStorage.getItem(EXTENSION_KEY));
			}
		},
	},
};
