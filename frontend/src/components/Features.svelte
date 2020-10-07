<script>
  import Feature from "./Feature.svelte";

  export let data;
</script>

<style>
  .features {
    display: grid;
    grid-gap: 3rem;
    max-width: 1440px;
    margin: 0 auto;
  }
</style>

<div class="features">
  {#each data as feature}
    <Feature title={feature.title} image={feature.image} alt={feature.alt}>
      {feature.description}
    </Feature>
  {/each}
</div>

<!-- <div class="features">
  <Feature
    title="Grow Together"
    image="./images/illustration-grow-together.svg"
    alt="your users">
    Generate meaningful discussions with your audience and build a strong, loyal
    community. Think of the insightful conversations you miss out on with a
    feedback form.
  </Feature>

  <Feature
    title="Flowing Conversations"
    image="./images/illustration-flowing-conversation.svg"
    alt="people talking at a table">
    You wouldn't paginate a conversation in real life, so why do it online? Our
    threads have just-in-time loading for a more natural flow.
  </Feature>

  <Feature
    title="Your Users"
    image="./images/illustration-your-users.svg"
    alt="your users">
    It takes no time at all to integrate Huddle with your app's authentication
    solution. This means, once signed in to your app, your users can start
    chatting immediately.
  </Feature>
</div> -->
