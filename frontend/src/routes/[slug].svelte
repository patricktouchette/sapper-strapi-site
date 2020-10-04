<script context="module">
  import api from "./_api.js";

  export async function preload(page) {
    const { slug } = page.params;

    const query = `/pages?slug=${slug}&published=true`;
    const res = await this.fetch(`${api}${query}`);
    const data = await res.json();

    // if (data.length === 0) {
    //   this.error("404", "No data found.");
    //   return;
    // }
    // if (res.status === 200) return { page: data[0] };

    // this.error(res.status, data.message);
    // return;

    if (res.status === 200) {
      return { page: data[0] };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import RichText from "../components/RichText.svelte";
  // import Image from "../components/Image.svelte";
  export let page;
  console.log("page", page);
</script>

<style>
  .featured-image {
    max-width: 400px;
    margin-bottom: 4rem;
  }
</style>

<!-- {#if page} -->
<h1>{page.title}</h1>

<div class="featured-image">
  {page.image.url}
  <!-- <Image image={page.image} /> -->
  <img src={`${api}${page.image.url}`} alt="" />
</div>

<RichText content={page.content} />
<!-- {/if} -->
