import React from 'react';
import MuiRadio from '@material-ui/core/Radio';
import formikToMuiProps from '../forms/formikToMuiProps';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import cx from 'classnames';

class Radio extends React.PureComponent {
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
			row,
			classes = {},
			value = 'on',
			FormControlProps,
  		FormHelperTextProps,
  		FormControlLabelProps,
  		...props
		} = this.props;

		const {error, helperText, type, ...fp} = formikToMuiProps({...props, type: 'radio'});  // eslint-disable-line no-unused-vars
		// removed type from props to ensure proper working of checkbox in formik
		return (
			<FormControl component='fieldset' error={error} {...FormControlProps} className={cx(
				{[classes.rowLabel]: row === 'all'},
				FormControlProps && FormControlProps.className,
			)}>
				<FormControlLabel
					label={label}
					className={cx(
						{[classes.rowLabel]: row === 'all'},
						FormControlLabelProps && FormControlLabelProps.className,
					)}
					{...FormControlLabelProps}
					control={(
						<MuiRadio
							{...fp}
							value={value}
							onChange={this.handleChange}
							onBlur={this.handleBlur}
						/>
					)}
				/>
				{helperText && <FormHelperText
					{...FormHelperTextProps}
					error={error}
					className={cx(
						{[classes.rowHelperText]: row === 'all'},
						FormHelperTextProps && FormHelperTextProps.className,
					)}>{helperText}</FormHelperText>}
			</FormControl>
		);
	}
}
Radio.displayName = 'FormikMaterialUIRadio';

export default Radio;
