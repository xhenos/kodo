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
    --background-color: white;
    --button-background-color: #e5e7eb;
    --text-color: black;
  }

  :global(body.dark-mode) {
    --primary-color: #ffffff;
    --background-color: rgb(32, 32, 32);
    --button-background-color: #383838;
    --text-color: white;
  }
</style>
