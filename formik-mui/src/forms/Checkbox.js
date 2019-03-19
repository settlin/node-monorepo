import React, {Fragment} from 'react';
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
  		FormHelperTextProps = {},
  		FormControlLabelProps,
  		...props
		} = this.props;

		const {error, helperText, type, ...fp} = formikToMuiProps({...props, type: 'checkbox'});  // eslint-disable-line no-unused-vars
		// removed type from props to ensure proper working of checkbox in formik
		return (
			<FormControl component='fieldset' error={error} {...FormControlProps}>
				<FormControlLabel
					{...FormControlLabelProps}
					label={
						<Fragment>
							{label}
							{helperText && <FormHelperText
								{...FormHelperTextProps}
								error={error}
								className={FormHelperTextProps.className}>
								{helperText}
							</FormHelperText>}
						</Fragment>
					}
					control={(
						<MuiCheckbox
							{...fp}
							onChange={this.handleChange}
							onBlur={this.handleBlur}
						/>
					)}
				/>
			</FormControl>
		);
	}
}
Checkbox.displayName = 'FormikMaterialUICheckbox';

export default Checkbox;
