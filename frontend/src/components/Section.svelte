<script>
  export let background = null;
  export let color = null;
  export let border = null;
  export let noPadding = null;
</script>

<style>
  .section {
    background: var(--background);
    color: var(--color);
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 4rem;
  }

  .border {
    border-bottom: 1px solid var(--pale);
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0, 0, 0, 0.5);
  }

  .noPadding {
    padding-top: 0;
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    .container {
      padding: 1.5rem;
    }

    .noPadding {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
</style>

<section
  class="section"
  class:border
  style="--background: {background}; --color: {color}">
  <div class="container" class:noPadding>
    <slot />
  </div>
</section>
