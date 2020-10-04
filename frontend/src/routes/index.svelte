<script>
  import Section from "../components/Section.svelte";
  import Header from "../components/Header.svelte";
  import Features from "../components/Features.svelte";
</script>

<svelte:head>
  <title>Huddle</title>
</svelte:head>

<Section
  background={`
      url("../../images/bg-hero-desktop.svg")
      center center/cover
      no-repeat,
      var(--pale)`}>
  <Header />
</Section>

<Section>
  <Features />
</Section>
