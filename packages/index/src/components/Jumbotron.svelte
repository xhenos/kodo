<script>
  window.CSS.registerProperty({
    name: "--jumbotron-bg-gradient-end",
    syntax: "<color>",
    inherits: false,
    initialValue: "#c0ffee",
  });
  window.CSS.registerProperty({
    name: "--jumbotron-bg-gradient-start",
    syntax: "<color>",
    inherits: false,
    initialValue: "#adbeef",
  });
</script>

<div class="jumbotron">
  <div class="background" />
  <div class="foreground flex-column align-center justify-center">
    <div class="text-center">
      <img src="/icon.png" alt="The logo for Tachiyomi" />
      <h1 class="app-name">Tachiyomi</h1>
      <h2 class="app-description">
        Tachiyomi is an open-source Android app that lets you read any manga
        from your smartphone – faster and easier than ever.
      </h2>
      <div>
        <!-- svelte-ignore missing-declaration -->
        <a href={DOCS_PAGE}>
          <button class="button large">Get started</button>
        </a>
        <!-- svelte-ignore missing-declaration -->
        <a href={DOWNLOAD_PAGE}>
          <button class="button large">Download</button>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  :global(body .jumbotron .background) {
    --jumbotron-bg-gradient-start: #e7e6fff2;
    --jumbotron-bg-gradient-end: #ffffff;
  }

  :global(body.dark-mode .jumbotron .background) {
    --jumbotron-bg-gradient-start: #141618f2;
    --jumbotron-bg-gradient-end: #202020;
  }

  .jumbotron {
    position: relative;
    top: 0;
    left: 0;
  }

  .jumbotron img {
    height: 10vh;
  }

  .jumbotron .app-name {
    font-size: 3.5rem;
    font-weight: 400;
    line-height: 1.2;
  }

  .jumbotron .app-description {
    font-size: 1.75rem;
    font-weight: 300;
  }

  .jumbotron .background {
    position: relative;
    top: 0;
    left: 0;
    height: 48vh;
    background: linear-gradient(
        0deg,
        var(--jumbotron-bg-gradient-end),
        var(--jumbotron-bg-gradient-start)
      ),
      url(/tile.svg);
    background-position: 50%;
    background-size: 150px;
    padding-top: 75px;
    transition: --jumbotron-bg-gradient-end 0.3s,
      --jumbotron-bg-gradient-start 0.3s;
  }

  .jumbotron .foreground {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }

  @media only screen and (max-width: 990px) {
    .jumbotron .foreground {
      width: 90%;
    }
  }

  @media only screen and (max-height: 990px) {
    .jumbotron .background {
      height: 75vh;
    }

    .jumbotron img {
      height: 12.5vh;
    }

    .jumbotron h1 {
      font-size: 2.5rem;
    }

    .jumbotron h2 {
      font-size: 1.25rem;
      font-weight: 500;
    }
  }
</style>
