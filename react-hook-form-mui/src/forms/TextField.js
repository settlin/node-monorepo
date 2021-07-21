import PropTypes from 'prop-types';
import React from 'react';
import MuiTextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';


function TextField({compact, type, InputProps, InputLabelProps = {}, InputAdornmentProps, label, ...props}) {
	if (compact) {
		InputProps = {
			...InputProps,
			...(label
				? {
					startAdornment: (
						<InputAdornment disablePointerEvents position='start' style={{whiteSpace: 'nowrap', fontSize: '0.8rem', opacity: 0.85}} {...InputAdornmentProps}>
							<InputLabel className={InputLabelProps.classes} {...InputLabelProps}>
								{label}
							</InputLabel>
						</InputAdornment>
					),
				}
				: {}
			),
		};
		label = '';
	}
	return (
		<MuiTextField
			{...props}
			{...{InputProps, label}}
			InputLabelProps={(type === 'date' ? {shrink: true, ...InputLabelProps} : {...InputLabelProps})}
			type={type}
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
