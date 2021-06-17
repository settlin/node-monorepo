import React from 'react';

import {action} from '@storybook/addon-actions';

import Fields from './react-hook-form/Fields';

export default {
	title: 'React Hook Form with MUI',
	component: FieldsStory,
};

export function FieldsStory() {
	return <Fields onSubmit={action('clicked')}/>;
}
