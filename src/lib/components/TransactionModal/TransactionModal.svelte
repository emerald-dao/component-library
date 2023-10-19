<script type="ts">
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import TransactionModalMessage from './TransactionModalMessage.svelte';

	/** https://developers.flow.com/tools/fcl-js/reference/api#transactionstatusobject */
	type TransactionStatusObject = {
		blockId: string;
		events: EventObject[];
		status: TrnsactionStatus;
		statusString: '' | 'UNKNOWN' | 'PENDING' | 'FINALIZED' | 'EXECUTED' | 'SEALED' | 'EXPIRED';
		errorMessage: string;
		statusCode: string;
	};

	/** https://developers.flow.com/tools/fcl-js/reference/api#event-object */
	type EventObject = {
		blockId: string;
		blockHeight: number;
		blockTimestamp: string;
		type: string;
		transactionId: string;
		transactionIndex: number;
		eventIndex: number;
		data: unknown;
	};

	type TrnsactionStatus = -1 | 0 | 1 | 2 | 3 | 4 | 5;

	const dispatch = createEventDispatcher();

	export let dappLogo = '/flow-logo.png';
	export let transactionName = 'Flow';
	export let transactionStatus: TransactionStatusObject;
	export let transactionInProgress = false;
	export let transactionId: string = '';
	export let network: 'mainnet' | 'testnet' | 'emulator' = 'mainnet';
	export let border = true;

	$: transactionLink = transactionId && network === 'mainnet' ? 
		`https://flowdiver.io/tx/${transactionId}` : 
		transactionId && network === 'testnet' ? 
		`https://testnet.flowdiver.io/tx/${transactionId}` : 
		''
	$: error = transactionStatus.errorMessage && Number(transactionStatus.statusCode) === 1;
	$: success = transactionStatus.status === 4 && Number(transactionStatus.statusCode) === 0;
</script>

