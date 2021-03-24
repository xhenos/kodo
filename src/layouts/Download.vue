<template>
	<div>
		<p>
			Download the latest stable version of
			<b>Tachiyomi</b>
			that released
			<b :title="stable.releaseDate">{{ date(stable.releaseDate) }}</b>
			or the preview version that released
			<b :title="preview.releaseDate">{{ date(preview.releaseDate) }}</b>
			.
		</p>

		<download-buttons>
			<template slot="default">
				<download-button title="Stable" />
				<download-button title="Preview" isPreview />
			</template>
			<template slot="footer">
				<p>* Requires Android 5.0 or higher.</p>
			</template>
		</download-buttons>

		<whats-new v-bind:body="stable.body" />
	</div>
</template>

<script>
import moment from "moment";
import WhatsNew from "../components/WhatsNew.vue";
import DownloadButton from "../components/DownloadButton.vue";
import DownloadButtons from "../components/DownloadButtons.vue";
import { VariantEnum } from "../scripts/fetcher/VariantEnum";
import { TypeEnum } from "../scripts/fetcher/TypeEnum";

export default {
	components: { WhatsNew, DownloadButton, DownloadButtons },
	data: function() {
		return {
			stable: {
				body: "",
				releaseDate: "",
				downloadUrl: "",
				version: "v0.00.0",
			},
			preview: {
				body: "",
				releaseDate: "",
				downloadUrl: "",
				version: "r0000",
			},
		};
	},
	created: async function() {
		let all = await Promise.all([
			this.fetcher().fetch(VariantEnum.TACHIYOMI, TypeEnum.STABLE),
			this.fetcher().fetch(VariantEnum.TACHIYOMI, TypeEnum.PREVIEW),
		]);

		this.stable = all[0].data;
		this.preview = all[1].data;
	},
	methods: {
		moment: function(date) {
			return moment(date);
		},
		date: function(date) {
			return moment(date).fromNow();
		},
	},
	computed: {},
};
</script>

<style></style>
