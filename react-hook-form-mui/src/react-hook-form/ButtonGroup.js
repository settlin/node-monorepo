import React from 'react';
import {useRMController} from './useRMController';
import ButtonGroup from '../forms/ButtonGroup';

export default function RHFButtonGroup(props) {
	const {
		// eslint-disable-next-line no-unused-vars
		fieldState,
		// eslint-disable-next-line no-unused-vars
		formState,
		...p
	} = useRMController(props);

	return (
		<ButtonGroup
			exclusive
			{...p}
		/>
	);
}
