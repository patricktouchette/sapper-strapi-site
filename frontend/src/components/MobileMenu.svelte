<script>
  import { fly } from "svelte/transition";
  import Logo from "./icons/Logo.svelte";

  export let showMenu;
  export let links;
</script>

<style>
  .mobile-menu {
    position: fixed;
    padding: 3rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--dark);
    color: var(--pale);
    display: block;
    text-align: center;
    z-index: 100;
  }

  button {
    margin-left: auto;
    margin-bottom: 3rem;
  }

  .logo :global(path) {
    fill: white;
  }

  ul {
    margin-top: 3rem;
    list-style: none;
  }

  a {
    color: var(--pale);
    text-decoration: none;
    width: 100%;
    display: block;
    margin: 1rem 0;
  }

  a:hover {
    color: var(--primary);
  }

  hr {
    border: 1px dashed rgba(255, 255, 255, 0.1);
  }

  hr:last-of-type {
    display: none;
  }
</style>

{#if showMenu}
  <div class="mobile-menu" transition:fly={{ x: 200, duration: 400 }}>
    <button class="btn btn-primary" on:click>X</button>

    <div class="logo" on:click>
      <a href="/"><Logo /></a>
    </div>

    <ul>
      {#each links as { name, url }}
        <li class="menu-item"><a href={url} on:click>{name}</a></li>
        <hr />
      {/each}
    </ul>
  </div>
{/if}
