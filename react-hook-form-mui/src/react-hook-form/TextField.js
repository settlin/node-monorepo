import React from 'react';
import {useRMController} from './useRMController';
import TextField from '../forms/TextField';

export default function RHFTextField(props) {
	const {
		ref,
		...rest
	} = useRMController(props);

	return <TextField inputRef={ref} {...rest}/>;
}
