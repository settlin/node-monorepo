import PropTypes from 'prop-types';
import React from 'react';
import MuiSwitch from '@mui/material/Switch';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from './FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

class Switch extends React.PureComponent {
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
		const {
			fullWidth = true,
			label,
			compact, // eslint-disable-line no-unused-vars
			FormHelperTextProps = {},
			FormControlProps,
			FormControlLabelProps,
			offLabel,
			error,
			helperText,
			...props
		} = this.props;

		return (
			<FormControl {...FormControlProps} fullWidth={fullWidth}>
				<FormControlLabel
					{...FormControlLabelProps}
					control={(
						<MuiSwitch
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
					offLabel={offLabel}
				/>
			</FormControl>
		);
	}
}

Switch.propTypes = {
	compact: PropTypes.bool,
	error: PropTypes.bool,
	FormControlLabelProps: PropTypes.object,
	FormControlProps: PropTypes.object,
	FormHelperTextProps: PropTypes.object,
	fullWidth: PropTypes.bool,
	helperText: PropTypes.node,
	label: PropTypes.node,
	offLabel: PropTypes.node,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
};
Switch.displayName = 'FormikMaterialUISwitch';

export default Switch;
