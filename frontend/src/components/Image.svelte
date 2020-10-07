<script>
  import api from "../routes/_api.js";
  export let image;
  export let alt = null;
  export let caption = null;
  export let maxWidth = "1000px";
  // The maxWidth prop lets you specify the
  // maximum size of the image within your layout
  // If the image container has a max-width of 400px
  // then define sizes="(max-width: 400px) 100vw, 400px"

  const { alternativeText } = image;

  $: source = () => {
    // Images with multiple sizes (.jpg)
    if (image.formats) {
      return `${api}${image.formats.medium.url}`;
    }

    // Simple images (.svg)
    return `${api}${image.url}`;
  };

  $: srcset = () => {
    if (image.formats) {
      const { formats } = image;

      // Create srcset with the different image formats
      const sourceSet = Object.values(formats)
        .sort((a, b) => a.width - b.width)
        .map(({ url, width }) => {
          const src = `${api}${url} ${width}w`;
          return src;
        })
        .join(",");

      return sourceSet;
    }

    // Simple images (.svg) without srcset
    return "";
  };

  $: sizes = `(max-width: ${maxWidth}) 100vw, ${maxWidth}`;
</script>

<style>
  figure {
    flex-grow: 1;
    height: auto;
    display: flex;
    max-width: 100%;
    max-height: 100%;
    /* box-shadow: var(--box-shadow); */
  }

  img {
    flex-grow: 1;
    display: block;
    margin: 0 auto;
    width: 100%;
    height: auto;
    max-width: 1000px;
    max-height: 100%;
    object-fit: cover;
    object-position: center;
  }
</style>

{#if image}
  <figure>
    <img
      src={source()}
      alt={alt ? alt : alternativeText}
      srcset={srcset()}
      {sizes} />

    {#if caption}
      <figcaption>{caption}</figcaption>
    {/if}
  </figure>
{/if}
