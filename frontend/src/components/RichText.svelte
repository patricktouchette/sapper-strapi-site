<script>
  import marked from "marked";
  import api from "../routes/_api";

  export let content;
</script>

<style>
  .rich-text :global(ul) {
    margin-left: 2rem;
  }
</style>

<div class="rich-text">
  {@html marked(content, { baseUrl: api })}
</div>
