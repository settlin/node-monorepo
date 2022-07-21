import React from 'react';
import MuiTextField from '@mui/material/TextField';
import formikToMuiProps from '../forms/formikToMuiProps';
import InputAdornment from '@mui/material/InputAdornment';

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
		let { children, fullWidth = true, fast, validate, compact, InputProps, InputLabelProps = {}, InputAdornmentProps, label, ...props } = this.props; // eslint-disable-line no-unused-vars
		if (compact) {
			InputProps = { ...InputProps, ...(label ? { startAdornment: <InputAdornment style={{ whiteSpace: 'nowrap', fontSize: '0.8rem', opacity: 0.85 }} position='start' disablePointerEvents={true} {...InputAdornmentProps}>{label}</InputAdornment> } : {}) };
			label = '';
		}
		const fp = formikToMuiProps(props);
		return (
			<MuiTextField
				{...{ children, fullWidth, InputProps, label }}
				onChange={this.handleChange}
				onBlur={this.handleBlur}
				variant="standard"
				InputLabelProps={(fp.type === 'date' ? { shrink: true, ...InputLabelProps } : { ...InputLabelProps })}
				{...fp}
			/>
		);
	}
}
TextField.displayName = 'FormikMaterialUITextField';

export default TextField;
