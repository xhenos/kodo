<script>
  import Layout from "@tachiyomi/shared/src/components/Layout.svelte";
  import Icon from "@tachiyomi/shared/src/components/Icon.svelte";
  import API from "./data";
  import System from "svelte-system-info";
  import { onMount } from "svelte";

  const api = new API();

  let stable = undefined;
  let preview = undefined;

  $: console.log("Stable", stable, "Preview", preview)

  $: stableUrls = stable?.downloads;
  $: previewUrls = preview?.downloads;

  onMount(async () => {
    const [stableResult, previewResult] = await api.getLatest();
    stable = stableResult;
    preview = previewResult;
  });

  console.log("BrowserName", System.BrowserName);
  console.log("BrowserVersion", System.BrowserVersion);
  console.log("OSName", System.OSName);
  console.log("OSVersion", System.OSVersion);
</script>

<Layout>
  <div class="container">
    <h1>Downloads</h1>
    <p>The latest version is {stable?.version} of Tachiyomi. This is the most recent maintaned build. It was leleased {stable?.publishedAt}, on {stable?.publishedAt}</p>
    <a href={stableUrls?.universal}>
      <button class="button large inverted">
        Download
      </button>
    </a>
    <button class="button large">
      Releast notes
    </button>

    <h2>Feeling adventurous?</h2>
    <p>Try out the preview builds. To see the upcomming features. But do be warned that it can contain breaking changes and bugs.</p>
    <p>The latest version is {preview?.version} of Tachiyomi. This is the most recent maintaned build. It was leleased {preview?.publishedAt}, on {preview?.publishedAt}</p>

    <a href={previewUrls?.universal}>
      <button class="button large inverted">
        Download
      </button>
    </a>
    <button class="button large">
      Releast notes
    </button>
  </div>
</Layout>

<style>
  p {
    max-width: 512px;
  }

  h2 {
    margin-top: 5rem;
  }
</style>
