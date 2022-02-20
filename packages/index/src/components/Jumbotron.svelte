<div class="jumbotron">
  <div class="background" />
  <div class="foreground flex-column align-center justify-center">
    <div class="text-center">
      <img src="/icon.png" alt="The logo for Tachiyomi" />
      <h1>Tachiyomi</h1>
      <h2>
        Tachiyomi is an open-source Android app that lets you read any manga
        from your smartphone – faster and easier than ever.
      </h2>
      <div>
        <!-- svelte-ignore missing-declaration -->
        <a href={DOCS_PAGE}>
          <button class="button">Get started</button>
        </a>
        <!-- svelte-ignore missing-declaration -->
        <a href={DOWNLOAD_PAGE}>
          <button class="button">Download</button>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  :global(body) {
    --jumbotron-bg-image: url(/images/background-dark.png);
    --jumbotron-bg-gradient-start: 231, 230, 255;
    --jumbotron-bg-gradient-start-alpha: 0.95;
    --jumbotron-bg-gradient-end: 255, 255, 255;
  }

  :global(body.dark-mode) {
    --jumbotron-bg-image: url(/images/background-light.png);
    --jumbotron-bg-gradient-start: 20, 22, 24;
    --jumbotron-bg-gradient-start-alpha: 0.95;
    --jumbotron-bg-gradient-end: 32, 32, 32;
  }

  .jumbotron {
    position: relative;
    top: 0;
    left: 0;
  }

  .jumbotron img {
    height: 10vh;
  }

  .jumbotron h1 {
    font-size: 4rem;
  }

  .jumbotron h2 {
    font-size: 1.875rem;
    font-weight: 400;
  }

  .jumbotron .background {
    position: relative;
    top: 0;
    left: 0;
    height: 48vh;
    background: linear-gradient(
        0deg,
        rgba(var(--jumbotron-bg-gradient-end), 100%) 1%,
        rgba(
          var(--jumbotron-bg-gradient-start),
          var(--jumbotron-bg-gradient-start-alpha)
        )
      ),
      url(/tile.svg);
    background-position: 50%;
    background-size: 150px;
    padding-top: 75px;
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
