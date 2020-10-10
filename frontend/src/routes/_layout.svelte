<script context="module">
  export async function preload() {
    const res = await this.fetch(`/api/top-nav`);
    const data = await res.json();

    if (data.length === 0) {
      this.error("404", "No data found.");
    }
    if (res.status === 200) return { data };

    this.error(res.status, data.message);
  }
</script>

<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import Section from "../components/Section.svelte";
  import CallToAction from "../components/CallToAction.svelte";

  export let segment;
  export let data;

  // console.log("data", data);
  const links = data.menuItem.map((d) => {
    return { name: d.name, url: d.page.slug };
  });
  console.log("links", links);
</script>

<style>
</style>

<Section border noPadding>
  <Nav {segment} {links} />
</Section>

<main>
  <slot />
</main>

<CallToAction />
<Section background="var(--dark)" color="white">
  <Footer />
</Section>
