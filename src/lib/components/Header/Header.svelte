<script type="ts">
	import { fly } from 'svelte/transition';
	import type { User } from '$lib/models/user.interface';
	import type { NavElement } from '$lib/models/navElement.interface';
	import { navigating } from '$app/stores';
	import Hamburger from './Hamburger.svelte';
	import type { Writable } from 'svelte/store';
	import Avatar from '../Avatar/Avatar.svelte';
	import FlowConnect from '../FlowConnect/FlowConnect.svelte';
	import CommandIcons from '../Footer/CommandIcons.svelte';
	import MainNavElements from './MainNavElements.svelte';
	import Logo from '../Logo/Logo.svelte';
	import type { Profile } from '../UserProfileLabel/profile.interface';

	export let navElements: NavElement[] = [];
	export let avatarDropDownNavigation: NavElement[] = [];

	export let user: User | null;
	export let profile: Profile | null;

	export let logIn: () => void;
	export let unauthenticate: () => void;

	export let mobileMenu = true;
	export let sticky = true;

	export let network: 'testnet' | 'mainnet' | 'emulator' | undefined;

	export let transactionInProgress: boolean;

	export let logoHref = '/';
	export let logoUrl: string = '/ec-logo.png';
	export let logoText: string = 'Emerald City';

	export let notificationsNumber: number = 0;

	export let width: 'small' | 'medium' | 'large' | 'full' = 'medium';

	let screenWidth: number;
	let isMobileMenuOpen = false;

	let hamburgerClick = () => {
		isMobileMenuOpen = !isMobileMenuOpen;

		if (isMobileMenuOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}
	};

	let onPageChange = () => {
		isMobileMenuOpen = false;
		document.body.style.overflowY = 'scroll';
	};

	$: if ($navigating) onPageChange();
</script>

<header class:sticky>
	<div class={`container-${width} main-container`}>
		<a href={logoHref} style="text-decoration: none">
			<slot name="logo">
				<Logo imageSrc={logoUrl} text={logoText} hideTextOnMobile={true} />
			</slot>
		</a>
		{#if isMobileMenuOpen && mobileMenu}
			<nav class="hide-on-desktop-flex" transition:fly={{ x: -20, duration: 500 }}>
				{#if navElements.length > 0}
					<MainNavElements {navElements} />
				{/if}
				<CommandIcons>
					<slot name="commands" />
				</CommandIcons>
			</nav>
		{/if}
		{#if navElements.length > 0}
			<nav class="hide-on-mobile-flex">
				<MainNavElements {navElements} />
			</nav>
		{/if}
		<div class="right-wrapper">
			<div class="hide-on-mobile">
				<CommandIcons>
					<slot name="commands" />
				</CommandIcons>
			</div>
			{#if user?.addr && profile}
				<Avatar
					navigation={avatarDropDownNavigation}
					{unauthenticate}
					{network}
					{transactionInProgress}
					{notificationsNumber}
					{profile}
				/>
			{/if}
			{#if !user?.addr}
				<FlowConnect
					{logIn}
					{unauthenticate}
					{user}
					buttonSize={screenWidth > 600 ? 'small' : 'x-small'}
				/>
			{/if}
			{#if navElements && mobileMenu}
				<div class="hide-on-desktop hamburger-wrapper">
					<Hamburger open={isMobileMenuOpen} onClick={hamburgerClick} />
				</div>
			{/if}
		</div>
	</div>
</header>

<svelte:window bind:innerWidth={screenWidth} />

<style type="scss">
	header {
		background-color: var(--clr-background-primary);
		z-index: 999;
		border-bottom: 0.1px var(--clr-border-primary) solid;

		.main-container {
			padding: 0.6rem 0 0.6rem 0;
			z-index: 99;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

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
				flex-direction: column;
				gap: var(--space-14);

				@include mq(medium) {
					position: relative;
					width: auto;
					height: auto;
					background-color: transparent;
					gap: 0;
				}
			}

			.right-wrapper {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: var(--space-1);

				@include mq(medium) {
					gap: var(--space-5);
				}

				.hamburger-wrapper {
					z-index: 999;
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
