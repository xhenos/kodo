<script>
  import Layout from "@tachiyomi/shared/src/components/Layout.svelte";
</script>

<Layout>
  <div class="jumbotron">
    <div class="background" />
    <div class="foreground flex-column align-center justify-center">
      <div class="text-center">
        <img
          src="/icon.png"
          alt="The logo for Tachiyomi"
          width="160"
          height="160"
        />
        <h1>Tachiyomi</h1>
        <h2>
          Tachiyomi is an open-source Android app that lets you read any manga
          from your smartphone – faster and easier than ever.
        </h2>
        <div>
          <a href="https://tachiyomi.org/help/guides/getting-started/">
            <button>Get started</button>
          </a>
          <a href="https://tachiyomi.org/download/">
            <button>Download</button>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="features">
      <div class="feature-tracking">
        <div class="description-tracking">
          <h2>Tracking</h2>
          <span>
            Automatically keep track of your manga with MyAnimeList, AniList,
            Kitsu, Shikimori,and Bangumi.
          </span>
        </div>
        <div class="image-tracking">
          <img
            height="256px"
            src="https://i.imgur.com/zVq59EO.png"
            alt="Placeholder"
          />
        </div>
      </div>
      <div class="feature-extensions">
        <div class="image-extensions">
          <img
            height="256px"
            src="https://i.imgur.com/gyW9P1C.png"
            alt="Placeholder"
          />
        </div>
        <div class="description-extensions">
          <h2>Extensions</h2>
          <span>
            Online and offline reading from sources like MangaDex, MangaKakalot,
            and hundreds more.
          </span>
        </div>
      </div>
      <div class="feature-customization">
        <div class="description-customization">
          <h2>Customization</h2>
          <span>
            A configurable reader with multiple reading modes, custom color
            filters, and other settings.
          </span>
        </div>
        <div class="image-customization">
          <img
            height="256px"
            src="https://i.imgur.com/M5Jdc8t.png"
            alt="Placeholder"
          />
        </div>
      </div>
    </div>
  </div>
</Layout>

<style>
  :global(body) {
    --jumbotron-bg-opacity: 0.08;
  }

  :global(body.dark-mode) {
    --jumbotron-bg-opacity: 0.02;
  }

  :global(nav) {
    position: absolute;
    z-index: 999;
    background-color: transparent !important;
    border: none !important;
  }

  .jumbotron {
    position: relative;
    top: 0;
    left: 0;
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
    background-size: 50px 50px;
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

  .container {
    display: grid;
    grid-template-columns: 1fr 1.1fr 1fr;
    grid-template-rows: 0.6fr 2.2fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "branding branding branding"
      "features features features";
  }

  .features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 8px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "feature-tracking feature-tracking"
      "feature-extensions feature-extensions"
      "feature-customization feature-customization";
    grid-area: features;
  }

  .feature-tracking {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 32px;
    grid-auto-flow: row;
    grid-template-areas: "description-tracking image-tracking";
    grid-area: feature-tracking;
  }
  .description-tracking {
    grid-area: description-tracking;
    text-align: right;
    padding: 0.25rem 1rem 0.25rem 8rem;
  }
  .image-tracking {
    grid-area: image-tracking;
    text-align: left;
    padding: 0.25rem;
  }

  .feature-extensions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 32px;
    grid-auto-flow: row;
    grid-template-areas: "image-extensions description-extensions";
    grid-area: feature-extensions;
  }
  .description-extensions {
    grid-area: description-extensions;
    text-align: left;
    padding: 0.25rem 8rem 0.25rem 1rem;
  }
  .image-extensions {
    grid-area: image-extensions;
    text-align: right;
    padding: 0.25rem;
  }

  .feature-customization {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 32px;
    grid-auto-flow: row;
    grid-template-areas: "description-customization image-customization";
    grid-area: feature-customization;
  }
  .description-customization {
    grid-area: description-customization;
    text-align: right;
    padding: 0.25rem 1rem 0.25rem 8rem;
  }
  .image-customization {
    grid-area: image-customization;
    text-align: left;
    padding: 0.25rem;
  }

  /* Mobile Optimizations */
  @media only screen and (max-width: 768px) {
    .feature-tracking {
      grid-template-columns: 1fr;
      grid-template-rows: 0.5fr 1fr;
      grid-auto-flow: column;
      grid-template-areas:
        "description-tracking"
        "image-tracking";
    }
    .feature-extensions {
      grid-template-columns: 1fr;
      grid-template-rows: 0.5fr 1fr;
      grid-auto-flow: column;
      grid-template-areas:
        "description-extensions"
        "image-extensions";
    }
    .feature-customization {
      grid-template-columns: 1fr;
      grid-template-rows: 0.5fr 1fr;
      grid-auto-flow: column;
      grid-template-areas:
        "description-customization"
        "image-customization";
    }
    .description-tracking,
    .description-extensions,
    .description-customization {
      text-align: center;
      padding: 0.25rem;
    }
    .image-tracking,
    .image-extensions,
    .image-customization {
      text-align: center;
      padding: 0.25rem;
    }
  }
</style>
