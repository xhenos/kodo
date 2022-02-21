<script>
  import { darkmode } from "../stores";

  let darkmodeValue;
  darkmode.subscribe((value) => {
    darkmodeValue = value;
  });
   

  function toggle() {
    darkmode.set(!darkmodeValue);
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
