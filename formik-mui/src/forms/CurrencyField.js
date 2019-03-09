import React from 'react';
import TextField from '../forms/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import currencify from '../utils/currencify';

class CurrencyField extends React.PureComponent {
	render() {
		const {InputProps, ...props} = this.props;

  	return (
			<TextField
				{...props}
				helperText={currencify({amount: props.value || (props.field || {}).value}) || ''}
				InputProps={{
					startAdornment: <InputAdornment position='start'>₹</InputAdornment>,
					...InputProps,
				}}
			/>
  	);
	}
}

export default CurrencyField;
