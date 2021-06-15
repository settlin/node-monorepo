import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Fields from './react-hook-form/Fields';

// import Form2 from './form/Form';

storiesOf('React Hook Form with MUI', module)
	.add('Fields', () => <Fields onSubmit={action('clicked')}/>);

// storiesOf('Form', module)
// 	.add('Fields', () => <Form2 onChange={action('clicked')}/>);
