import React from 'react';
import {useRMController} from './useRMController';
import Select from '../forms/SelectWithChip';

export default function RHFSelectChip(props) {
	const {
		ref,
		// eslint-disable-next-line no-unused-vars
		fieldState,
		// eslint-disable-next-line no-unused-vars
		formState,
		...rest
	} = useRMController(props);
	return <Select inputRef={ref} {...rest}/>;
}