{#if transactionInProgress}
	<div class="main-wrapper">
		<article transition:fly={{ x: 100, duration: 800 }} class:border class="column-10 align-center">
			{#if error}
				<button on:click={() => dispatch('close')} class="close">
					<Icon icon="tabler:x" />
				</button>
			{/if}

			<div class="column align-center">
				<span class="subtitle small">{transactionName}</span>
				<h4 class="h5">Transaction</h4>
			</div>

			<div class="logo-wrapper" class:error class:success>
				<img class="pulse" src={dappLogo} alt="Dapp Logo" />
				<div class="logo-border" />
				<div
					class="inverse-rotation-wrapper"
					class:rotate-reverse={error}
					class:rotate-slow={success}
				>
					<div class="logo-border secondary rotate" in:fade|local={{ duration: 500 }} />
				</div>
			</div>

			{#if transactionName === 'IPFS'}
				<TransactionModalMessage
					title="Uploading Assets"
					description="Uploading your assets to IPFS."
				/>
			{:else if transactionName === 'Flow'}
				{#if transactionStatus.status < 0}
					<TransactionModalMessage
						title="Initializing"
						description="Waiting for transaction approval."
					/>
				{:else if transactionStatus.status < 2}
					<TransactionModalMessage
						title="Pending"
						description="The transaction has been received and is pending."
						{transactionLink}
					/>
				{:else if transactionStatus.status === 2}
					<TransactionModalMessage
						title="Finalized"
						description="The transaction has been received and is pending."
						{transactionLink}
					/>
				{:else if transactionStatus.status === 3 && Number(transactionStatus.statusCode) === 0}
					<TransactionModalMessage
						title="Executed"
						description="The transaction is almost complete."
						{transactionLink}
					/>
				{:else if transactionStatus.status === 4 && Number(transactionStatus.statusCode) === 0}
					<TransactionModalMessage
						title="Sealed"
						description="The transaction is complete! Please do not refresh the page."
						icon="tabler:circle-check-filled"
						{transactionLink}
					/>
				{:else if transactionStatus.status === 5 && Number(transactionStatus.statusCode) === 0}
					<TransactionModalMessage
						title="Expired"
						description="The transaction was submitted past its expiration block height."
						{transactionLink}
					/>
				{:else if transactionStatus.errorMessage && Number(transactionStatus.statusCode) === 1}
					<TransactionModalMessage
						title="Failed"
						description="Transaction execution failed."
						{transactionLink}
						error={true}
					/>
				{:else}
					<TransactionModalMessage title="Error" description="An error occured." error={true} />
				{/if}
			{/if}
		</article>
	</div>
{/if}

<style type="scss">
	.main-wrapper {
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.654);
		top: 0;

		article {
			position: fixed;
			top: 110px;
			right: 20px;
			background-color: var(--clr-surface-secondary);
			padding: 2rem;
			z-index: 9999;
			border-radius: var(--radius-7);
			width: 25ch;

			.close {
				position: absolute;
				top: 6px;
				right: 8px;
				padding: 0.5rem;
				background-color: transparent;
				border: none;
				cursor: pointer;
				color: var(--clr-text-off);
				transition: color 0.2s ease-in-out;

				&:hover {
					color: var(--clr-heading-main);
				}
			}

			.subtitle {
				color: var(--clr-text-off);
			}

			.logo-wrapper {
				position: relative;

				.logo-border {
					border-radius: 50%;
					width: 120px;
					height: 120px;
					padding: 10px;
					border: 7px solid var(--clr-tertiary-badge);

					&.secondary {
						position: absolute;
						top: 0;
						bottom: 0;
						margin-left: auto;
						margin-right: auto;
						margin-top: auto;
						margin-bottom: auto;
						background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='#ff66c4' stroke-width='14' stroke-dasharray='20%25%2c 80%25' stroke-dashoffset='86' stroke-linecap='round'/%3e%3c/svg%3e");
						border-radius: 100px;
						border: none;
						transition: all 0.5s ease-out;
					}
				}

				img {
					position: absolute;
					left: 0;
					right: 0;
					top: 0;
					bottom: 0;
					margin-left: auto;
					margin-right: auto;
					margin-top: auto;
					margin-bottom: auto;
					border: 4px solid var(--clr-tertiary-badge);
					border-radius: 50%;
					width: 70px;
					height: 70px;
				}

				&.error {
					.logo-border {
						border-color: var(--clr-alert-badge);

						&.secondary {
							background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='#FF5C5C' stroke-width='14' stroke-dasharray='20%25%2c 80%25' stroke-dashoffset='86' stroke-linecap='round'/%3e%3c/svg%3e");
						}
					}

					img {
						border-color: var(--clr-alert-badge);
					}
				}

				&.success {
					.logo-border {
						border-color: var(--clr-primary-badge);

						&.secondary {
							background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='#3AE8C6' stroke-width='14' stroke-dasharray='20%25%2c 80%25' stroke-dashoffset='86' stroke-linecap='round'/%3e%3c/svg%3e");
						}
					}

					img {
						border-color: var(--clr-primary-badge);
					}
				}
			}
		}
	}

	@keyframes pulse {
		70% {
			-webkit-transform: scale(1.12) rotate(3deg);
			box-shadow: 0 0 0 0px var(--clr-primary-soft-t8);
		}
		80% {
			box-shadow: 0 0 1px 3px var(--clr-primary-soft-t9);
		}
		100% {
			-webkit-transform: scale(1) rotate(0deg);
			box-shadow: 0 0 3px 10px rgba(3, 3, 3, 0);
		}
	}

	.pulse {
		animation-name: pulse;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
		animation-duration: 8s;
		animation-delay: 2s;
	}

	@keyframes rotate {
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	.rotate {
		animation-name: rotate;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		animation-duration: 3.5s;
		animation-direction: normal;
	}

	.inverse-rotation-wrapper {
		width: 120px;
		height: 120px;
		position: absolute;
		top: 0;
		right: 0;

		&.rotate-reverse {
			animation-name: rotate;
			animation-iteration-count: infinite;
			animation-timing-function: linear;
			animation-duration: 3.2s;
			animation-direction: reverse;
		}

		&.rotate-slow {
			animation-name: rotate;
			animation-iteration-count: infinite;
			animation-timing-function: linear;
			animation-duration: 4.6s;
			animation-direction: reverse;
		}
	}

	.border {
		border: 1px var(--clr-border-primary) solid;
	}
</style>
