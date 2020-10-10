<script>
  import NavMobileMenu from "./NavMobileMenu.svelte";

  export let segment = null;
  export let links = [];
  let showMenu = false;

  // const links = [
  //   { name: "About", url: "about-us" },
  //   { name: "FAQ", url: "faq" },
  //   { name: "Career", url: "career" },
  //   { name: "Contact Us", url: "contact-us" },
  // ];
</script>

<style>
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    list-style: none;
  }

  .logo {
    margin-right: auto;
  }

  .button {
    margin-left: auto;
  }

  a {
    text-decoration: none;
    display: block;
    padding: 0.5rem 0rem;
    color: var(--dark);
  }

  a:hover {
    color: var(--primary);
  }

  .menu-button {
    display: none;
    cursor: pointer;
  }

  [aria-current] {
    border-bottom: 2px solid var(--primary);
  }

  @media only screen and (max-width: 1250px) {
    .menu-button {
      display: block;
    }

    .button,
    .menu-item {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .logo {
      width: 60%;
    }
  }
</style>

<nav class="header-nav">
  <ul>
    <li class="logo">
      <a rel="prefetch" href="."><img
          src="./images/logo.svg"
          alt="huddle logo" /></a>
    </li>

    {#each links as { name, url }}
      <li class="menu-item">
        <a
          href={url}
          rel="prefetch"
          aria-current={segment === url ? 'page' : undefined}>{name}</a>
      </li>
    {/each}

    <li class="menu-button" on:click={() => (showMenu = !showMenu)}>
      <svg viewBox="0 0 100 60" width="40" height="40">
        <rect width="100" height="10" />
        <rect y="30" width="100" height="10" />
        <rect y="60" width="100" height="10" />
      </svg>
    </li>

    <li class="button">
      <button class="btn btn-secondary">Try It Free</button>
    </li>
  </ul>
</nav>

<NavMobileMenu {showMenu} {links} on:click={() => (showMenu = !showMenu)} />
