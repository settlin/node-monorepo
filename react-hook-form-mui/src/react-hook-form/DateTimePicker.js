import React from 'react';
import {useRMController} from './useRMController';
import {MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardDateTimePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/dayjs';
import InputAdornment from '@material-ui/core/InputAdornment';
import MuiTextField from '@material-ui/core/TextField';

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
	const Comp = (type === 'month' ? KeyboardDatePicker : KeyboardDateTimePicker);

	const onChange = function(event, value) {
		rest.onChange(value);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Comp
				mask='__/____'
				onChange={onChange}
				{...{...views, variant, openTo, format, inputProps, helperText}}
			/>
		</MuiPickersUtilsProvider>
	);
}

RHFDateTimePicker.displayName = 'RHFDateTimePicker';
