<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import Section from "../components/Section.svelte";
  import CallToAction from "../components/CallToAction.svelte";

  export let segment;
</script>

<style>
</style>

<Section border noPadding>
  <Nav {segment} />
</Section>

<main>
  <slot />
</main>

<CallToAction />
<Section background="var(--dark)" color="white">
  <Footer />
</Section>
