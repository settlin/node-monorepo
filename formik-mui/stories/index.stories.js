/* eslint-disable react/no-multi-comp */
import React from 'react';

import {action} from '@storybook/addon-actions';
import TinyMCE from './formik/TinyMCE';
import Otp from './formik/Otp';
import Form from './formik/Form';
import ChipSelect from './formik/ChipSelect';
import Flatpickr from './formik/Flatpickr';
import Radio from './formik/Radio';
import Checkbox from './formik/Checkbox';
import Button from './formik/Button';
import {withThemeFromJSXProvider} from '@storybook/addon-styling';
import {createTheme} from '@mui/material';
import {CssBaseline, ThemeProvider} from '@mui/material';

import Form2 from './form/Form';


const theme = createTheme({
	palette: {
		primary: {main: '#e0454b'},
		secondary: {main: '#e4a91d'},
		mode: 'light',
		text: {primary: '#786464'},
	},
	typography: {
		useNextVariants: true,
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

export default {
	title: 'Formik',
	decorators,
};

export function Fields() {
	return <Form onSubmit={action('clicked')}/>;
}
export function RadioButtonGroup() {
	return <Radio onSubmit={action('clicked')}/>;
}

RadioButtonGroup.story = {
	name: 'Radio, ButtonGroup',
};

export function SwitchCheckbox() {
	return <Checkbox onSubmit={action('clicked')}/>;
}

SwitchCheckbox.story = {
	name: 'Switch, Checkbox',
};

export function _Button() {
	return <Button onSubmit={action('clicked')}/>;
}
export function TinyMce() {
	return <TinyMCE onSubmit={action('clicked')}/>;
}

TinyMce.story = {
	name: 'TinyMCE',
};

export function _Otp() {
	return <Otp onSubmit={action('clicked')}/>;
}
export function _ChipSelect() {
	return <ChipSelect onSubmit={action('clicked')}/>;
}

_ChipSelect.story = {
	name: 'ChipSelect',
};

export function _Flatpickr() {
	return <Flatpickr onSubmit={action('clicked')}/>;
}

export function _Fields() {
	return <Form2 onChange={action('clicked')}/>;
}
