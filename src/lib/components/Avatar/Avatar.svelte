<script type="ts">
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	import CopyToClipboard from '../CopyToClipboard/CopyToClipboard.svelte';
	import Dropdown from '../Dropdown/Dropdown.svelte';
	import type { NavElement } from '$lib/models/navElement.interface';

	export let walletAddress: string | undefined;
	export let flowConnectedNet: 'mainnet' | 'testnet' = 'mainnet';
	export let navigation: NavElement[] = [];
	export let unauthenticate: () => void;

	let walletAddressHover = false;

	const toggleAddressHover = () => {
		walletAddressHover = !walletAddressHover;
	};

	const copyToClipboard = () => {
		const app = new CopyToClipboard({
			target: document.getElementById('clipboard') as Element,
			props: { name: walletAddress }
		});
		app.$destroy();
	};
</script>

<Dropdown width="250px">
	<div slot="parent" class="avatar-wrapper">
		<img class="avatar" src="/new-avatar.png" alt="default avatar" />
		<div class="connection-circle pulse" />
	</div>
	<div slot="dropdown" class="dropdown-wrapper">
		<p class="small welcome-text">
			<span class="off"> Welcome, </span>
			<span
				class="on address row-1 align-center"
				on:click={copyToClipboard}
				on:keydown
				on:mouseenter={toggleAddressHover}
				on:mouseleave={toggleAddressHover}
			>
				{walletAddress}
				{#if walletAddressHover}
					<div transition:fade|local={{ duration: 140 }} class="center">
						<Icon icon="tabler:copy" color="var(--clr-text-off)" />
					</div>
				{/if}
			</span>
		</p>
		{#if navigation.length > 0}
			<div class="commands column-1">
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
					</a>
				{/each}
			</div>
		{/if}
		<div class="flow-connection-wrapper column-1">
			<p class="small">
				<span class="off xsmall"> Flow Blockchain connection: </span>
				<span class="green row-1 align-center">
					<Icon icon="svg-spinners:3-dots-move" />
					{`Connected to ${flowConnectedNet}`}
				</span>
			</p>
		</div>
		<div class="commands column-1">
			<a
				class="header-link row-2 align-center"
				href="https://find.xyz"
				target="_blank"
				rel="noreferrer"
			>
				<Icon icon="tabler:user-circle" />
				Create profile
			</a>
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
		<a class="disconnect header-link row-2 align-center" href="" on:click={unauthenticate}>
			<Icon icon="tabler:plug-connected-x" />
			Disconnect
		</a>
	</div>
</Dropdown>
<div id="clipboard" />

<style type="scss">
	.avatar-wrapper {
		position: relative;

		.connection-circle {
			position: absolute;
			bottom: 0;
			right: 0;
			height: 11px;
			width: 11px;
			border-radius: 50%;
			background-color: var(--clr-primary-main);
			border: 2px var(--clr-background-primary) solid;
		}

		.avatar {
			height: 38px;
			width: 38px;
			border-radius: 50%;
		}
	}

	.dropdown-wrapper {
		.welcome-text {
			margin-bottom: var(--space-4);
			display: flex;
			flex-direction: column;

			.address {
				cursor: pointer;
			}
		}

		.commands {
			margin-top: var(--space-4);
			padding-top: var(--space-4);

			&:has(:first-child) {
				border-top: 1px var(--clr-surface-secondary) solid;
			}
		}
	}

	.flow-connection-wrapper {
		font-size: var(--font-size-1);
		margin-top: var(--space-4);
		padding-top: var(--space-4);
		border-top: 1px var(--clr-surface-secondary) solid;

		.green {
			color: var(--clr-primary-main);
		}
	}

	.disconnect {
		border-top: 1px var(--clr-surface-secondary) solid;
		padding-top: var(--space-3);
		margin-top: var(--space-4);

		&:hover {
			color: var(--clr-alert-main);
		}
	}

	span.off {
		color: var(--clr-text-off);
	}

	span.on {
		color: var(--clr-heading-secondary);
	}
</style>
