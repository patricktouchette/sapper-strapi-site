<script>
  import Image from "./Image.svelte";
  export let title;
  export let image;
  export let alt;
</script>

<style>
  .feature-block {
    box-shadow: var(--box-shadow);
    padding: 4rem;
    border-radius: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    align-items: center;
    grid-auto-flow: dense;
  }

  .feature-block:nth-child(even) .feature-block-image {
    grid-column-end: -1;
  }

  .feature-block p {
    color: var(--gray);
  }

  @media only screen and (max-width: 1250px) {
    .feature-block {
      grid-template-columns: 1fr;
      text-align: center;
      padding: 1rem;
    }

    .feature-block-image {
      max-width: 400px;
      margin: 0 auto;
    }
  }
</style>

<div class="feature-block">
  <div class="feature-block-image">
    <Image {image} {alt} maxWidth="400px" />
  </div>

  <div class="feature-block-text">
    <h2>{title}</h2>

    <p>
      <slot />
    </p>
  </div>
</div>
