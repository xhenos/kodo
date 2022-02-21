<script>
  import "../stylesheets/base/grid.css";
  import "../stylesheets/base/flex.css";
  import "../stylesheets/base/button.css";
  import "../stylesheets/global.css";
  import Navbar from "./Navbar.svelte";
  import Footer from "./Footer.svelte";

  import { darkmode } from "../stores";

  darkmode.subscribe((value) => {
    if (value) {
      window.document.body.classList.add("dark-mode")
    } else {
      window.document.body.classList.remove("dark-mode")
    }
  });

  window.addEventListener('load', function () {
    window.document.body.classList.remove("no-transition")
})

</script>

<div>
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  :global(body) {
    --primary-color: #2b7bb2;
    --primary-color-dark: #21608c;
    --secondary-color: #be185d;
    --text-color: black;
    --background-color: white;
    --box-shadow-color: #c4c4c4;
    --button-background-color: #efefef;
    --button-text-color: #000;
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
  }

  :global(body.dark-mode) {
    --secondary-color: #ec4899;
    --text-color: white;
    --background-color: #202020;
    --box-shadow-color: #141414;
    --button-background-color: #383838;
    --button-text-color: #fff;
  }

  :global(body.no-transition) {
    transition: none !important;
  }
</style>
