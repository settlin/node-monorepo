import React from 'react';
import {useRMController} from './useRMController';
import TextField from '../forms/TextField';

export default function RHFTextField(props) {
	const {
		ref,
		// eslint-disable-next-line no-unused-vars
		fieldState,
		// eslint-disable-next-line no-unused-vars
		formState,
		...rest
	} = useRMController(props);

	return <TextField inputRef={ref} {...rest}/>;
}
