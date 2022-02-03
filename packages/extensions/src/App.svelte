<script>
	import Layout from "tachiyomi-common/src/components/Layout.svelte";
	import Extension from "./components/Extension.svelte";
	import API from "./scripts/api"

	const api = new API()

	let languages = []

	let query = ''
	let selectedLanguages = []
	let sortDirection = "asc"
	let nsfwPreference = "meh"


	api.getLanguages().then((value) => {
		languages = value
	})

	let extensions = {}

	$: currentLanguages = selectedLanguages.length !== 0 ? selectedLanguages : languages
	$: (async function() {
		extensions = await api.getExtensions(query, selectedLanguages, nsfwPreference, sortDirection)
	})()

	$: console.log(extensions)


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
	<div>
		<input type="text" bind:value={query} />
		<p>{query}</p>
	</div>
	<div>
		<select bind:value={selectedLanguages} multiple>
			{#each (languages || []) as language }
			<option value={language}>{langName(language)}</option>
			{/each}
		</select>
		<p>{selectedLanguages}</p>
	</div>
	<div>
		<input type="radio" id="desc" name="sort" value="desc" bind:group={sortDirection}>
		<label for="desc">Descending</label>
		<input type="radio" id="asc" name="sort" value="asc" bind:group={sortDirection}>
		<label for="asc">Ascending</label>
		<p>{sortDirection}</p>
	</div>

	<div>
		<input type="radio" id="yes" name="nsfw" value="yes" bind:group={nsfwPreference}>
		<label for="yes">Yes</label>
		<input type="radio" id="no" name="nsfw" value="no" bind:group={nsfwPreference}>
		<label for="no">No</label>
		<input type="radio" id="meh" name="nsfw" value="meh" bind:group={nsfwPreference}>
		<label for="meh">Don't care</label>
		<p>{nsfwPreference}</p>
	</div>
	{#each currentLanguages as language }
		<h1>{langName(language)}</h1>
		{#each extensions[language] || [] as extension (extension.id) }
			<Extension extension={extension} on:readme={openReadme(extension)} on:changelog={openChangelog(extension)} />
		{/each}
	{/each}
</Layout>
