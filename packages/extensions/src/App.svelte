<script>
  import Layout from "tachiyomi-common/src/components/Layout.svelte";
  import Extension from "./components/Extension.svelte";
  import SortDirection from "./components/SortDirection.svelte";
  import Preference from "./components/Preference.svelte";
  import LanguageSelection from "./components/LanguageSelection.svelte";
  import Search from "./components/Search.svelte";
  import API from "./scripts/api";
  import { fullLanguageName, sortLanguages } from "./scripts/language";

  const api = new API();

  let languages = [];

  let query = "";
  let selected = [];
  let direction = "asc";
  let preference = "meh";

  api.getLanguages().then((value) => {
    value.sort(sortLanguages);
    languages = value;
  });

  let extensions = {};

  $: currentLanguages = selected.length !== 0 ? selected : languages;
  $: (async function () {
    extensions = await api.getExtensions(
      query,
      selected,
      preference,
      direction
    );
  })();

  $: console.log(extensions);

  function openReadme(value) {
    console.log("Open readme", value);
  }

  function openChangelog(value) {
    console.log("Open changelog", value);
  }
</script>

<Layout>
  <h1>Extensions</h1>
  <Search bind:query />
  <LanguageSelection bind:selected bind:languages />
  <SortDirection bind:direction />
  <Preference bind:preference />
  {#each currentLanguages as language}
    <h1>{fullLanguageName(language)}</h1>
    {#each extensions[language] || [] as extension (extension.id)}
      <Extension
        {extension}
        on:readme={openReadme(extension)}
        on:changelog={openChangelog(extension)}
      />
    {/each}
  {/each}
</Layout>
