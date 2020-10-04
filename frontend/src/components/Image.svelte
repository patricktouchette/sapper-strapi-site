<script>
  import api from "../routes/_api.js";
  export let image;
  export let alt = null;
  export let caption = null;
  export let size = null;

  // TO DO: FIX THIS so that it works on page changes

  const { alternativeText } = image;

  // Simple images (.svg)
  let src = `${api}${image.url}`;
  let srcset = "";
  console.log("src", src);

  // Images with multiple sizes (.jpg)
  if (image.formats) {
    const { formats } = image;
    src = size ? `${api}${formats[size].url}` : `${api}${formats.medium.url}`;

    if (!size) {
      srcset = Object.values(formats)
        .map(({ url, width }) => {
          const src = `${api}${url} ${width}w`;
          return src;
        })
        .join(",");
    }
  }

  // ORGINAL;
  // const { formats, alternativeText } = image;

  // const src = size
  //   ? `${api}${formats[size].url}`
  //   : `${api}${formats.medium.url}`;

  // let srcset = "";
  // if (!size) {
  //   srcset = Object.values(formats)
  //     .map(({ url, width }) => {
  //       const src = `${api}${url} ${width}w`;
  //       return src;
  //     })
  //     .join(",");
  // }
</script>

<style>
  figure {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
    max-height: 100%;
    object-fit: cover;
  }
</style>

{#if image}
  <figure>
    <img
      {src}
      alt={alt ? alt : alternativeText}
      {srcset}
      size="(max-width: 1000px) 100vw, 1000px" />

    {#if caption}
      <figcaption>{caption}</figcaption>
    {/if}
  </figure>
{/if}
