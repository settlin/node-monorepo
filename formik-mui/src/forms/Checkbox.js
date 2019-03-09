import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import formikToMuiProps from '../forms/formikToMuiProps';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

class Checkbox extends React.PureComponent {
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
		let {
			label,
			compact, // eslint-disable-line no-unused-vars
			FormControlProps,
  		FormHelperTextProps,
  		FormControlLabelProps,
  		...props
		} = this.props;

		const {error, helperText, ...fp} = formikToMuiProps(props);
		return (
			<FormControl component='fieldset' error={error} {...FormControlProps}>
				<FormControlLabel
					label={label}
					{...FormControlLabelProps}
					control={(
						<MuiCheckbox
							{...fp}
							onChange={this.handleChange}
							onBlur={this.handleBlur}
						/>
					)}
				/>
				{(error || helperText) && <FormHelperText {...FormHelperTextProps}>{helperText}</FormHelperText>}
			</FormControl>
		);
	}
}
Checkbox.displayName = 'FormikMaterialUICheckbox';

export default Checkbox;
