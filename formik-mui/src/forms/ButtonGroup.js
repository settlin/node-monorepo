import React from 'react';
import cx from 'classnames';

import ToggleButton from '@material-ui/lab/ToggleButton';
import MuiToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import formikToMuiProps from '../forms/formikToMuiProps';
import {withStyles} from '@material-ui/core/styles';

const styles = () => ({
	formControl: {
		'flex-direction': 'row',
	},
	formLabel: {
		display: 'flex',
		'flex-direction': 'row',
		'align-items': 'center',
		'margin-right': '20px',
	},
});

class ToggleButtonGroup extends React.Component {
  state = {
  	dirty: false,
	}
	
	constructor(p) {
		super(p);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

  handleChange(event, value) {
  	if (this.props.field) this.props.form.setFieldValue(this.props.field.name, value);
  	if (this.props.onChange) this.props.onChange(event.target.value);
  	if (!this.state.dirty) this.setState({dirty: true});
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
  		ToggleButtonProps,
  		ToggleButtonGroupProps,
  		compact,
  		classes,
			options,
			exclusive = true,
  		...props
  	} = this.props;

  	const {error, helperText, ...fp} = formikToMuiProps(props);

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
  				</FormLabel>
  			)}
  			<MuiToggleButtonGroup
  				{...ToggleButtonGroupProps}
  				{...fp}
					exclusive={exclusive}
					onChange={this.handleChange}
					onChange={this.handleBlur}
  			>
  				{options.map(option => (
  					<ToggleButton
  						key={option.value}
  						{...ToggleButtonProps}
							value={option.value}
  					>{option.label}</ToggleButton>
  				))}
  			</MuiToggleButtonGroup>
  			{helperText && (
  				<FormHelperText
  					{...FormHelperTextProps}
  					className={cx(
  						{[classes.rowHelperText]: row === 'all'},
  						FormHelperTextProps && FormHelperTextProps.className,
  					)}
  				>
  					{helperText}
  				</FormHelperText>
  			)}
  		</FormControl>
  	);
  }
}

export default withStyles(styles)(ToggleButtonGroup);
