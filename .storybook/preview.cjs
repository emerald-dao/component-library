export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	themeSwitcher: {
		themes: ['dark', 'light'],
		dataAttribute: 'theme'
	}
};
