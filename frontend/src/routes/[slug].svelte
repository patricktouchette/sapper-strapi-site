<script context="module">
  import api from "./_api.js";

  export async function preload(page) {
    const { slug } = page.params;

    const query = `/pages?slug=${slug}&published=true`;
    const res = await this.fetch(`${api}${query}`);
    const data = await res.json();

    if (data.length === 0) {
      this.error("404", "No data found.");
    }
    if (res.status === 200) return { page: data[0] };

    this.error(res.status, data.message);
  }
</script>

<script>
  import Section from "../components/Section.svelte";
  import RichText from "../components/RichText.svelte";
  import Image from "../components/Image.svelte";
  export let page;
</script>

<style>
  .featured-image {
    display: flex;
    max-width: 500px;
    max-height: 500px;
    margin-bottom: 4rem;
  }
</style>

<Section>
  <!-- {#if page} -->
  <h1>{page.title}</h1>

  <div class="featured-image">
    <Image image={page.image} maxWidth="500px" />
  </div>

  <RichText content={page.content} />
  <!-- {/if} -->
</Section>
