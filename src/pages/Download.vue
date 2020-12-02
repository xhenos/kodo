<template>
	<Layout>
		<h1 class="mt-8">Download</h1>

		<p>
			Download the latest stable version of
			<b>Tachiyomi</b>
			that released
			<b>{{ stable.date }}</b>
			or the preview version that released
			<b>{{ preview.date }}</b>
			.
		</p>

		<div class="content-center text-center my-8">
			<div class="flex justify-center flex-col md:flex-row">
				<download-button title="Stable" v-bind:data="stable" />
				<download-button title="Preview" isAlternative v-bind:data="preview" />
			</div>
			<p>
				Requires
				<b>Android 5.0</b>
				or higher.
			</p>
		</div>

		<whats-new v-bind:body="stable.body" />
	</Layout>
</template>

<static-query>
query {
  metadata {
    appStable {
      body
      version
      releaseDate
      downloadUrl
    }
    appPreview {
      body
      version
      releaseDate
      downloadUrl
    }
  }
}
</static-query>

<script>
import moment from "moment";
import WhatsNew from "../components/download/WhatsNew.vue";
import DownloadButton from "../components/download/DownloadButton.vue";

export default {
	components: { WhatsNew, DownloadButton },
	computed: {
		stable() {
			const data = this.$static.metadata.appStable;
			return {
				body: data.body,
				date: moment(data.releaseDate).fromNow(),
				downloadUrl: data.downloadUrl,
				version: data.version,
			};
		},
		preview() {
			const data = this.$static.metadata.appPreview;
			return {
				body: data.body,
				date: moment(data.releaseDate).fromNow(),
				downloadUrl: data.downloadUrl,
				version: 'r' + data.version,
			};
		},
	},
};
</script>

<style>
</style>