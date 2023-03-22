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
	export let border = true;

	$: error = transactionStatus.errorMessage && Number(transactionStatus.statusCode) === 1;
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

			<div class="logo-wrapper" class:error>
				<img class="pulse" src={dappLogo} alt="Dapp Logo" />
				<div class="logo-border" />
				<div class="wrapp" class:rotate-reverse={error}>
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
						description="The transaction has been received by a collector but not yet finalized in a block."
					/>
				{:else if transactionStatus.status === 2}
					<TransactionModalMessage
						title="Finalized"
						description="The consensus nodes have finalized the block that the transaction is included in."
					/>
				{:else if transactionStatus.status === 3 && Number(transactionStatus.statusCode) === 0}
					<TransactionModalMessage
						title="Executed"
						description="The execution nodes have produced a result for the transaction."
					/>
				{:else if transactionStatus.status === 4 && Number(transactionStatus.statusCode) === 0}
					<TransactionModalMessage
						title="Sealed"
						description="The verification nodes have verified the transaction, and the seal is included in the latest block."
						icon="ion:checkmark-circle"
					/>
				{:else if transactionStatus.status === 5 && Number(transactionStatus.statusCode) === 0}
					<TransactionModalMessage
						title="Expired"
						description="The transaction was submitted past its expiration block height."
					/>
				{:else if transactionStatus.errorMessage && Number(transactionStatus.statusCode) === 1}
					<TransactionModalMessage
						title="Failed"
						description="Transaction execution failed."
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
					border: 7px solid var(--clr-neutral-badge);

					&.secondary {
						position: absolute;
						top: 0;
						bottom: 0;
						margin-left: auto;
						margin-right: auto;
						margin-top: auto;
						margin-bottom: auto;
						background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='#3AE8C6' stroke-width='14' stroke-dasharray='20%25%2c 80%25' stroke-dashoffset='86' stroke-linecap='round'/%3e%3c/svg%3e");
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
					border: 4px solid var(--clr-border-primary);
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

	.rotate-reverse {
		animation-name: rotate;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		animation-duration: 3.2s;
		animation-direction: reverse;
		width: 120px;
		height: 120px;
		position: absolute;
		top: 0;
		right: 0;
	}

	.border {
		border: 1px var(--clr-border-primary) solid;
	}
</style>
