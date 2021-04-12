import React from 'react';
import formikToMuiProps from '../../src/forms/formikToMuiProps';
import {KeyboardDatePicker, KeyboardDateTimePicker} from '@material-ui/pickers';
import InputAdornment from '@material-ui/core/InputAdornment';
import MuiTextField from '@material-ui/core/TextField';

// const parseDigits = string => (string.match(/\d+/g) || []).join('');

// const formatDate = string => {
// 	const digits = parseDigits(string);
// 	const chars = digits.split('');
// 	console.log(string, chars);
// 	return chars
// 		.reduce(
// 			(r, v, index) => (index === 2 || index === 4 ? `${r}-${v}` : `${r}${v}`),
// 			''
// 		)
// 		.substr(0, 10);
// };

class FDateTimePicker extends React.PureComponent {
	render() {
		let {children, fullWidth = true, variant = 'inline', type, format = type === 'date' ? 'DD/MM/YYYY' : 'DD/MM/YYYY hh:mm a', fast, validate, compact, InputProps, InputLabelProps = {}, InputAdornmentProps, TextFieldProps, label, onChange, picker, ...props} = this.props; // eslint-disable-line no-unused-vars

		const Comp = type === 'date' ? KeyboardDatePicker : KeyboardDateTimePicker;
		const fp = formikToMuiProps({...props, type: 'text'});  // eslint-disable-line no-unused-vars

		if (compact) {
			InputProps = {...InputProps, ...(label ? {startAdornment: <InputAdornment style={{whiteSpace: 'nowrap', fontSize: '0.8rem', opacity: 0.85}} position='start' disablePointerEvents={true} {...InputAdornmentProps}>{label}</InputAdornment>} : {})};
			label = '';
		}

		onChange = onChange || (date => props.form.setFieldValue(fp.name, date));

		return (
			<Comp
				{...{label, fullWidth, variant, format}}
				{...fp}
				{...{
					onChange,
					mask: '__/__/____',
					// rifmFormatter: formatDate,
					TextFieldComponent: p => <MuiTextField {...{
						...p,
						InputProps: {...p.InputProps, ...InputProps},
						...InputLabelProps,
						...TextFieldProps,
					}}/>,
				}}
			/>
		);
	}
}

FDateTimePicker.displayName = 'FormikDateTimePicker';
export default FDateTimePicker;
