<script>
  import "../stylesheets/base/grid.css";
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
    --background-color: white;
    --text-color: black;
  }

  :global(body.dark-mode) {
    --background-color: rgb(32, 32, 32);
    --text-color: white;
  }
</style>
