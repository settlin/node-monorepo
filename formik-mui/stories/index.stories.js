import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Form from './formik/Form';
import Radio from './formik/Radio';
import Checkbox from './formik/Checkbox';

import Form2 from './form/Form';

storiesOf('Formik', module)
	.add('Fields', () => <Form onSubmit={action('clicked')}/>)
	.add('Radio, ButtonGroup', () => <Radio onSubmit={action('clicked')}/>)
	.add('Switch, Checkbox', () => <Checkbox onSubmit={action('clicked')}/>);

storiesOf('Form', module)
	.add('Fields', () => <Form2 onChange={action('clicked')}/>);
