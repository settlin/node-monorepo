import PropTypes from 'prop-types';
import React from 'react';
import {useController} from 'react-hook-form';
import TextField from '../forms/TextField';

export default function RHFTextField({control, name, ...rest}) {
	const {
		field: {ref, ...inputProps}
	} = useController({
		name,
		control,
		rules: {required: rest.required},
		defaultValue: rest.defaultValue,
	});
	return <TextField {...inputProps} inputRef={ref} {...rest}/>;
}

RHFTextField.propTypes = {
	control: PropTypes.object,
	name: PropTypes.string,
};
