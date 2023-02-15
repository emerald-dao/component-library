<script type="ts">
	import { fly } from 'svelte/transition';
	import type { User } from '$lib/models/user.interface';
	import type { NavElement } from '$lib/models/navElement.interface';
	import { navigating, page } from '$app/stores';
	import Hamburger from './Hamburger.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import Icon from '@iconify/svelte';
	import { FlowConnect } from '$lib/index';
	import type { Writable } from 'svelte/store';
	import Avatar from '../Avatar/Avatar.svelte';

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
	export let avatarDropDownNavigation: NavElement[] = [];
	export let network: 'testnet' | 'mainnet' | 'emulator' | undefined;
	export let transactionInProgress: boolean;
</script>

<header class:sticky>
	<div class="container">
		<a href="/" style="text-decoration: none">
			<slot name="logo">
				<div class="row-3 align-center">
					<img style={'width: 3rem'} src="/ec-logo.png" alt="Emerald DAO Logo" />
					<span
						class="w-medium"
						style="text-decoration: none !important; color: var(--clr-heading-main); font-family: var(--font-heading); font-size: var(--font-size-4);"
					>
						Emerald City
					</span>
				</div>
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
		<div class="row-4 align-center">
			<a
				class="center"
				href="https://discord.com/invite/emeraldcity"
				target="_blank"
				rel="noreferrer"
			>
				<Icon icon="tabler:brand-discord" color="var(--clr-text-main)" />
			</a>
			<ThemeToggle {themeStore} />
			<slot name="commands" />
			{#if !user?.addr}
				<FlowConnect {logIn} {unauthenticate} {user} />
			{/if}
			{#if navElements && mobileMenu}
				<div class="hide-on-desktop hamburger-wrapper">
					<Hamburger {open} onClick={hamburgerClick} />
				</div>
			{/if}
			<!-- {#if user?.addr} -->
			<!-- {#await findProfile then profile} -->
			<!-- {#if profile}
							<img class="avatar" src={profile.avatar} alt={`${profile.name} avatar`} />
						{:else} -->
			<Avatar
				navigation={avatarDropDownNavigation}
				{unauthenticate}
				walletAddress={user?.addr}
				{network}
				{transactionInProgress}
			/>
			<!-- {/if} -->
			<!-- {/await} -->
			<!-- {/if} -->
		</div>
	</div>
</header>

<style type="scss">
	header {
		background-color: var(--clr-background-primary);
		z-index: 999;
		border-bottom: 0.1px var(--clr-border-primary) solid;

		.container {
			padding: 0.6rem 0 0.6rem 0;
			z-index: 99;
			display: flex;
			flex-direction: row;
			align-items: center;
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
