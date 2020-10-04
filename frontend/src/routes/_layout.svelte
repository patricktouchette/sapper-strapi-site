<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import Section from "../components/Section.svelte";
  import CallToAction from "../components/CallToAction.svelte";

  export let segment;
</script>

<style>
</style>

{#if segment === undefined}
  <!-- Home Page   -->
  <main>
    <slot />
  </main>
{:else}
  <!-- Other Pages -->
  <Section border noPadding>
    <Nav {segment} />
  </Section>
  <main>
    <Section>
      <slot />
    </Section>
  </main>
{/if}

<CallToAction />
<Section background="var(--dark)" color="white">
  <Footer />
</Section>
