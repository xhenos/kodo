<script>
  import "../stylesheets/base/grid.css";
  import "../stylesheets/base/flex.css";
  import "../stylesheets/base/button.css";
  import "../stylesheets/global.css";
  import Navbar from "./Navbar.svelte";
  import Footer from "./Footer.svelte";
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
    --primary-color: #4f46e5;
    --primary-color-dark: #4338ca;
    --secondary-color: #be185d;
    --text-color: black;
    --background-color: white;
    --box-shadow-color: #c4c4c4;
    --button-background-color: #e5e7eb;
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }

  :global(body.dark-mode) {
    --primary-color: #818cf8;
    --primary-color-dark: #4f46e5;
    --secondary-color: #ec4899;
    --text-color: white;
    --background-color: #202020;
    --box-shadow-color: #141414;
    --button-background-color: #383838;
  }
</style>
