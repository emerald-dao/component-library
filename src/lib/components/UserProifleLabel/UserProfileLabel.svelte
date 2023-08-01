<script lang="ts">
	import { onMount } from 'svelte';
	import UserName from './atoms/UserName.svelte';
	import WalletLabel from './atoms/WalletLabel.svelte';
	import type { Profile } from './profile.interface';

	export let imageSize = '47px';
	export let fontSize = 'var(--font-size-1)';
	export let walletFontSize = '0.85em';
	export let address: string | undefined = undefined;
	export let showWallet = true;
	export let showName = true;
	export let userLink = true;
	export let userPageUrl = `/u/${address}`;

	export let userProfile: Profile | undefined = undefined;

	const getProfile = async () => {
		try {
			userProfile = await fetch(`/api/get-profile/${address}`).then(
				async (data) => (await data.json()) as Profile
			);
		} catch (error) {
			userProfile = {
				address: address as string,
				avatar: '/new-avatar.png',
				name: 'Anonymous Toucan',
				type: 'random'
			};
		}
	};

	onMount(() => {
		if (userProfile === undefined && address !== undefined) {
			getProfile();
		}
	});

	const handleImageError = (event: Event) => {
		if (event.target && event.target instanceof HTMLImageElement) {
			event.target.src = '/avatars/lost-toucan.png';
		}
	};
</script>

{#if !userProfile}
	<div class="row-3 align-center header-link change-opacity" style={`font-size: ${fontSize}`}>
		<img src="/avatar-2.png" alt="avatar" style={`width: ${imageSize}; height: ${imageSize}`} />
		{#if showName}
			<div class="column">
				<div class="row-2">
					<span class="username">Searching Toucan...</span>
				</div>
				{#if showWallet}
					<WalletLabel
						address="0xf8d6e0586b0a20c7"
						withBorder={false}
						color="var(--clr-text-off)"
						fontSize={walletFontSize}
					/>
				{/if}
			</div>
		{/if}
	</div>
{:else}
	<a
		class="row-3 align-center header-link"
		href={userPageUrl}
		style={`font-size: ${fontSize}`}
		class:disabled={!userLink}
	>
		<div class="image-wrapper">
			<img
				src={userProfile.avatar}
				alt="avatar"
				style={`width: ${imageSize}; height: ${imageSize}`}
				on:error={handleImageError}
			/>
		</div>
		{#if showName}
			<UserName profile={userProfile} {fontSize} {showWallet} {walletFontSize} />
		{/if}
	</a>
{/if}

<style lang="scss">
	a.disabled {
		pointer-events: none;
	}

	img {
		border-radius: 50%;
	}

	.image-wrapper {
		position: relative;
		background-color: var(--clr-surface-primary);
		border-radius: 50%;
	}

	.username {
		color: var(--clr-heading-main);
		font-size: 1em;
		margin-bottom: -3px;
	}

	.change-opacity {
		animation-name: change-opacity;
		animation-duration: 1.7s;
		animation-iteration-count: infinite;
	}

	// change opacity effect
	@keyframes change-opacity {
		0% {
			opacity: 0.08;
		}
		50% {
			opacity: 0.14;
		}
		100% {
			opacity: 0.08;
		}
	}
</style>
