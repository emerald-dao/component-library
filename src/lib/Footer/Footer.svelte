<script type="ts">
	import type { NavElement } from '../../models/navElement.interface';
	import type { EmeraldTool } from '../../models/emeraldTool.interface';
	import type { SocialElement } from '../../models/socialElement.interface';

	import { Container, Column } from '@mateoroldos/svelte.bones';
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
			icon: 'ion:logo-twitter'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/emerald-dao',
			icon: 'ion:logo-github'
		}
	];
</script>

<footer>
	<Container>
		<Column align="flex-start" gap="small">
			<a href="/">
				<slot name="logo">
					<img style={'width: 3rem'} src="/ec-logo.png" alt="Emerald DAO Logo" />
				</slot>
			</a>
			<nav>
				<div class="left-column">
					{#if navElements}
						<div>
							<h5>Pages</h5>
							<ul>
								{#each navElements as navElement}
									<a href={navElement.url}>
										<li>{navElement.name}</li>
									</a>
								{/each}
							</ul>
						</div>
					{/if}
					<div>
						<h5>Emerald City Tools</h5>
						<ul>
							{#each emeraldTools as tool}
								<a href={tool.url} target="_blank">
									<li>{tool.name}</li>
								</a>
							{/each}
						</ul>
					</div>
				</div>
				<div class="right-column">
					<div>
						<h5>Follow us</h5>
						<div>
							{#each socials as social}
								<a href="social.url">
									<Icon icon={social.icon} width="1.6rem" color="var(--clr-font-text)" />
								</a>
							{/each}
						</div>
					</div>
					<div>
						<h5>Join us</h5>
						<a href="https://discord.com/invite/emeraldcity" target="_blank">Emerald City DAO</a>
					</div>
				</div>
			</nav>
		</Column>
	</Container>
</footer>
<div class="signature">
	<p>
		Built on <img src="/flow-logo.png" alt="Flow logo" /> Flow by
		<img src="/ec-logo.png" alt="Emerald logo" /> Emerald City DAO
	</p>
</div>

<style type="scss">
	@use '../../styles/utils' as *;

	footer {
		padding-block: 3.8rem;
		border-top: 2px var(--clr-primary-main-t8) solid;

		nav {
			width: 100%;

			@include mq(small) {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}

			.left-column {
				@include mq(small) {
					display: flex;
					gap: 7rem;
					flex-direction: row;
					align-items: flex-start;
				}

				h5 {
					@include mq(small) {
						margin-top: 0;
					}
				}
			}

			.right-column > div {
				@include mq(small) {
					display: flex;
					flex-direction: column;
					align-items: flex-end;
				}
			}

			.right-column > :first-child {
				h5 {
					@include mq(small) {
						margin-top: 0;
					}
				}
			}

			h5 {
				font-size: var(--fs-300);
				text-transform: uppercase;
				letter-spacing: 0.1em;
				color: var(--clr-primary-main);
				margin-top: 4rem;
			}

			ul {
				list-style: none;
				padding: 0;
				text-align: left;

				li {
					margin-top: 1rem;
				}
			}

			a {
				color: var(--clr-font-text);
				text-decoration: none;
				font-size: var(--fs-300);
				font-family: var(--ff-mono);
			}
		}
	}

	.signature {
		padding-block: 1rem;
		background-color: var(--clr-primary-main-t8);
		border-top: 2px var(--clr-primary-main-t7) solid;

		p {
			font-size: var(--fs-300);
			font-family: var(--ff-mono);
			text-align: center;

			img {
				width: 1.2em;
				height: 1.2em;
				display: inline;
				margin-right: -0.3rem;
				margin-bottom: -0.25rem;
			}
		}
	}
</style>
