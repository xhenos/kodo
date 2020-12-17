// Import global styles
import "~/assets/style/index.styl";

// Import global components
import DefaultLayout from "~/layouts/Default.vue";
import MaterialIcon from "~/components/MaterialIcon.vue";
import Navigation from "~/components/Navigation.vue";
import Badge from "~/components/Badge.vue";

import Fetchers from "./scripts/data-fetchers";
import PersistStore from "./scripts/store";

import "./scripts/prototypes";

export default function(Vue, { router, head, isClient, appOptions }) {
	// Set default layout as a global component
	Vue.component("Layout", DefaultLayout);
	Vue.component("MaterialIcon", MaterialIcon);
	Vue.component("Navigation", Navigation);
	Vue.component("Badge", Badge);

	router.beforeEach((to, _from, next) => {
		head.meta.popAndPushContent(
			process.env.SITE_URL + process.env.SITE_URL_PREFIX + _from.path,
			process.env.SITE_URL + process.env.SITE_URL_PREFIX + to.path,
			{
				key: "og:url",
				name: "og:url",
			}
		);
		next();
	});

	PersistStore(Vue, appOptions);

	Vue.use(new Fetchers());
}
