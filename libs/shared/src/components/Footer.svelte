<footer>
  <div class="copyright">
    <div class="links">
      <!-- TODO add new link to open source license -->
      <a href="https://choosealicense.com/licenses/apache-2.0/">Open-source Apache Licensed</a>
      |
      <!-- TODO add new link to privacy policy -->
      <a href="https://tachiyomi.org/privacy/">Privacy policy</a>
    </div>
    <span class="copyright-holder">Copyright © 2015{ " - " + new Date().getFullYear() } Javier Tomás</span>
  </div>
  <div class="netlify">
    <a target="_blank" href="https://www.netlify.com/">This site is powered by Netlify</a>
    <img src="/images/netlify.svg" alt="Netlify Logo">
  </div>
</footer>

<style>
  footer {
    width: 100%;
    height: 100px;
    display: flex;
    filter: brightness(95%);
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .copyright-holder {
    text-align: center;
    display: block;
  }

  .netlify {
    margin-top: 1rem;
    font-size: .8rem;
  }

  .netlify a:hover {
    color: #24827a;
  }

  .netlify img {
    transform: rotate(1turn);
    margin-bottom: -2px;
    width: 1em;
    height: 1em;
  }
</style>
