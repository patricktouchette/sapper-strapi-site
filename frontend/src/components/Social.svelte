<script>
  import Facebook from "./icons/facebook.svelte";
  import Instagram from "./icons/instagram.svelte";
  import Twitter from "./icons/twitter.svelte";
</script>

<style>
  ul {
    list-style: none;
  }

  .social {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: flex-start;
    margin: 0;
    justify-content: center;
    align-items: center;
  }

  .icon {
    border: 1px solid white;
    border-radius: 100px;
    width: 40px;
    height: 40px;
    margin: 0 0.5rem;
    cursor: pointer;
    font-size: 22px;

    display: grid;
    justify-content: center;
    align-items: center;
  }

  .icon :global(g) {
    fill: white;
  }

  .social-sr-only {
    display: none;
  }
</style>

<ul class="social">
  <li>
    <a href="/" class="icon">
      <span class="social-sr-only">facebook</span>
      <Facebook />
    </a>
  </li>
  <li>
    <a href="/" class="icon">
      <span class="social-sr-only">twitter</span>
      <Twitter />
    </a>
  </li>
  <li>
    <a href="/" class="icon">
      <span class="social-sr-only">instagram</span>
      <Instagram />
    </a>
  </li>
</ul>
