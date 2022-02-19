<script>
  import Layout from "@tachiyomi/shared/src/components/Layout.svelte";
  import Customization from "./components/Customization.svelte";
  import Extensions from "./components/Extensions.svelte";
  import Jumbotron from "./components/Jumbotron.svelte";
  import Tracking from "./components/Tracking.svelte";
</script>

<Layout>
  <Jumbotron />
  <Tracking />
  <Extensions />
  <Customization />
</Layout>

<style>
  :global(nav) {
    position: absolute;
    z-index: 999;
    background-color: transparent !important;
    border: none !important;
  }

  :global(.section) {
    height: 50vh;
  }

  :global(.section div) {
    height: inherit;
  }

  :global(.feature) {
    display: flex;
  }

  :global(.description) {
    box-sizing: border-box;
    padding-top: 5rem;
    font-size: 1.5rem;
  }

  :global(.showcase) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(.showcase .image) {
    height: 40vh;
  }

  @media only screen and (max-width: 990px) {
    :global(.section) {
      height: unset;
    }

    :global(.feature) {
      flex-direction: column;
    }

    :global(.showcase .image) {
      height: unset;
      width: 50vw;
    }

    :global(.feature .description) {
      box-sizing: border-box;
      height: min-content;
      text-align: center;
      padding: 1rem 2rem;
    }

    :global(.first) {
      order: 1;
    }

    :global(.last) {
      order: 999;
    }
  }

  @media only screen and (max-width: 425px) {
    :global(.description) {
      font-size: 1.2rem;
    }

    :global(.showcase .image) {
      height: unset;
      width: 75vw;
    }
  }
</style>
