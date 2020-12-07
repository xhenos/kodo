<template>
	<button v-if="isGithub" class="rounded-md my-2 md:mx-2 px-20 py-2 bg-indigo-800">
		<a v-bind:href="link">
			<p class="font-bold text-white mb-0">GitHub</p>
		</a>
	</button>
	<download-button
		v-else
		v-bind:title="isPreview ? 'Preview' : 'Stable'"
		v-bind:data="data"
		v-bind:class="`fork-${fork}`"
	/>
</template>

<script>
import moment from "moment";
import DownloadButton from "./DownloadButton.vue";
export default {
	components: { DownloadButton },
	props: {
		fork: {
			type: String,
		},
		isPreview: {
			type: Boolean,
			default: false,
		},
		isGithub: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			data: {
				body: "",
				date: moment(0).fromNow(),
				downloadUrl: "",
				version: "v0.00.0",
			},
			link: "",
		};
	},
	async mounted() {
		var fetcher;
		switch (this.fork) {
			case "az":
				fetcher = this.$fetchers.tachiyomiaz();
				break;
			case "j2k":
				fetcher = this.$fetchers.tachiyomij2k();
				break;
			case "sy":
				fetcher = this.$fetchers.tachiyomisy();
				break;
			case "neko":
				fetcher = this.$fetchers.neko();
				break;
			default:
				throw new Error("Unknown fork");
				break;
		}
		this.link = fetcher.githubUrl;
		const fetch = this.isPreview ? fetcher.preview(this.$store) : fetcher.stable(this.$store);
		this.data = (await fetch).data;
	},
};
</script>

<style></style>
