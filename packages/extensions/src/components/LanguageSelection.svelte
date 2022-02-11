<script>
  import { fullLanguageName } from "../util/language";
  export let selected;
  export let languages;
</script>

<div>
  <select bind:value={selected} multiple>
    {#each languages || [] as language}
      <option value={language}>{fullLanguageName(language)}</option>
    {/each}
  </select>
</div>
