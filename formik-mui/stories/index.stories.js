import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TinyMCE from './formik/TinyMCE';
import Otp from './formik/Otp';
import Form from './formik/Form';
import ChipSelect from './formik/ChipSelect';
import Flatpickr from './formik/Flatpickr';
import Radio from './formik/Radio';
import Checkbox from './formik/Checkbox';
import Button from './formik/Button';
import { muiTheme } from 'storybook-addon-material-ui5';

import Form2 from './form/Form';


storiesOf('Formik', module)
	.addDecorator(muiTheme([{
		palette: {
			primary: { main: '#e0454b' },
			secondary: { main: '#e4a91d' },
			mode: 'light',
			text: { primary: '#786464' },
		},
		typography: {
			useNextVariants: true,
		},
	}]))
	.add('Fields', () => <Form onSubmit={action('clicked')} />)
	.add('Radio, ButtonGroup', () => <Radio onSubmit={action('clicked')} />)
	.add('Switch, Checkbox', () => <Checkbox onSubmit={action('clicked')} />)
	.add('Button', () => <Button onSubmit={action('clicked')} />)
	.add('TinyMCE', () => <TinyMCE onSubmit={action('clicked')} />)
	.add('Otp', () => <Otp onSubmit={action('clicked')} />)
	.add('ChipSelect', () => <ChipSelect onSubmit={action('clicked')} />)
	.add('Flatpickr', () => <Flatpickr onSubmit={action('clicked')} />);

storiesOf('Form', module)
	.add('Fields', () => <Form2 onChange={action('clicked')} />);
