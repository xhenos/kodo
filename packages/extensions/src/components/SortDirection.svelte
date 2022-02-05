<script>
  export let direction;
</script>

<div>
  <input
    type="radio"
    id="desc"
    name="sort"
    value="desc"
    bind:group={direction}
  />
  <label for="desc">Descending</label>
  <input type="radio" id="asc" name="sort" value="asc" bind:group={direction} />
  <label for="asc">Ascending</label>
</div>
