<script>
  import { createEventDispatcher } from "svelte";

  export let extension;

  const { id, iconUrl, name, code, hasReadme, hasChangelog, downloadUrl } =
    extension;

  const dispatch = createEventDispatcher();

  function onReadme() {
    dispatch("readme");
  }

  function onChangelog() {
    dispatch("changelog");
  }
</script>

<div {id}>
  <img src={iconUrl} loading="lazy" alt={"Icon for " + name} />
  <h2>{name} <span>{code}</span></h2>
  <p>{id}</p>
  <div>
    {#if hasReadme}
      <a href={`#${id}`} on:click={onReadme}>Help</a>
    {/if}
    {#if hasChangelog}
      <a href={`#${id}`} on:click={onChangelog}>Changelog</a>
    {/if}
    <a href={downloadUrl}>Download</a>
  </div>
</div>

<style>
  span {
    background-color: tomato;
  }
</style>
