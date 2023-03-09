<script type="ts">
	import type { NavElement } from '../../models/navElement.interface';
	import type { EmeraldTool } from '../../models/emeraldTool.interface';
	import type { SocialElement } from '../../models/socialElement.interface';
	import Icon from '@iconify/svelte';

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
			name: 'Geeft',
			url: 'https://geeft.ecdao.org/'
		},
		{
			name: 'Drizzle',
			url: 'https://www.drizzle33.app/'
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
			name: 'GitHub',
			url: 'https://github.com/emerald-dao',
			icon: 'tabler:brand-discord'
		}
	];
	export let logoHref = '/';
	export let logoUrl: string = '/ec-logo.png';
	export let logoText: string = 'Emerald City';
</script>

<footer class="section">
	<div class="container">
		<a href={logoHref}>
			<slot name="logo">
				<div class="row-3 align-center">
					<img class="logo" src={logoUrl} alt="Emerald DAO Logo" />
					<span
						class="w-medium"
						style="text-decoration: none !important; color: var(--clr-heading-main); font-family: var(--font-heading); font-size: var(--font-size-4);"
					>
						{logoText}
					</span>
				</div>
			</slot>
		</a>
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
			<h5 class="text-small">Emerald City Tools</h5>
			<ul>
				{#each emeraldTools as tool}
					<a class="header-link" href={tool.url} target="_blank" rel="noreferrer">
						<li>{tool.name}</li>
					</a>
				{/each}
			</ul>
		</nav>
		<div class="socials">
			{#each socials as social}
				<a href={social.url} target="_blank" rel="noreferrer" class="nav-link">
					<Icon icon={social.icon} width="1.2rem" href={social.url} />
				</a>
			{/each}
		</div>
	</div>
</footer>

<style type="scss">
	footer {
		background-color: var(--clr-background-secondary);

		.container {
			@include mq(medium) {
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				grid-template-rows: repeat(2, auto);
				column-gap: 7rem;
				row-gap: 2rem;
			}

			.logo {
				width: 3rem;
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

			.socials {
				display: flex;
				flex-direction: row;
				gap: 1rem;

				@include mq(medium) {
					justify-content: flex-end;
					grid-area: 2 / 1 / 3 / 5;
				}
			}

			a {
				text-decoration: none;
			}
		}
	}
</style>
