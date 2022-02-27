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
    --primary-color: #4A74EA;
    --primary-color-dark: #3253AD;
    --primary-color-light: #E4E8FB;
    --secondary-color: #be185d;
    --text-color: black;
    --background-color: #f8f8fe;
    --box-shadow-color: #c4c4c4;
    --border-color: #0b2a41;
    --button-background-color: #ffffff;
    --button-text-color: #000;
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
  }

  :global(body.dark-mode) {
    --primary-color-light: #3253AD;
    --secondary-color: #ec4899;
    --text-color: white;
    --background-color: #1c1e22;
    --box-shadow-color: #141414;
    --border-color: rgb(20, 20, 20);
    --button-background-color: #1e2124;
    --button-text-color: #fff;
  }

  :global(body.no-transition) {
    transition: none !important;
  }

  :global(body.no-transition *) {
    transition: none !important;
  }
</style>
