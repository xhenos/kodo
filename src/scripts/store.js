import Vuex from "vuex";

const KEY = "releases";
export default function PersistStore(Vue, appOptions) {
	Vue.use(Vuex);
	appOptions.store = new Vuex.Store({
		state: {
			releases: {},
		},
		getters: {
			getRelease: state => ({ _repo, _flavour }) => {
				let repo = state.releases[_repo];
				return repo
					? {
							lastUpdated: repo.lastUpdated,
							data: repo[_flavour],
					  }
					: undefined;
			},
			getReleaseWithFlavours: state => _repo => {
				let repo = state.releases[_repo];
				return repo;
			},
			isReleaseUpdated: state => _repo => {
				let repo = state.releases[_repo];
				return repo
					? repo.lastUpdated &&
							Date.now() - repo.lastUpdated < 1000 * 60 * 60 * 3 &&
							repo.stable &&
							repo.preview
					: false;
			},
			isFlavourUpdated: state => ({ _repo, _flavour }) => {
				if (!state.releases.hasOwnProperty(_repo)) return false;
				let repo = state.releases[_repo];
				if (repo && !repo.hasOwnProperty(_flavour)) return false;
				return repo ? repo.lastUpdated && Date.now() - repo.lastUpdated < 1000 * 60 * 60 * 3 : false;
			},
		},
		mutations: {
			setRelease(state, { _repo, _flavour, _data }) {
				if (!state.releases.hasOwnProperty(_repo)) {
					state.releases[_repo] = {};
				}
				state.releases[_repo].lastUpdated = Date.now();
				state.releases[_repo][_flavour] = _data;
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
