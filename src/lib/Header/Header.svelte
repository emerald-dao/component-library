<script type="ts">
	import { fly } from 'svelte/transition';
	import type { User } from '../../models/user.interface';
	import type { NavElement } from '../../models/navElement.interface';

	import { navigating } from '$app/stores';
	import { Container, Row } from '@mateoroldos/svelte.bones';
	import Hamburger from './Hamburger.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import Icon from '@iconify/svelte';
	import { FlowConnect } from '$lib/index';

	// let findProfile = getFindProfile($user?.addr);

	// Mobile menu functions
	let open = false;
	export let hamburgerClick = () => {
		open = !open;

		if (open) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}
	};
	let onPageChange = () => {
		open = false;
		document.body.style.overflowY = 'scroll';
	};
	$: if ($navigating) onPageChange();

	// Props
	export let navElements: NavElement[] | undefined = undefined;
	export let themeStore: 'dark' | 'light';
	export let logIn: () => void;
	export let unauthenticate: () => void;
	export let getFindProfile: (address: string) => Promise<string>;
	export let user: User;
</script>

<header>
	<Container width="full">
		<Row justify="space-between">
			<a href="/">
				<slot name="logo">
					<img style={'width: 3rem'} src="/ec-logo.png" alt="Emerald DAO Logo" />
				</slot>
			</a>
			{#if open && navElements}
				<nav class="hide-on-large" transition:fly={{ x: -20, duration: 500 }}>
					<ul>
						{#each navElements as navElement}
							<a href={navElement.url}>
								<li>{navElement.name}</li>
							</a>
						{/each}
					</ul>
				</nav>
			{/if}
			{#if navElements}
				<nav class="hide-on-mobile">
					<ul>
						{#each navElements as navElement}
							<a href={navElement.url}>
								<li>{navElement.name}</li>
							</a>
						{/each}
					</ul>
				</nav>
			{/if}
			<Row gap={0.5}>
				<a class="discord-link" href="https://discord.com/invite/emeraldcity" target="_blank">
					<Icon icon="akar-icons:discord-fill" />
				</a>
				{#if navElements}
					<ThemeToggle {themeStore} />
				{/if}
				<FlowConnect {logIn} {unauthenticate} {getFindProfile} {user} />
				<div class="hide-on-large">
					<Hamburger {open} onClick={hamburgerClick} />
				</div>

				{#if user?.loggedIn}
					<!-- {#await findProfile then profile} -->
					<!-- {#if profile}
							<img class="avatar" src={profile.avatar} alt={`${profile.name} avatar`} />
						{:else} -->
					<img
						class="avatar"
						src="https://cdn-icons-png.flaticon.com/512/168/168734.png"
						alt="default avatar"
					/>
					<!-- {/if} -->
					<!-- {/await} -->
				{/if}
			</Row>
		</Row>
	</Container>
</header>

<style type="scss">
	@use '../../styles/utils' as *;

	header {
		padding: 0.6rem 0 0.6rem 0;
		background-color: var(--clr-primary-main-t9);
		border-bottom: 2px var(--clr-primary-main-t7) solid;

		@include mq(medium) {
			z-index: 9999;
			position: sticky;
			backdrop-filter: blur(20px);
			width: 100%;
			top: 0;
		}

		.hide-on-mobile {
			display: none;

			@include mq(medium) {
				display: flex;
			}
		}

		.hide-on-large {
			display: flex;

			@include mq(medium) {
				display: none;
			}
		}

		.discord-link {
			display: flex;
			align-items: center;
		}

		nav {
			display: flex;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: var(--clr-primary-main);
			align-items: center;
			justify-content: center;

			@include mq(medium) {
				position: relative;
				width: auto;
				height: auto;
				background-color: transparent;
			}

			ul {
				display: flex;
				flex-direction: column;
				list-style: none;
				gap: 4rem;

				@include mq(medium) {
					flex-direction: row;
				}

				a {
					color: var(--clr-font-text);
					text-decoration: none;
					font-family: var(--ff-mono);
					font-size: var(--fs-400);

					@include mq(medium) {
						font-size: var(--fs-300);
					}
				}
			}
		}

		.avatar {
			height: 38px;
			width: 38px;
			border-radius: 0.6rem;
			border: 2px var(--clr-primary-main) solid;
		}
	}
</style>
