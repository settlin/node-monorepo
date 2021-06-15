import PropTypes from 'prop-types';
import React from 'react';
import TextField from '../forms/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import currencify from '../utils/currencify';

function CurrencyField({InputProps, currencifyOptions, currencifyFunc = currencify, ...props}) {
	return (
		<TextField
			{...props}
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>
						&#8377;
					</InputAdornment>
				),
				...InputProps,
			}}
			helperText={currencifyFunc(props.value, currencifyOptions) || ''}
		/>
	);
}

CurrencyField.propTypes = {
	currencifyFunc: PropTypes.func,
	currencifyOptions: PropTypes.object,
	InputProps: PropTypes.object,
	value: PropTypes.number,
};

export default CurrencyField;
