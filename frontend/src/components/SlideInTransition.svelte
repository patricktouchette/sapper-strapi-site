<script>
  // In parent component:
  // import SlideInTransition from "../components/SlideInTransition.svelte";
  // $: currentPage = page.id;

  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  export let page = null;
  let show = false;

  $: {
    console.log("page", page);
    show = false;
    setTimeout(() => (show = true), 10);
  }

  onMount(() => {
    console.log("mounted");
    show = true;
  });
</script>

<style>
  .height-wrapper {
    min-height: 80vh;
  }
  .transition {
    position: relative;
  }
</style>

<div class:height-wrapper={true}>
  {#if show}
    <div class="transition" in:fly={{ x: 300, duration: 500 }}>
      <slot />
    </div>
  {/if}
</div>
