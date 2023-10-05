<script type="ts">
	import { fade, fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.svelte';
	import Dropdown from '../Dropdown/Dropdown.svelte';
	import type { NavElement } from '$lib/models/navElement.interface';
	import FlowConnection from '../FlowConnection/FlowConnection.svelte';
	import AlertNumber from '../AlertNumber/AlertNumber.svelte';
	import type { Profile } from '../UserProfileLabel/profile.interface';

	export let network: 'testnet' | 'mainnet' | 'emulator' | undefined;
	export let transactionInProgress: boolean;
	export let navigation: NavElement[] = [];
	export let unauthenticate: () => void;
	export let notificationsNumber: number = 0;
	export let profile: Profile;

	let walletAddressHover = false;

	const toggleAddressHover = () => {
		walletAddressHover = !walletAddressHover;
	};

	let copied = false;
	const copyToClipboard = () => {
		const app = new CopyToClipboard({
			target: document.getElementById('clipboard') as Element,
			props: { name: profile.address }
		});

		copied = true;

		setTimeout(() => {
			copied = false;
		}, 2000);

		app.$destroy();
	};
</script>

<Dropdown width="250px" rightOffset="-1rem">
	<div slot="parent" class="avatar-wrapper">
		<img class="avatar" src={profile.avatar ?? '/new-avatar.png'} alt="default avatar" />
		<div class="connection-circle pulse" class:clr-tertiary={transactionInProgress} />
		{#if notificationsNumber > 0}
			<div class="notification-number">
				{notificationsNumber}
			</div>
		{/if}
	</div>
	<div slot="dropdown" class="dropdown-wrapper">
		<div class="dropdown-section">
			<p class="small">
				<span class="off">
					Welcome,
					{#if profile.name}
						{profile.name}
					{:else}
						Anonymus User
					{/if}
				</span>
				<span
					class="on address row-1 align-center"
					on:click={copyToClipboard}
					on:keydown
					on:mouseenter={toggleAddressHover}
					on:mouseleave={toggleAddressHover}
				>
					{profile.address}
					{#if walletAddressHover}
						<div transition:fade|local={{ duration: 140 }} class="row align-center">
							{#if copied}
								<div in:fly|local={{ x: 10, duration: 300 }} class="row align-center">
									<Icon icon="tabler:check" color="var(--clr-primary-main)" />
								</div>
							{:else}
								<div in:fly|local={{ x: 10, duration: 300 }} class="row align-center">
									<Icon icon="tabler:copy" color="var(--clr-text-off)" />
								</div>
							{/if}
						</div>
					{/if}
				</span>
			</p>
		</div>
		{#if navigation.length > 0}
			<div class="dropdown-section column-1">
				{#each navigation as nav}
					<a
						data-sveltekit-preload-data="hover"
						class="header-link row-2 align-center"
						href={nav.url}
					>
						{#if nav.icon}
							<Icon icon={nav.icon} />
						{/if}
						{nav.name}
						{#if nav.notifications && nav.notifications > 0}
							<AlertNumber number={nav.notifications} />
						{/if}
					</a>
				{/each}
			</div>
		{/if}
		<div class="dropdown-section">
			<FlowConnection {network} {transactionInProgress} />
		</div>
		<div class="dropdown-section column-1">
			{#if profile.type !== 'find'}
				<a
					class="header-link row-2 align-center"
					href="https://find.xyz"
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon="tabler:user-circle" />
					Create profile
				</a>
			{/if}
			<a
				class="header-link row-2 align-center"
				href="https://discord.com/invite/emeraldcity"
				target="_blank"
				rel="noreferrer"
			>
				<Icon icon="tabler:brand-discord" />
				Ask for help
			</a>
		</div>
		<div class="dropdown-section">
			<a class="disconnect header-link row-2 align-center" href="" on:click={unauthenticate}>
				<Icon icon="tabler:plug-connected-x" />
				Disconnect
			</a>
		</div>
	</div>
</Dropdown>
<div id="clipboard" />

<style type="scss">
	.avatar-wrapper {
		position: relative;
		width: fit-content;

		.connection-circle {
			position: absolute;
			bottom: 0;
			right: 0;
			height: 11px;
			width: 11px;
			border-radius: 50%;
			background-color: var(--clr-primary-main);
			border: 2px var(--clr-background-primary) solid;

			&.clr-tertiary {
				background-color: var(--clr-tertiary-main);
			}
		}

		.avatar {
			height: 38px;
			width: 38px;
			border-radius: 50%;
		}

		.notification-number {
			position: absolute;
			top: -1px;
			right: 0;
			height: 12px;
			width: 12px;
			border-radius: 50%;
			background-color: var(--clr-alert-main);
			color: var(--clr-background-primary);
			font-size: 0.5em;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.dropdown-wrapper {
		.dropdown-section {
			padding: var(--space-4) var(--space-6);
			border-top: 1px var(--clr-surface-secondary) solid;

			&:first-child {
				border-top: none;
			}

			.address {
				cursor: pointer;
			}

			.disconnect:hover {
				color: var(--clr-alert-main);
			}
		}
	}

	span.off {
		color: var(--clr-text-off);
	}

	span.on {
		color: var(--clr-heading-secondary);
	}
</style>
