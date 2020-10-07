<script context="module">
  export async function preload(page) {
    const res = await this.fetch(`/api/features`);
    const data = await res.json();

    if (data.length === 0) {
      this.error("404", "No data found.");
    }
    if (res.status === 200) return { data };

    this.error(res.status, data.message);
  }
</script>

<script>
  import Section from "../components/Section.svelte";
  import Header from "../components/Header.svelte";
  import Features from "../components/Features.svelte";

  export let data;
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
  <Features {data} />
</Section>
