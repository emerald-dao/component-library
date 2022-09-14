<script type="ts">
	import { fly } from 'svelte/transition';
	// import { navigating, page } from '$app/stores';
	import { Container, Row } from '@mateoroldos/svelte.bones';
	import Hamburger from './Hamburger.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import Icon from '@iconify/svelte';
	import type { Writable } from 'svelte/store';
	import { FlowConnect } from '../index';

	// import {
	//   Container,
	//   Logo,
	//   ThemeToggle,
	//   AnimatedHamburger,
	//   FlowConnect,
	//   Stack,
	//   Select,
	//   DiscordInvite,
	// } from "$atoms";
	// import Navigation from "$components/modules/Navigation.svelte";
	// import { t, locales, locale } from "$lib/guide/translations";
	// import { goto } from '$app/navigation';
	// import { getFindProfile } from "$flow/utils";
	// import { user } from "$stores/FlowStore";

	// let findProfile = getFindProfile($user?.addr);

	export let hamburgerClick = () => {
		open = !open;

		if (open) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}
	};

	let open = false;
	let onPageChange = () => {
		open = false;
		document.body.style.overflowY = 'scroll';
	};

	// $: if ($navigating) onPageChange();

	interface NavElement {
		name: string;
		url: string;
		prefetch: boolean;
	}

	export let navElements: NavElement[] = [
		{
			name: 'Page 1',
			url: '/page1',
			prefetch: true
		},
		{
			name: 'Page 2',
			url: '/page2',
			prefetch: true
		}
	];

	export let themeStore: 'dark' | 'light';
	export let logIn: () => void;
	export let unauthenticate: () => void;
	export let getFindProfile: () => string;
	// TODO: apply user interface
	export let user: any;
</script>

<header>
	<Container width="full">
		<Row justify="space-between">
			<slot name="logo">
				<img style={'width: 3rem'} src="/ec-logo.png" alt="Emerald DAO Logo" />
			</slot>
			<nav class:hide-on-mobile={!open}>
				<ul>
					{#each navElements as navElement}
						<a href={navElement.url}>
							<li>{navElement.name}</li>
						</a>
					{/each}
				</ul>
			</nav>
			<Row gap="small">
				<a class="discord-link" href="https://discord.com/invite/emeraldcity" target="_blank">
					<Icon icon="akar-icons:discord-fill" />
				</a>
				<ThemeToggle {themeStore} />
				<FlowConnect {logIn} {unauthenticate} {getFindProfile} {user} />
				<div class="hide-on-large">
					<Hamburger {open} onClick={hamburgerClick} />
				</div>

				<!-- {#if $user?.loggedIn}
						{#await findProfile then profile}
							<a href="/my-collections" sveltekit:prefetch>
								{#if profile}
									<img class="avatar" src={profile.avatar} alt={`${profile.name} avatar`} />
								{:else}
									<img
										class="avatar"
										src="https://cdn-icons-png.flaticon.com/512/168/168734.png"
										alt="default avatar"
									/>
								{/if}
							</a>
						{/await}
					{/if} -->
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
			border: 2px var(--clr-accent-main) solid;
			margin-left: 0.4rem;
			transition: 0.4s;
		}

		.avatar:hover {
			box-shadow: var(--clr-accent-main) 4px 4px;
			color: var(--clr-font-text-inverse);
			transform: translateY(-3px);
		}
	}
</style>
