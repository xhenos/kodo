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
        <a href="https://tachiyomi.org/help/guides/getting-started/">
          <button class="button">Get started</button>
        </a>
        <a href="https://tachiyomi.org/download/">
          <button class="button">Download</button>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  :global(body) {
    --jumbotron-bg-opacity: 0.08;
  }

  :global(body.dark-mode) {
    --jumbotron-bg-opacity: 0.02;
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
    font-size: 3rem;
  }

  .jumbotron h2 {
    font-size: 2rem;
    font-weight: 500;
  }

  .jumbotron .background {
    position: relative;
    top: 0;
    left: 0;
    height: 48vh;
    background-color: #e5e5f7;
    opacity: var(--jumbotron-bg-opacity);
    background-image: url("/tile.svg");
    background-position: 10px 0, 10px 0, 0 0, 0 0;
    background-size: 100px 100px;
    background-repeat: repeat;
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
