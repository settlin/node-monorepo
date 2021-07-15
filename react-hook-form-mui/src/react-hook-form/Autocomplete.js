import React from 'react';
import {useRMController} from './useRMController';
import MUIAutocomplete from '../forms/Autocomplete';

export default function RHFAutocomplete(props) {
	const {
		ref,
		// eslint-disable-next-line no-unused-vars
		fieldState,
		// eslint-disable-next-line no-unused-vars
		formState,
		...rest
	} = useRMController(props);

	// eslint-disable-next-line no-unused-vars
	const onChange = function(event, value, reason) {
		rest.onChange(value);
	};

	return (
		<MUIAutocomplete
			inputRef={ref}
			{...rest}
			onChange={onChange}
		/>
	);
}
