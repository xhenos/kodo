<script>
  import Layout from "@tachiyomi/shared/src/components/Layout.svelte";
  import Extension from "./components/Extension.svelte";
  import SortDirection from "./components/SortDirection.svelte";
  import Preference from "./components/Preference.svelte";
  import LanguageSelection from "./components/LanguageSelection.svelte";
  import ExtensionGroupHead from "./components/ExtensionGroupHead.svelte";
  import Search from "./components/Search.svelte";
  import Repository from "./data";

  const api = new Repository();

  let languages = [];

  let query = "";
  let selected = [];
  let direction = "asc";
  let preference = "meh";

  let extensions = {};

  $: currentLanguages = selected.length !== 0 ? selected : languages;
  $: (async function () {
    extensions = await api.getExtensions(
      query,
      selected,
      preference,
      direction
    );
    languages = api.getLanguages();
  })();

  $: console.log(languages, extensions);

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
    {#if (extensions[language] || []).length > 0}
      <ExtensionGroupHead {language} />
      {#each extensions[language] as extension (extension.id)}
        <Extension
          {extension}
          on:readme={openReadme(extension)}
          on:changelog={openChangelog(extension)}
        />
      {/each}
    {/if}
  {/each}
</Layout>
