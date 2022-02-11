<script>
  import { fullLanguageName, simpleLanguageName } from "../util/language";

  export let language;
</script>

{#if ["all", "en"].includes(language)}
  <h1>{simpleLanguageName(language)}</h1>
{:else}
  <h1>{fullLanguageName(language)}</h1>
{/if}
