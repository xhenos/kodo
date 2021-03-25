// Import global styles
import "~/assets/style/index.styl";
import "prism-themes/themes/prism-material-oceanic.css";

// Import global components
import DefaultLayout from "~/layouts/Default.vue";
import MaterialIcon from "~/components/MaterialIcon.vue";
import Navigation from "~/components/Navigation.vue";
import Badge from "~/components/Badge.vue";

import { Fetch } from "./scripts/fetcher/Fetcher.js";
import { ReleaseStore, ExtensionStore } from "./scripts/store";

import "./scripts/prototypes";
import Vuex from "vuex";

export default function(Vue, { router, head, isClient, appOptions }) {
	// Set default layout as a global component
	Vue.component("Layout", DefaultLayout);
	Vue.component("MaterialIcon", MaterialIcon);
	Vue.component("Navigation", Navigation);
	Vue.component("Badge", Badge);

	router.beforeEach((to, _from, next) => {
		head.meta.popAndPushContent(process.env.SITE_URL + _from.path, process.env.SITE_URL + to.path, {
			key: "og:url",
			name: "og:url",
		});
		next();
	});

	Vue.use(Vuex);
	appOptions.store = new Vuex.Store({
		modules: {
			ReleaseStore,
			ExtensionStore,
		},
	});

	Vue.use(new Fetch(), { appOptions });
}
