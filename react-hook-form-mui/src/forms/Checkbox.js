import PropTypes from 'prop-types';
import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
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
		if (this.props.onChange) this.props.onChange(event);
	}
	handleBlur(event) {
		if (this.props.onBlur) this.props.onBlur(event);
	}
	render() {
		let {
			label,
			compact, // eslint-disable-line no-unused-vars
			FormControlProps,
			FormHelperTextProps = {},
			FormControlLabelProps,
			error,
			helperText,
			...props
		} = this.props;

		// removed type from props to ensure proper working of checkbox in formik
		return (
			<FormControl component='fieldset' error={error} {...FormControlProps}>
				<FormControlLabel
					{...FormControlLabelProps}
					control={(
						<MuiCheckbox
							{...props}
							// eslint-disable-next-line react/jsx-handler-names
							onBlur={this.handleBlur}
							// eslint-disable-next-line react/jsx-handler-names
							onChange={this.handleChange}
						/>
					)}
					label={(
						<span>
							{label}
							{helperText && (
								<FormHelperText
									{...FormHelperTextProps}
									className={FormHelperTextProps.className}
									error={error}
								>
									{helperText}
								</FormHelperText>
							)}
						</span>
					)}
				/>
			</FormControl>
		);
	}
}

Checkbox.propTypes = {
	compact: PropTypes.bool,
	error: PropTypes.bool,
	FormControlLabelProps: PropTypes.object,
	FormControlProps: PropTypes.object,
	FormHelperTextProps: PropTypes.object,
	helperText: PropTypes.node,
	label: PropTypes.node,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
};
Checkbox.displayName = 'FormikMaterialUICheckbox';

export default Checkbox;
