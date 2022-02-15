<script>
  import { onMount } from "svelte";

  import { darkmode } from "../stores";

  let darkmodeValue;
  darkmode.subscribe((value) => {
    darkmodeValue = value;
  });

  onMount(() => {
    if (darkmodeValue) {
      window.document.body.classList.add("dark-mode");
    }
  });

  function toggle() {
    darkmode.set(!darkmodeValue);
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<button class="button rounded" on:click={toggle}>
  {#if darkmodeValue}
    🌞
  {:else}
    🌚
  {/if}
</button>

<style>
  button {
    font-family: "Noto Color Emoji", "Apple Color Emoji";
  }
</style>
