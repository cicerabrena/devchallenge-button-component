import React from 'react';

import GlobalSytle from '../src/theme/globalStyle';

export const decorators = [
	(Story) => (
		<>
			<GlobalSytle />
			<Story />
		</>
	),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
