<script type="ts">
	import type { NavElement } from '../../models/navElement.interface';
	import type { EmeraldTool } from '../../models/emeraldTool.interface';
	import type { SocialElement } from '../../models/socialElement.interface';
	import Icon from '@iconify/svelte';
	import Button from '../Button/Button.svelte';
	import Logo from '../Logo/Logo.svelte';

	export let navElements: NavElement[] | undefined = undefined;
	export let emeraldTools: EmeraldTool[] = [
		{
			name: 'Emerald Academy',
			url: 'https://academy.ecdao.org/'
		},
		{
			name: 'Touchstone',
			url: 'https://touchstone.city/'
		},
		{
			name: 'FLOAT',
			url: 'https://floats.city/'
		},
		{
			name: 'Emerald Bot',
			url: 'https://bot.ecdao.org/'
		},
		{
			name: 'Link',
			url: 'https://link.ecdao.org/'
		},
		{
			name: 'Run',
			url: 'https://run.ecdao.org/'
		}
	];
	export let thirtyThreeLabs: EmeraldTool[] = [
		{
			name: 'Drizzle',
			url: 'https://drizzle33.app/'
		},
		{
			name: 'Flowview',
			url: 'https://flowview.app/'
		},
		{
			name: 'Bayou',
			url: 'https://bayou33.app/'
		}
	];
	export let socials: SocialElement[] = [
		{
			name: 'Twitter',
			url: 'https://twitter.com/emerald_dao',
			icon: 'tabler:brand-twitter'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/emerald-dao',
			icon: 'tabler:brand-github'
		},
		{
			name: 'Discord',
			url: 'https://discord.gg/emerald-city-906264258189332541',
			icon: 'tabler:brand-discord'
		},
		{
			name: 'Website',
			url: 'https://ecdao.org',
			icon: 'tabler:brand-world'
		}
	];
	export let logoHref = '/';
	export let logoUrl: string = '/ec-logo.png';
	export let logoText: string = 'Emerald City';
</script>

<footer class="section">
	<div class="container container-small">
		<div class="main-wrapper">
			<div class="logo-wrapper column-4">
				<a href={logoHref}>
					<slot name="logo">
						<Logo imageSrc={logoUrl} text={logoText} />
					</slot>
				</a>
				<p class="small">
					Built by Emerald City DAO.<br /><a
						class="w-medium"
						href="https://discord.gg/emerald-city-906264258189332541"
						target="_blank">Join us</a
					> on our mission to build the future #onFlow
				</p>
			</div>
			<div class="navs-wrapper">
				<nav>
					{#if navElements}
						<h5 class="text-small">Pages</h5>
						<ul>
							{#each navElements as navElement}
								<a class="header-link" href={navElement.url}>
									<li>{navElement.name}</li>
								</a>
							{/each}
						</ul>
					{/if}
				</nav>
				<nav>
					<h5 class="text-small">Emerald City Tools</h5>
					<ul>
						{#each emeraldTools as tool}
							<a class="header-link" href={tool.url} target="_blank" rel="noreferrer">
								<li>{tool.name}</li>
							</a>
						{/each}
					</ul>
				</nav>
				<nav>
					<h5 class="text-small">33 Labs Tools</h5>
					<ul>
						{#each thirtyThreeLabs as tool}
							<a class="header-link" href={tool.url} target="_blank" rel="noreferrer">
								<li>{tool.name}</li>
							</a>
						{/each}
					</ul>
				</nav>
			</div>
		</div>
		<div class="socials">
			<div class="row-5 align-center">
				{#each socials as social}
					<a href={social.url} target="_blank" rel="noreferrer" class="nav-link">
						<Icon icon={social.icon} width="1.2rem" href={social.url} />
					</a>
				{/each}
			</div>
			<Button
				color="neutral"
				type="ghost"
				size="x-small"
				width="extended"
				href="https://discord.gg/emerald-city-906264258189332541"
			>
				Join the community
				<Icon icon="tabler:brand-discord" />
			</Button>
		</div>
	</div>
</footer>

<style type="scss">
	footer {
		border-top: 0.5px var(--clr-border-primary) solid;

		.container {
			@include mq(medium) {
				display: grid;
				grid-template-rows: repeat(2, auto);
				row-gap: var(--space-2);
			}

			.main-wrapper {
				display: flex;
				flex-direction: column;
				gap: var(--space-10);

				@include mq(medium) {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}

				.logo-wrapper {
					max-width: 264px;
				}

				.navs-wrapper {
					@include mq(medium) {
						display: flex;
						flex-direction: row;
						gap: var(--space-15);
					}

					nav {
						margin-bottom: 3rem;

						@include mq(medium) {
							margin-bottom: none;
						}

						h5 {
							color: var(--clr-heading-main);
						}

						ul {
							list-style: none;
							padding: 0;
							text-align: left;

							li {
								margin-top: 1rem;
							}
						}
					}
				}
			}

			.socials {
				display: flex;
				flex-direction: column;
				gap: var(--space-4);
				border-top: 1px var(--clr-neutral-badge) solid;
				padding-top: var(--space-10);

				@include mq(medium) {
					flex-direction: row;
					justify-content: space-between;
				}
			}

			a {
				text-decoration: none;
			}
		}
	}
</style>
