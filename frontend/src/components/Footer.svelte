<script>
  import Social from "./Social.svelte";
  import Logo from "./icons/Logo.svelte";

  const links = [
    [
      { name: "About", url: "about-us" },
      { name: "What We Do", url: "what-we-do" },
      { name: "FAQ", url: "faq" },
    ],
    [
      { name: "Career", url: "career" },
      { name: "Blog", url: "blog" },
      { name: "Contact Us", url: "contact-us" },
    ],
  ];
</script>

<style>
  footer {
    padding-top: 10rem;
    padding-bottom: 2rem;
  }

  .logo {
    margin-bottom: 3rem;
  }

  .logo :global(path) {
    fill: white;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .info {
    display: grid;
    grid-template-columns: 1fr 10fr;
    grid-gap: 1rem;
    align-items: start;
    flex: 2;
    margin-right: 5rem;
  }

  .info p {
    margin-bottom: 0;
  }

  .info img {
    padding-top: 0.2rem;
    display: inline;
    max-width: 18px;
    min-width: 18px;
  }

  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-between;
    align-items: flex-start;
  }

  .links ul {
    list-style: none;
    margin-right: 2rem;
    flex: 1;
  }

  .links li {
    margin-bottom: 1rem;
  }

  footer .copyright {
    margin-top: 4rem;
  }

  footer .copyright,
  footer .attribution,
  footer .attribution a {
    text-align: center;
    color: var(--gray);
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 1250px) {
    .logo {
      margin-bottom: 2rem;
    }

    .links {
      display: block;
    }

    .links > * {
      margin: 0 auto 4rem auto;
    }

    .info {
      max-width: 500px;
      margin-left: 0;
    }

    .links > ul:nth-child(2) {
      margin-bottom: 0;
    }

    footer .copyright {
      padding: 0;
      margin-top: 1rem;
    }

    footer .copyright,
    footer .attribution,
    footer .attribution a {
      font-size: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    footer {
      padding-top: 6rem;
    }
  }

  @media (max-width: 375px) {
    .logo :global(svg) {
      width: 60%;
    }
  }
</style>

<footer>
  <div class="logo">
    <Logo />
  </div>

  <div class="links">
    <div class="info">
      <div><img src="./images/icon-location.svg" alt="location icon" /></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div><img src="./images/icon-phone.svg" alt="phone icon" /></div>
      <p>+1-543-123-4567</p>
      <div><img src="./images/icon-email.svg" alt="email icon" /></div>
      <p>example@huddle.com</p>
    </div>

    {#each links as linkList}
      <ul>
        {#each linkList as link}
          <li><a href={link.url}>{link.name}</a></li>
        {/each}
      </ul>
    {/each}

    <Social />
  </div>

  <p class="copyright">
    &copy; Copyright
    {new Date().getFullYear()}
    Huddle. All rights reserved.
  </p>

  <p class="attribution">
    Challenge by
    <a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank">Frontend Mentor</a>. Coded by
    <a href="https://github.com/patricktouchette/frontendmentor">Patrick
      Touchette</a>.
  </p>
</footer>
