import PropTypes from 'prop-types';
import React from 'react';
import {useController} from 'react-hook-form';
import ButtonGroup from '../forms/ButtonGroup';

export default function RHFButtonGroup({control, options, name, ...rest}) {
	const {
		field: {ref, ...inputProps},
	} = useController({
		name,
		control,
		rules: {required: rest.required},
		defaultValue: rest.defaultValue,
	});
	return (
		<ButtonGroup
			aria-label='text alignment'
			exclusive
			options={options}
			ref={ref}
			required
			{...inputProps}
			{...rest}
		/>
	);
}

RHFButtonGroup.propTypes = {
	control: PropTypes.object,
	name: PropTypes.string,
};
