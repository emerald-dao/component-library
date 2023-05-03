import '../node_modules/@emerald-dao/design-system/build/variables-dark.css';
import '../node_modules/@emerald-dao/design-system/build/variables-light.css';
import '../node_modules/@emerald-dao/design-system/build/variables.css';
import '../src/lib/styles/app.scss';

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
