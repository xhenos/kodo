<script>
  import { fullLanguageName } from "../util/language";
  export let selected;
  export let languages;
</script>

<!-- TODO: Remake this as button pills -->
<div>
  <select bind:value={selected} multiple>
    {#each languages || [] as language}
      <option value={language}>{fullLanguageName(language)}</option>
    {/each}
  </select>
</div>
