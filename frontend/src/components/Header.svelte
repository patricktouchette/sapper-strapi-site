<script>
  import Nav from "./Nav.svelte";
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    margin-top: 4rem;

    text-align: left;
    justify-content: center;
    align-items: center;
  }

  .header-text .btn {
    margin-top: 1rem;
  }

  @media only screen and (max-width: 1250px) {
    .container {
      grid-template-columns: 1fr;
      text-align: center;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    button {
      margin: 0 auto;
    }

    .header-img {
      max-width: 500px;
      margin: 0 auto;
    }
  }
</style>

<header>
  <Nav />

  <div class="container">
    <div class="header-text">
      <h1>Build The Community Your Fans Will Love</h1>

      <p>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button class="btn btn-primary">Get Started For Free</button>
    </div>

    <div class="header-img">
      <img src="./images/illustration-mockups.svg" alt="illustration mockup" />
    </div>
  </div>
</header>
