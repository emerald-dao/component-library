<script type="ts">
  import Icon from '@iconify/svelte'
  import {
    Container,
    Row,
    Column
    // Logo,
    // Stack,
    // Socials,
    // EmeraldTools,
    // Button,
  } from "@mateoroldos/svelte.bones";

  interface NavElement {
    name: string,
    url: string,
    prefetch: boolean,
  }

  interface EmeraldTool {
    name: string,
    url: string,
  }

  interface SocialElement {
    name: string,
    url: string,
    icon: string,
  }

  export let navElements: NavElement[] = [
    {
      name: 'hola',
      url: '/hola',
      prefetch: true,
    },
    {
      name: 'chau',
      url: '/chau',
      prefetch: true,
    },
  ];
  export let emeraldTools: EmeraldTool[];
  export let socials: SocialElement[] = [{
      name: 'hola',
      url: '/hola',
      icon: 'ion:logo-facebook',
    }];
</script>

<footer>
  <Container>
    <Column>
      <!-- <Logo /> -->
      <nav>
        <div class="left-column">
          <Column>
            <h5>Pages</h5>
            <Row>
              <ul>
                {#each navElements as navElement }
                  <a href={navElement.url}>
                    <li>{navElement.name}</li>
                  </a>
                {/each}
              </ul>
            </Row>
            <!-- <Navigation navElements={navElements}/> -->
          </Column>
          <Column>
            <h5>Emerald City Tools</h5>
            <!-- <EmeraldTools emeraldTools={emeraldTools} /> -->
          </Column>
        </div>
        <div class="right-column">
          <div class="socials">
            <h5>Follow us</h5>
            <Row>
              {#each socials as social}
                <a href="social.url">
                  <Icon icon={social.icon}/>
                </a>
              {/each}
            </Row>
            <!-- <Socials socials={socials}/> -->
          </div>
          <div class="dao-invite">
            <h5>Join us</h5>
            <!-- <Button
              class="small"
              leftIcon="logo-discord"
              href="https://discord.com/invite/emeraldcity"
              target="_blank">Emerald City DAO</Button> -->
          </div>
        </div>
      </nav>
    </Column>
  </Container>
</footer>
<div class="signature">
  <span
    >Built on <img src="/flow-logo.png" alt="Flow logo" /> Flow by
    <img src="/ec-logo.png" alt="Emerald logo" /> Emerald City DAO</span>
</div>

<style type="scss">
  @use "../../styles/utils" as *;

  footer {
    padding-block: 2.8rem;
    background-color: var(--clr-secondary-soft-t8);
    border-top: 2px var(--clr-primary-main-t8) solid;

    nav {
      flex-direction: column;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 3em;
      width: 100%;

      @include mq(medium) {
        padding-bottom: 10px;
        flex-direction: row;
        align-items: flex-start;
      }

      .left-column {
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 3em;

        @include mq(small) {
          gap: 7em;
          flex-direction: row;
          align-items: flex-start;
        }
      }

      .right-column {
        display: flex;
        flex-direction: column;
        flex-direction: flex-start;

        @include mq(medium) {
          align-items: flex-end;
        }

        .socials {
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
          align-items: inherit;
        }

        .dao-invite {
          display: flex;
          flex-direction: column;
          align-items: inherit;
        }
      }

      h5 {
        font-size: var(--fs-300);
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 1.7em;
        margin-top: 0;
        letter-spacing: 0.1em;
        color: var(--clr-primary-main);
        font-family: var(--ff-mono);
      }
    }
  }

  .signature {
    padding-block: 1rem;
    background-color: var(--clr-primary-soft-t7);
    border-top: 2px var(--clr-primary-main-t8) solid;

    span {
      font-size: var(--fs-300);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-family: var(--ff-mono);
      text-align: center;
    }
    img {
      width: 1.2em;
      height: 1.2em;
      display: inline;
      margin-left: 0.4em;
      margin-right: 0.3em;
    }
  }
</style>