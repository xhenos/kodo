// Import global styles
import "~/assets/style/index.scss";
import "gridsome-plugin-remark-container/themes/classic.css";

// Import global components
import DefaultLayout from "~/layouts/Default.vue";
import MaterialIcon from "~/components/MaterialIcon.vue";
import Navigation from "~/components/Navigation.vue";
import Badge from "~/components/Badge.vue";

import Vuex from "vuex";
import { Fetchers } from "./scripts/release.data";

const KEY = "releases";
export default function(Vue, { router, head, isClient, appOptions }) {
	// Set default layout as a global component
	Vue.component("Layout", DefaultLayout);
	Vue.component("MaterialIcon", MaterialIcon);
	Vue.component("Navigation", Navigation);
	Vue.component("Badge", Badge);

	router.beforeEach((to, _from, next) => {
		head.meta.push({
			key: "og:url",
			name: "og:url",
			content: process.env.GRIDSOME_BASE_PATH + to.path,
		});
		next();
	});

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
							repo.lastUpdated - Date.now() < 1000 * 60 * 60 * 3 &&
							repo.stable &&
							repo.preview
					: false;
			},
			isFlavourUpdated: state => ({ _repo, _flavour }) => {
				if (!state.releases.hasOwnProperty(_repo)) return false;
				let repo = state.releases[_repo];
				if (repo && !repo.hasOwnProperty(_flavour)) return false;
				return repo ? repo.lastUpdated && repo.lastUpdated - Date.now() < 1000 * 60 * 60 * 3 : false;
			},
		},
		mutations: {
			setRelease(state, { _repo, _flavour, _data }) {
				if (!state.releases.hasOwnProperty(_repo)) {
					state.releases[_repo] = { lastUpdated: Date.now() };
				}
				state.releases[_repo][_flavour] = _data;
				localStorage.setItem(KEY, JSON.stringify(state.releases));
			},
		},
		actions: {
			init({ state }) {
				if (localStorage.getItem(KEY) == null) {
					localStorage.setItem(KEY, JSON.stringify({}));
				}
				state.releases = JSON.parse(localStorage.getItem("releases"));
			},
		},
	});

	Vue.use(new Fetchers());
}
