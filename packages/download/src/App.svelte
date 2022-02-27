<script>
  import Layout from "@tachiyomi/shared/src/components/Layout.svelte";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
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

  dayjs.extend(relativeTime)

  $: stablePublish = dayjs(stable?.publishedAt).format("dddd, MMMM D, YYYY HH:mm")
  $: stablePublishRelative = dayjs(stable?.publishedAt).fromNow()
  $: previewPublish = dayjs(preview?.publishedAt).format("dddd, MMMM D, YYYY HH:mm")
  $: previewPublishRelative = dayjs(preview?.publishedAt).fromNow()

  console.log("BrowserName", System.BrowserName);
  console.log("BrowserVersion", System.BrowserVersion);
  console.log("OSName", System.OSName);
  console.log("OSVersion", System.OSVersion);
</script>

<Layout>
  <div class="container">
    <h1>Downloads</h1>
    <p><strong class="brand">Tachiyomi</strong> is only safely downloaded from this website and our <a href="https://github.com/tachiyomiorg/tachiyomi" target="_blank">GitHub repository</a>.</p>
    <p>You need <strong>Android 6.0</strong> or higher to use the app, we <em>do not</em> support <strong>iOS</strong>.</p>
    <p>
      The latest stable version of <strong class="brand">Tachiyomi</strong> is <strong>{stable?.version}</strong> and was released <strong title="{stablePublish}">{stablePublishRelative}</strong>.
    </p>
    <a href={stableUrls?.universal}>
      <button class="button large inverted">
        Download
      </button>
    </a>
    <button class="button large">
      Release notes
    </button>

    <h2>Feeling adventurous?</h2>
    <p>Try out the preview builds to see the upcoming features, but be warned that it can contain breaking changes and bugs.</p>
    <p>
      The most recently maintained version of <strong class="brand">Tachiyomi</strong> is <strong>{preview?.version}</strong> and was released <strong title="{previewPublish}">{previewPublishRelative}</strong>.
    </p>

    <a href={previewUrls?.universal}>
      <button class="button large inverted">
        Download
      </button>
    </a>
    <button class="button large">
      Release notes
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

  .brand {
    font-weight: 500;
  }
</style>
