<script>
	import Layout from "tachiyomi-common/src/components/Layout.svelte";
	import Extension from "./components/Extension.svelte";
	import { Octokit } from "@octokit/core";

	let languages = []
	let groups = {}

	const octokit = new Octokit()
	octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
		owner: 'tachiyomiorg',
		repo: 'tachiyomi-extensions',
		path: 'index.min.json',
		ref: "repo"
	})
	.then(value => {
		return JSON.parse(atob(value.data.content, 'base64').toString())
	})
	.then(value => {
		return value.reduce((previousValue, currentValue) => {
			(previousValue[currentValue['lang']] = previousValue[currentValue['lang']] || []).push(processEntry(currentValue))
			return previousValue
		}, {})
	})
	.then(value => {
		languages = Object.keys(value),
		groups = value
	})

	function processEntry(value) {
		return {
          id: value.pkg.replace('eu.kanade.tachiyomi.extension.', ''),
          pkg: value.pkg,
          lang: value.lang,
          code: value.code,
          version: `v${value.version}`,
          nsfw: value.nsfw === 1,
          hasReadme: value.hasReadme === 1,
          hasChangelog: value.hasChangelog === 1,
          name: value.name.split(': ')[1],
          iconUrl: `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/icon/${value.apk.substring(0, value.apk.lastIndexOf('.'))}.png`,
          downloadUrl: `https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/apk/${value.apk}`,
          sources: value.sources
        }
	}

	function openReadme(value) {
		console.log("Open readme", value)
	}

	function openChangelog(value) {
		console.log("Open changelog", value)
	}

	function simpleLangName(code) {
		if (code === "all") {
			return "All";
		}
		const namesInEnglish = new Intl.DisplayNames(["en"], { type: "language" });
		return namesInEnglish.of(code);
	}

	function langName(code) {
		if (code === "all") {
			return "All";
		}
		const namesInEnglish = new Intl.DisplayNames(["en"], { type: "language" });
		const namesInNative = new Intl.DisplayNames([code], { type: "language" });
		return `${namesInEnglish.of(code)} - ${namesInNative.of(code)}`;
	}

	
</script>

<Layout>
	<h1>Extensions</h1>
	<div><input type="text" /></div>
	<div>
		<select multiple>
			{#each languages as language }
			<option value={language}>{langName(language)}</option>
			{/each}
		</select>
	</div>
	<div>
		<input type="radio" id="desc" name="sort" value="desc" checked>
		<label for="desc">Descending</label>
		<input type="radio" id="asc" name="sort" value="asc">
		<label for="asc">Ascending</label>
	</div>

	<div>
		<input type="radio" id="yes" name="nsfw" value="yes" checked>
		<label for="yes">Yes</label>
		<input type="radio" id="no" name="nsfw" value="no">
		<label for="no">No</label>
		<input type="radio" id="meh" name="nsfw" value="meh">
		<label for="meh">Don't care</label>
	</div>
	{#each languages as language }
		<h1>{langName(language)}</h1>
		{#each groups[language] as extension }
			<Extension extension={extension} on:readme={openReadme(extension)} on:changelog={openChangelog(extension)} />
		{/each}
	{/each}
</Layout>
