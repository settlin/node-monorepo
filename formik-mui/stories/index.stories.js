import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Form from './form';

storiesOf('Form', module).add('Fields', () => <Form onSubmit={action('clicked')}/>);
