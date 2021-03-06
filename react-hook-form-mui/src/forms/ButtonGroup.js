import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

import ToggleButton from '@material-ui/lab/ToggleButton';
import MuiToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import formControl from '../styles/formControl';

const styles = {
	formControlCompact: formControl.compact,
	labelCompact: {
		direction: 'column',
	},
	formControlNormal: formControl.normal,
	button: {
		height: '100%',
	},
	buttonGroup: {
		marginTop: '8px',
		width: 'max-content',
	},
	labelContainerCompact: {
		marginRight: 8,
	},
};

class ToggleButtonGroup extends React.Component {
	constructor(p) {
		super(p);
		this.hChange = this.handleChange.bind(this);
		this.hBlur = this.handleBlur.bind(this);
	}

	handleChange(event, value) {
		if (this.props.onChange) this.props.onChange(value);
	}

	handleBlur(event) {
		// take care of touched
		if (this.props.onBlur) this.props.onBlur(event);
	}

	render() {
		let {
			label,
			LabelContainerProps: {classes: lcClasses = {}, ...LabelContainerProps} = {},
			FormControlProps: {classes: fClasses = {}, ...FormControlProps} = {},
			FormLabelProps,
			FormHelperTextProps = {},
			ToggleButtonProps = {},
			ToggleButtonGroupProps: {classes: tClasses = {}, ...ToggleButtonGroupProps} = {},
			compact,
			classes,
			options,
			exclusive = true,
			required,
			disabled,
			error,
			helperText,
			...props
		} = this.props;

		ToggleButtonProps.classes = {...ToggleButtonProps.classes, root: clsx(classes.button, (ToggleButtonProps.classes || {}).root)};

		return (
			<FormControl
				error={error}
				{...FormControlProps}
				{...{required, disabled}}
				classes={{...fClasses, root: clsx(fClasses.root, classes[`formControl${compact ? 'Compact' : 'Normal'}`])}}
			>
				<Grid
					classes={{...lcClasses, root: clsx(lcClasses.root, classes[`labelContainer${compact ? 'Compact' : 'Normal'}`])}}
					container
					direction={'column'}
					{...LabelContainerProps}
				>
					<Grid item>
						{label && (
							<FormLabel
								{...FormLabelProps}
							>
								{label}
							</FormLabel>
						)}
					</Grid>
					<Grid item>

						{helperText && (
							<FormHelperText
								{...FormHelperTextProps}
								className={FormHelperTextProps.className}
								error={error}
							>
								{helperText}
							</FormHelperText>
						)}
					</Grid>
				</Grid>
				<MuiToggleButtonGroup
					{...ToggleButtonGroupProps}
					{...props}
					classes={compact ? {} : {root: clsx(tClasses.root, classes.buttonGroup)}}
					exclusive={exclusive}
					onBlur={this.hBlur}
					onChange={this.hChange}
				>
					{options.map(option => (
						<ToggleButton
							key={option.value}
							{...ToggleButtonProps}
							value={option.value}
						>
							{option.label}

						</ToggleButton>
					))}
				</MuiToggleButtonGroup>
			</FormControl>
		);
	}
}

ToggleButtonGroup.propTypes = {
	classes: PropTypes.object,
	compact: PropTypes.bool,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	exclusive: PropTypes.bool,
	field: PropTypes.object,
	FormControlProps: PropTypes.object,
	FormHelperTextProps: PropTypes.object,
	FormLabelProps: PropTypes.object,
	helperText: PropTypes.node,
	label: PropTypes.string,
	LabelContainerProps: PropTypes.object,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	options: PropTypes.array,
	required: PropTypes.bool,
	ToggleButtonGroupProps: PropTypes.object,
	ToggleButtonProps: PropTypes.object,
};

export default withStyles(styles)(ToggleButtonGroup);
