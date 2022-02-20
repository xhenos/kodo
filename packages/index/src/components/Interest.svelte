<div class="container">
  <div class="interest">
    <div class="col-8">
      <h2>Get the app</h2>
      <span>Join millions of others and start reading now!</span>
      <div>
        <!-- svelte-ignore missing-declaration -->
        <a href={DOWNLOAD_PAGE}>
          <button class="button large inverted">Download</button>
        </a>
      </div>
    </div>
  </div>
</div>


<style>
  .interest {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }

  .interest div {
    box-sizing: border-box;
    font-size: 1.5rem;
  }

  .interest div h2 {
    font-weight: 600;
  }

  .interest .download {
    margin-top: 600px;
  }
</style>