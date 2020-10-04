<script context="module">
  import api from "../_api.js";

  export function preload(page) {
    const { path } = page;
    return this.fetch(`${api}${path}`)
      .then((res) => res.json())
      .then((data) => {
        return { data, path };
      });
  }
</script>

<script>
  export let data;
  export let path;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<h1>Pages</h1>

<ul>
  {#each data as page}
    <li><a rel="prefetch" href={`${path}${page.slug}`}>{page.title}</a></li>
  {/each}
</ul>
