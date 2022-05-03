import React from 'react';
import {useRMController} from './useRMController';
import { LocalizationProvider, DatePicker, DateTimePicker, AdapterDateFns } from '@mui/x-date-pickers';
import '@mui/lab';
// import DateFnsUtils from '@date-io/dayjs';
import InputAdornment from '@mui/material/InputAdornment';
import MuiTextField from '@mui/material/TextField';

export default function RHFDateTimePicker(props) {
	const {
		ref,
		// eslint-disable-next-line no-unused-vars
		fieldState,
		// eslint-disable-next-line no-unused-vars
		formState,
		...rest
	} = useRMController(props);
	const {views, variant, openTo, format, inputProps, helperText} = rest;
	const {type} = props;
	const Comp = (type === 'month' ? DatePicker : DateTimePicker);

	const onChange = function(event, value) {
		rest.onChange(value);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Comp
				mask='__/____'
				onChange={onChange}
				{...{...views, variant, openTo, format, inputProps, helperText}}
			/>
		</LocalizationProvider>
	);
}

RHFDateTimePicker.displayName = 'RHFDateTimePicker';
