import Vuex from "vuex";

const KEY = "releases";
export default function PersistStore(Vue, appOptions) {
	Vue.use(Vuex);
	appOptions.store = new Vuex.Store({
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
					localStorage.setItem(KEY, JSON.stringify(state.releases));
				}
			},
		},
		actions: {
			init({ state }) {
				if (process.isClient) {
					if (localStorage.getItem(KEY) == null) {
						localStorage.setItem(KEY, JSON.stringify({}));
					}
					state.releases = JSON.parse(localStorage.getItem("releases"));
				}
			},
		},
	});
}
