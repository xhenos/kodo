<script>
  import DarkModeButton from "./DarkModeButton.svelte";

  const links = {
    INDEX: LANDING_PAGE,
    DOWNLOAD: DOWNLOAD_PAGE,
    EXTENSIONS: EXTENSION_PAGE,
    DOCS: DOCS_PAGE,
    GITHUB: GITHUB_LINK,
    TWITTER: TWITTER_LINK,
    REDDIT: REDDIT_LINK,
    FACEBOOK: FACEBOOK_LINK,
    DISCORD: DISCORD_LINK,
  };

  let toggle = false;

  function onToggle() {
    toggle = !toggle;
    let body = document.body;
    let nav = document.getElementsByTagName("nav");
    if (toggle) {
      body.classList.add("responsive");
      nav.classList.add("responsive");
    } else {
      body.classList.remove("responsive");
      nav.classList.remove("responsive");
    }
  }

  function isActivePage(origin) {
    return window.location.origin;
  }

  /* eslint-disable no-undef */
</script>

<nav class={toggle ? "responsive" : ""}>
  <a href={links.INDEX} class={isActivePage(links.INDEX) ? "active" : ""}
    >Home</a
  >
  <a href={links.DOWNLOAD} class={isActivePage(links.DOWNLOAD) ? "active" : ""}
    >Download</a
  >
  <a
    href={links.EXTENSIONS}
    class={isActivePage(links.EXTENSION) ? "active" : ""}>Extensions</a
  >
  <a href={links.DOCS}>Docs</a>
  <div class="spacer" />
  <a href={links.TWITTER} target="_blank">Twitter</a>
  <a href={links.FACEBOOK} target="_blank">Facebook</a>
  <a href={links.REDDIT} target="_blank">Reddit</a>
  <a href={links.GITHUB} target="_blank">GitHub</a>
  <a href={links.DISCORD} target="_blank">Discord</a>
  <DarkModeButton />
  <!-- svelte-ignore a11y-missing-attribute -->
  <button class="button rounded" on:click={onToggle}>
    {#if toggle}
      🔺
    {:else}
      🔷
    {/if}
  </button>
</nav>

<style>
  nav {
    display: flex;
    height: 50px;
    width: 100%;
  }

  nav *:not(.spacer, button) {
    box-sizing: border-box;
    align-self: center;
    padding: 0 1rem;
  }

  .spacer {
    width: 100%;
  }

  button:last-child {
    display: none;
  }

  @media only screen and (max-width: 990px) {
    nav *:not(:first-child, .spacer, button) {
      display: none;
    }

    nav *:not(.spacer, button) {
      box-sizing: border-box;
      align-self: stretch;
      padding: 0 1rem;
    }

    button {
      float: right;
    }

    button:last-child {
      display: unset;
    }

    :global(.responsive:not(nav)) {
      overflow: hidden;
    }

    .responsive {
      position: fixed;
      background-color: var(--background-color) !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      flex-direction: column;
    }

    .responsive .spacer {
      display: none;
    }

    .responsive *:not(:first-child, button) {
      display: unset;
    }
  }
</style>
