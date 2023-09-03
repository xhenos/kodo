<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { data as changelogs } from "../data/changelogs.data";
import { onMounted } from "vue";

const md = new MarkdownIt();

function renderMarkdown(string: string | null | undefined) {
	const body = string ?? "No changelog provided.";
	const flavoredString = body
		.split(/---\r\n\r\n### Checksums|---\r\n\r\nMD5/)[0]
		.replace(/(?<=\(|(, ))@(.*?)(?=\)|(, ))/g, "[@$2](https://github.com/$2)")
		.trim();

	return md.render(flavoredString);
}

const dateFormatter = new Intl.DateTimeFormat("en", {
	dateStyle: "medium",
});

onMounted(() => {
	if (window.location.hash) {
		document.getElementById(window.location.hash)
			?.scrollIntoView({ behavior: "smooth" });
	}
})
</script>

<template>
	<div
		v-for="release of changelogs"
		:key="release.tag_name"
	>
		<h2 :id="release.tag_name">
			{{ release.tag_name.substring(1) }}
		</h2>
		<time :datetime="release.published_at!">
			{{ dateFormatter.format(new Date(release.published_at!)) }}
		</time>
		<div v-html="renderMarkdown(release.body)"></div>
	</div>
</template>

<style lang="stylus" scoped>
h2 {
	margin-bottom: 0;
}

time {
	font-size: 0.875rem;
	color: var(--vp-c-text-2);
}
</style>
