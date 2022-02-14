<script>
  import DarkModeButton from "./DarkModeButton.svelte";
  /* eslint-disable no-undef */
</script>

<nav>
  <div class="left">
    <!-- svelte-ignore missing-declaration -->
    <a href={LANDING_PAGE}>Home</a>
    <!-- svelte-ignore missing-declaration -->
    <a href={DOWNLOAD_PAGE}>Download</a>
    <!-- svelte-ignore missing-declaration -->
    <a href={EXTENSION_PAGE}>Extensions</a>
    <!-- svelte-ignore missing-declaration -->
    <a href={DOCS_PAGE}>Docs</a>
  </div>
  <div class="right">
    <!-- svelte-ignore missing-declaration -->
    <a href={TWITTER_LINK} target="_blank">Twitter</a>
    <!-- svelte-ignore missing-declaration -->
    <a href={FACEBOOK_LINK} target="_blank">Facebook</a>
    <!-- svelte-ignore missing-declaration -->
    <a href={REDDIT_LINK} target="_blank">Reddit</a>
    <!-- svelte-ignore missing-declaration -->
    <a href={GITHUB_LINK} target="_blank">GitHub</a>
    <!-- svelte-ignore missing-declaration -->
    <a href={DISCORD_LINK} target="_blank">Discord</a>
    <DarkModeButton />
  </div>
</nav>

<style>
  nav {
    width: calc(100% - 100px);
    height: 75px;
    background-color: var(--background-color);
    border-bottom: 1px solid rgb(245, 245, 245);
    display: flex;
    filter: brightness(99%);
    padding: 0 50px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: space-between;
  }

  nav a {
    color: var(--text-color);
    text-decoration: none;
    transition: color 0.3s;
  }

  nav a:hover {
    color: blue;
    text-decoration: underline;
  }
</style>
