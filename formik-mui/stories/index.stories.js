import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Form from './form';
import Radio from './Radio';
import Checkbox from './Checkbox';

storiesOf('Form', module)
	.add('Fields', () => <Form onSubmit={action('clicked')}/>)
	.add('Radio, ButtonGroup', () => <Radio onSubmit={action('clicked')}/>)
	.add('Switch, Checkbox', () => <Checkbox onSubmit={action('clicked')}/>);
