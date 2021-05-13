import PropTypes from 'prop-types';
import React from 'react';
import MuiTextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

function TextField({compact, InputProps, InputLabelProps = {}, InputAdornmentProps, label, ...props}) {
	if (compact) {
		InputProps = {
			...InputProps,
			...label,
			...(props.adornment && {startAdornment: (
				<InputAdornment disablePointerEvents position='start' style={{whiteSpace: 'nowrap', fontSize: '0.8rem', opacity: 0.85}} {...InputAdornmentProps}>
					{props.adornment}
				</InputAdornment>
			)})
		}
		// label = '';
	}
	return (
		<MuiTextField
			{...props}
			{...{InputProps, label}}
			InputLabelProps={(props.type === 'date' ? {shrink: true, ...InputLabelProps} : {...InputLabelProps})}
		/>
	);
}

TextField.propTypes = {
	compact: PropTypes.bool,
	InputAdornmentProps: PropTypes.object,
	InputLabelProps: PropTypes.object,
	InputProps: PropTypes.object,
	label: PropTypes.string,
	type: PropTypes.string,
};

TextField.displayName = 'RHFMUITextField';

export default TextField;
