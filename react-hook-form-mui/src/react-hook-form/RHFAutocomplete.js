import React from 'react';
import {useRMController} from './useRMController';
import MUIAutocomplete from '@material-ui/lab/Autocomplete';

export default function RHFAutocomplete(props) {
	const {
		ref,
		// eslint-disable-next-line no-unused-vars
		fieldState,
		// eslint-disable-next-line no-unused-vars
		formState,
		...rest
	} = useRMController(props);

	return <MUIAutocomplete inputRef={ref} {...rest}/>;
}
