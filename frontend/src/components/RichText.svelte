<script>
  import marked from "marked";
  import api from "../routes/_api";

  export let content;
</script>

<div class="rich-text">
  {@html marked(content, { baseUrl: api })}
</div>
