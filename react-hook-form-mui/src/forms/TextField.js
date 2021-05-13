import PropTypes from 'prop-types';
import React from 'react';
import MuiTextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

function TextField({compact,type,adornment, InputProps, InputLabelProps = {}, InputAdornmentProps, label, ...props}) {
	if (compact) {
		InputProps = {
			...InputProps,
			...label,
			...(adornment && {startAdornment: (
				<InputAdornment disablePointerEvents position='start' style={{whiteSpace: 'nowrap', fontSize: '0.8rem', opacity: 0.85}} {...InputAdornmentProps}>
					{adornment}
				</InputAdornment>
			)})
		}
	}
	return (
		<MuiTextField
			{...props}
			{...{InputProps, label}}
			InputLabelProps={(type === 'date' ? {shrink: true, ...InputLabelProps} : {...InputLabelProps})}
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
