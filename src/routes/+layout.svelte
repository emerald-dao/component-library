<script type="ts">
	import '../app.postcss';
	import { Header, Footer } from '$lib/index';
	import { theme } from '$lib/store/ThemeStore';
	import '@emerald-dao/design-system/build/variables-dark.css';
	import '@emerald-dao/design-system/build/variables-light.css';
	import '@emerald-dao/design-system/build/variables.css';
	import '$lib/styles/app.scss';
	import Icon from '@iconify/svelte';
	import TransactionModal from '$lib/components/TransactionModal/TransactionModal.svelte';

	let navElements = [
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

	let dummyTransaction = {
		blockId: '',
		status: '4',
		statusString: 'SEALED',
		statusCode: '1',
		errorMessage:
			'execution error code 1052: [Error Code: 1052] error caused by: 1 error occurred:\n\t* transaction execute failed: [Error Code: 1101] cadence runtime error: Execution failed:\nerror: invalid argument at index 2: decodeing argument failed: [Error Code: 1052] transaction arguments are invalid: (argument is not json decodable: failed to decode JSON-Cadence value: invalid UFix64: out of range)\n--> e70c7b5b81797adbb31c8d686ccb22e88afbbf73aa6dcd4b67cf4bf16b077f6a\n\n\n',
		events: []
	};
</script>

<TransactionModal transactionInProgress={true} transactionStatus={dummyTransaction} />
<Header themeStore={theme} {navElements} logoUrl="/EA_Iso.svg" logoText="Emerald City">
	<Icon icon="material-symbols:translate-rounded" slot="commands" />
</Header>
<main>
	<slot />
</main>
<Footer logoUrl="/EA_Iso.svg" logoText="Emerald City" />

<style>
	main {
		background-color: var(--clr-background-secondary);
	}
</style>
