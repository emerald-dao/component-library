<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import TransactionModal from './TransactionModal.svelte';
</script>

<Meta title="Transaction Modal" component={TransactionModal} />

<Template let:args>
	<TransactionModal {...args} />
</Template>

<Story
	name="Flow"
	args={{
		transactionLogo: '/flow-logo.png',
		dappLogo: '/ec-logo.png',
		transactionName: 'Flow',
		transactionStatus: {
			blockId: 'x',
			errorMessage: '',
			events: [],
			status: 1,
			statusCode: 1,
			statusString: 'EXECUTING'
		},
		transactionInProgress: true
	}}
/>
