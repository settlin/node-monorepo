import React from 'react';
import {useRMController} from './useRMController';
import ButtonGroup from '../forms/ButtonGroup';

export default function RHFButtonGroup(props) {
	const p = useRMController(props);

	return (
		<ButtonGroup
			aria-label='text alignment'
			exclusive
			{...p}
		/>
	);
}
