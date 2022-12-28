<script type="ts">
	import { fly } from 'svelte/transition';
	import type { User } from '../../models/user.interface';
	import type { NavElement } from '../../models/navElement.interface';

	import { navigating, page } from '$app/stores';
	import { Row } from '@mateoroldos/svelte.bones';
	import Hamburger from './Hamburger.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import Icon from '@iconify/svelte';
	import { FlowConnect } from '$lib/index';
	import type { Writable } from 'svelte/store';

	// let findProfile = getFindProfile($user?.addr);

	// Mobile menu functions
	let open = false;
	let hamburgerClick = () => {
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
	export let themeStore: Writable<'dark' | 'light'>;
	export let logIn: () => void;
	export let unauthenticate: () => void;
	// export let getFindProfile: (address: string) => Promise<string>;
	export let user: User | null;
	export let mobileMenu = true;
	export let sticky = true;
</script>

<header class:sticky class="container-full">
	<a href="/">
		<slot name="logo">
			<img style={'width: 3rem'} src="/ec-logo.png" alt="Emerald DAO Logo" />
		</slot>
	</a>
	{#if open && navElements && mobileMenu}
		<nav class="hide-on-desktop-flex" transition:fly={{ x: -20, duration: 500 }}>
			<ul>
				{#each navElements as navElement}
					<a class="header-link" href={navElement.url}>
						<li>{navElement.name}</li>
					</a>
				{/each}
			</ul>
		</nav>
	{/if}
	{#if navElements}
		<nav class="hide-on-mobile-flex">
			<ul>
				{#each navElements as navElement}
					<a
						class="header-link"
						href={navElement.url}
						class:active={navElement.url === $page.url.pathname}
					>
						<li>{navElement.name}</li>
					</a>
				{/each}
			</ul>
		</nav>
	{/if}
	<Row gap={0.5}>
		<a
			class="center"
			href="https://discord.com/invite/emeraldcity"
			target="_blank"
			rel="noreferrer"
		>
			<Icon icon="tabler:brand-discord" color="var(--clr-text-main)" />
		</a>
		<ThemeToggle {themeStore} />
		<FlowConnect {logIn} {unauthenticate} {user} />
		{#if navElements && mobileMenu}
			<div class="hide-on-desktop hamburger-wrapper">
				<Hamburger {open} onClick={hamburgerClick} />
			</div>
		{/if}
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
</header>

<style type="scss">
	header {
		padding: 0.6rem 0 0.6rem 0;
		background-color: var(--clr-background-primary);
		z-index: 99;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		.hamburger-wrapper {
			z-index: 999;
		}

		nav {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: var(--clr-surface-primary);
			align-items: center;
			justify-content: center;
			z-index: 999;

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
			}
		}

		.avatar {
			height: 38px;
			width: 38px;
			border-radius: 0.6rem;
			border: 2px var(--clr-primary-main) solid;
		}
	}

	.sticky {
		@include mq(medium) {
			position: sticky;
			backdrop-filter: blur(20px);
			top: 0;
		}
	}
</style>
