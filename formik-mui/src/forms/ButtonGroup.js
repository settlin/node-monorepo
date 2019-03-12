import React from 'react';
import cx from 'classnames';

import ToggleButton from '@material-ui/lab/ToggleButton';
import MuiToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import formikToMuiProps from '../forms/formikToMuiProps';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
	formControl: {
		'flex-direction': 'row',
	},
	formLabel: {
		display: 'flex',
		'flex-direction': 'column',
		'align-items': 'left',
		'margin-right': '20px',
	},
	button: {
		height: '100%',
	},
});

class ToggleButtonGroup extends React.Component {
	constructor(p) {
		super(p);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleChange(event, value) {
  	if (this.props.field) this.props.form.setFieldValue(this.props.field.name, value);
  	if (this.props.onChange) this.props.onChange(event.target.value);
	}

	handleBlur() {
  	// take care of touched
		if (this.props.field) this.props.form.setFieldTouched(this.props.field.name, true);
	}

	render() {
  	let {
  		label,
  		FormControlProps,
  		FormLabelProps,
  		FormHelperTextProps,
  		ToggleButtonProps = {},
  		ToggleButtonGroupProps,
  		compact,
  		classes,
			options,
			row,
			exclusive = true,
  		...props
  	} = this.props;

		const {error, helperText, ...fp} = formikToMuiProps(props);
		ToggleButtonProps.classes = {...ToggleButtonProps.classes, root: cx(classes.button, (ToggleButtonProps.classes || {}).root)};

  	return (
  		<FormControl
  			error={error}
  			{...FormControlProps}
  			classes={{...(FormControlProps || {}).classes, ...(compact ? {root: classes.formControl} : {})}}
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
								className={cx(
									{[classes.rowHelperText]: row === 'all'},
									FormHelperTextProps && FormHelperTextProps.className,
								)}
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
