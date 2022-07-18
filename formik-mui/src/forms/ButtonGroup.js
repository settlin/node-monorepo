import React from 'react';
import clsx from 'clsx';

import ToggleButton from '@mui/material/ToggleButton';
import MuiToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import formikToMuiProps from '../forms/formikToMuiProps';
import withStyles from '@mui/styles/withStyles';
import formControl from '../styles/formControl';
import formLabel from '../styles/formLabel';

const styles = {
	formControlCompact: formControl.compact,
	formControlNormal: formControl.normal,
	formLabel,
	button: {
		height: '100%',
	},
	buttonGroup: {
		marginTop: '8px',
		width: 'max-content',
	},
};

class ToggleButtonGroup extends React.Component {
	constructor(p) {
		super(p);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleChange(event, value) {
		if (this.props.field) this.props.form.setFieldValue(this.props.field.name, value);
  	if (this.props.onChange) this.props.onChange(event.currentTarget.value);
	}

	handleBlur() {
  	// take care of touched
		if (this.props.field) this.props.form.setFieldTouched(this.props.field.name, true);
	}

	render() {
  	let {
  		label,
			FormControlProps: {classes: fClasses = {}, ...FormControlProps} = {},
  		FormLabelProps,
  		FormHelperTextProps = {},
  		ToggleButtonProps = {},
  		ToggleButtonGroupProps: {classes: tClasses = {}, ...ToggleButtonGroupProps} = {},
  		compact,
  		classes,
			options,
			exclusive = true,
  		...props
  	} = this.props;

		const {error, helperText, ...fp} = formikToMuiProps(props);
		ToggleButtonProps.classes = {...ToggleButtonProps.classes, root: clsx(classes.button, (ToggleButtonProps.classes || {}).root)};

  	return (
  		<FormControl
  			error={error}
  			{...FormControlProps}
				classes={{...fClasses, root: clsx(fClasses.root, classes[`formControl${compact ? 'Compact' : 'Normal'}`])}}
  		>
  			{label && (
  				<FormLabel
  					{...FormLabelProps}
  					classes={{...(FormLabelProps || {}).classes, ...(compact ? {root: classes.formLabel} : {})}}
  				>
						{label}
						{helperText && (
							<FormHelperText
								{...FormHelperTextProps}
								error={error}
								className={FormHelperTextProps.className}
							>
								{helperText}
							</FormHelperText>
						)}
  				</FormLabel>
				)}
  			<MuiToggleButtonGroup
  				{...ToggleButtonGroupProps}
  				{...fp}
					exclusive={exclusive}
					onChange={this.handleChange}
					onBlur={this.handleBlur}
					classes={compact ? {} : {root: clsx(tClasses.root, classes.buttonGroup)}}
  			>
  				{options.map(option => (
  					<ToggleButton
  						key={option.value}
  						{...ToggleButtonProps}
							value={option.value}
  					>{option.label}</ToggleButton>
  				))}
  			</MuiToggleButtonGroup>
  		</FormControl>
  	);
	}
}

export default withStyles(styles)(ToggleButtonGroup);
