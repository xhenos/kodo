<script>
  export let preference;
</script>

<div>
  <label>
    <input type="radio" name="nsfw" value="yes" bind:group={preference} />
    Yes
  </label>
  <label>
    <input type="radio" name="nsfw" value="no" bind:group={preference} />
    No
  </label>
  <label>
    <input type="radio" name="nsfw" value="meh" bind:group={preference} />
    Don't care
  </label>
</div>
