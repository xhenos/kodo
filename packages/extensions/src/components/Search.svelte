<script>
  export let query;
</script>

<div>
  <input 
  type="text"
  placeholder="Search by name or id..."
  bind:value={query} />
</div>

<style>
  input[type=text] {
    margin: 0.5rem;
    border: none;
    border-radius: 99em;
    padding:  0.75rem 1rem;
    width: calc(100% - 1rem);
    box-sizing: border-box;
    box-shadow: 0px 1px 4px 0px black;
}


</style>