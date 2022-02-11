<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "tachiyomi-common/src/components/Icon.svelte";

  export let extension;

  const { id, iconUrl, name, version, hasReadme, hasChangelog, downloadUrl } =
    extension;

  const dispatch = createEventDispatcher();

  function onReadme() {
    dispatch("readme");
  }

  function onChangelog() {
    dispatch("changelog");
  }
</script>

<div class="extension" {id}>
  <img
    class="extension-icon"
    src={iconUrl}
    loading="lazy"
    alt={"Icon for " + name}
  />
  <div class="extension-info">
    <span class="extension-name"
      >{name} <span class="extension-version">{version}</span></span
    >
    <a class="extension-id" href={"#" + id}>{id}</a>
  </div>
  {#if hasChangelog || hasReadme}
    <div class="extension-button-secondary">
      {#if hasChangelog}
        <a class="extension-changelog" href={`#${id}`} on:click={onChangelog}
          >Changelog</a
        >
      {/if}
      {#if hasReadme}
        <a class="extension-readme" href={`#${id}`} on:click={onReadme}>Help</a>
      {/if}
    </div>
  {/if}
  <div class="extension-button-primary">
    <a class="extension-download" href={downloadUrl}>
      <Icon name="download" height="14" width="14" />
      <span>Download</span>
    </a>
  </div>
</div>

<style>
  .extension {
    align-items: center;
    display: flex;
    padding: 0.4em 1.5em;
    max-width: 600px;
    border-radius: 6px;
    margin: 4px;
  }
  .extension:hover {
    background-color: #f5f5f5;
  }
  .extension:target {
    background-color: #ebebeb;
  }
  .extension-icon {
    margin-right: 0.5em;
    height: 3em;
    width: 3em;
  }
  .extension-info {
    flex: 1;
  }
  .extension-name {
    font-weight: 600;
    display: block;
  }
  .extension-id {
    color: #6c757d;
    font-family: monospace;
    font-size: 0.9em;
    text-decoration: none;
  }
  .extension-id:hover {
    opacity: 0.8;
  }
  .extension-version {
    background-color: #4f46e5;
    color: #ffffff;
    font-size: 0.75em;
    font-weight: 500;
    border-radius: 1em;
    padding: 2px 8px;
    margin: 0px 4px;
  }
  .extension-download {
    color: #4f46e5;
    fill: #4f46e5;
    font-weight: 700;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    margin-right: 0.5em;
    padding: 0.5rem 1rem;
    transition-property: background-color, border-color, color, fill, stroke;
    text-decoration: none;
  }
  .extension-download:hover {
    color: #e5e7eb;
    fill: #e5e7eb;
    background-color: #4f46e5;
    border: 1px solid #4f46e5;
  }
  .extension-button-secondary {
    margin-right: 8px;
  }
  .extension-changelog,
  .extension-readme {
    display: block;
    text-align: end;
    font-size: 1rem;
    font-weight: 600;
    color: #4f46e5;
    text-decoration: none;
  }
  .extension-changelog:hover,
  .extension-readme:hover {
    color: #af408e;
  }
</style>
