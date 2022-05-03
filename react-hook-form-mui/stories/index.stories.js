import React from 'react';
import {addDecorator} from '@storybook/react';

import {action} from '@storybook/addon-actions';

import Fields from './react-hook-form/Fields';
import {muiTheme} from 'storybook-addon-material-ui5'

const defaultTheme = muiTheme({
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
addDecorator(defaultTheme)
export default {
	title: 'React Hook Form with MUI',
	component: FieldsStory,
};

export function FieldsStory() {
	return <Fields onSubmit={action('clicked')}/>;
}
