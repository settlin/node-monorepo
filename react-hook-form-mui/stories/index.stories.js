import React from 'react';
import {action} from '@storybook/addon-actions';
import {withThemeFromJSXProvider} from '@storybook/addon-styling';
import {createTheme} from '@mui/material';
import {CssBaseline, ThemeProvider} from '@mui/material';

const theme = createTheme({
	palette: {
		default: {main: '#786464'},
		primary: {main: '#e0454b'},
		secondary: {main: '#e4a91d'},
		type: 'light',
		text: {primary: '#786464'},
	},
	typography: {
		useNextVariants: true,
		htmlFontSize: 15,
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
});


const decorators = [
	withThemeFromJSXProvider({
		themes: {
			light: theme,
			dark: theme,
		},
		defaultTheme: 'light',
		Provider: ThemeProvider,
		GlobalStyles: CssBaseline,
	}),
];

import Fields from './react-hook-form/Fields';

export default {
	title: 'React Hook Form with MUI',
	component: FieldsStory,
	decorators,
};

export function FieldsStory() {
	return <Fields onSubmit={action('clicked')}/>;
}
