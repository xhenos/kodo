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

		<download-buttons>
			<template slot="default">
				<download-button title="Stable" v-bind:data="stable" />
				<download-button title="Preview" variant="400" isAlternative v-bind:data="preview" />
			</template>
			<template slot="footer">
				<p>
					Requires
					<b>Android 5.0</b>
					or higher.
				</p>
			</template>
		</download-buttons>

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
import DownloadButtons from "../components/download/DownloadButtons.vue";

export default {
	components: { WhatsNew, DownloadButton, DownloadButtons },
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
				version: "r" + data.version,
			};
		},
	},
};
</script>

<style></style>
