<script setup lang="ts">
import MarkdownIt from "markdown-it";
import { data as changelogs } from "../data/changelogs.data";

const md = new MarkdownIt();

function renderMarkdown(string: string | null | undefined) {
	const body = string ?? "No changelog provided.";
	const flavoredString = body
		.split(/---\r\n\r\n### Checksums|---\r\n\r\nMD5/)[0]
		.replace(/(?<=\(|(, ))@(.*?)(?=\)|(, ))/g, "[@$2](https://github.com/$2)")
		.replace(/^Check out the .*past release notes.* if you're.*$/m, "")
		.replace(/https\:\/\/github.com\/tachiyomiorg\/tachiyomi\/releases\/tag\/(.*)/, "#$1")
		.trim();

	return md.render(flavoredString);
}

const dateFormatter = new Intl.DateTimeFormat("en", {
	dateStyle: "medium",
});

function contributors(body: string) {
	const list = [...body.matchAll(/(?<=\(|(, ))@(.*?)(?=\)|(, ))/g)]
		.map((match) => match[2]);

	return [...new Set(list)];
}

// @ts-expect-error
const listFormatter = new Intl.ListFormat("en", {
	style: "long",
	type: "conjunction",
});

function contributorsText(body: string) {
	const list = contributors(body);

	if (list.length <= 3) {
		return listFormatter.format(list);
	}

	return listFormatter.format([...list.slice(0, 2), `${list.length - 2} other contributors`]);
}
</script>

<template>
	<div
		v-for="(release, index) of changelogs"
		:key="release.tag_name"
	>
		<h2 :id="release.tag_name">
			<a
				:href="release.html_url"
				target="_blank"
			>
				{{ release.tag_name.substring(1) }}
			</a>
			<Badge v-if="index === 0" type="tip" text="Latest" />
			<a
				class="header-anchor"
				:href="`#${release.tag_name}`"
				:aria-label="`Permalink to &quot;${release.tag_name}&quot;`"
			/>
		</h2>
		<time :datetime="release.published_at!">
			{{ dateFormatter.format(new Date(release.published_at!)) }}
		</time>
		<div v-html="renderMarkdown(release.body)"></div>
		<div v-if="contributors(release.body!).length > 0" class="contributors">
			<h3>Contributors</h3>
			<ul>
				<li
					v-for="contributor of contributors(release.body!)"
					:key="contributor"
				>
					<a
						:href="`https://github.com/${contributor}`"
						target="_blank"
						:title="`${contributor} profile on GitHub`"
						:aria-label="`${contributor} profile on GitHub`"
					>
						<img
							:src="`https://github.com/${contributor}.png?size=32`"
							loading="lazy"
							class="avatar"
						>
					</a>
				</li>
			</ul>
			<div class="names">
				{{ contributorsText(release.body!) }}
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
h2 {
	margin-bottom: 0;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

time {
	font-size: 0.875rem;
	color: var(--vp-c-text-2);
}

.contributors {
	ul {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style-type: none;
		padding-left: 0;

		li + li {
			margin-top: 0;
		}
	}

	.avatar {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		box-shadow: var(--vp-shadow-1);
		border: 1px solid var(--vp-c-divider);
	}

	.names {
		font-size: 0.875rem;
		color: var(--vp-c-text-2);
	}
}
</style>
