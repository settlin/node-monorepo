import React from 'react';
import MuiTextField from '@material-ui/core/TextField';
import formikToMuiProps from '../forms/formikToMuiProps';
import InputAdornment from '@material-ui/core/InputAdornment';

class TextField extends React.PureComponent {
	constructor(p) {
		super(p);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}
	handleChange(event) {
		if (this.props.field) this.props.field.onChange(event);
		if (this.props.onChange) this.props.onChange(event);
	}
	handleBlur(event) {
		if (this.props.field) this.props.field.onBlur(event);
		if (this.props.onBlur) this.props.onBlur(event);
	}
	render() {
		let {children, fullWidth = true, compact, InputProps, InputAdornmentProps, label, ...props} = this.props;
		if (compact) {
			InputProps = {...InputProps, ...(label ? {startAdornment: <InputAdornment style={{whiteSpace: 'nowrap'}} position='start' {...InputAdornmentProps}>{label}</InputAdornment>} : {})};
			label = '';
		}

		const fp = formikToMuiProps(props);
		return (
			<MuiTextField
				{...fp}
				{...{children, fullWidth, InputProps, label}}
				onChange={this.handleChange}
				onBlur={this.handleBlur}
				InputLabelProps={(fp.type === 'date' ? {shrink: true} : {})}
			/>
		);
	}
}
TextField.displayName = 'FormikMaterialUITextField';

export default TextField;
