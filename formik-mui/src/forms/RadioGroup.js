import React, {memo} from 'react';
import clsx from 'clsx';

import Radio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import formikToMuiProps from '../forms/formikToMuiProps';
import withStyles from '@mui/styles/withStyles';
import Clear from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import formControl from '../styles/formControl';
import formLabel from '../styles/formLabel';

const ClearButton = memo((p) => (
	<IconButton onClick={p.onClick} size="large">
		<Clear/>
	</IconButton>
));

const styles = {
	formControlCompact: formControl.compact,
	formControlNormal: formControl.normal,
	formLabel,
};

class RadioGroup extends React.PureComponent {
	constructor(p) {
  	super(p);
  	this.handleChange = this.handleChange.bind(this);
  	this.handleClear = this.handleClear.bind(this);
  	this.handleBlur = this.handleBlur.bind(this);
	}
	handleChange(event) {
  	if (this.props.field) this.props.field.onChange(event);
  	if (this.props.onChange) this.props.onChange(event.target.value);
	}
	handleClear() {
		let value;
		if (this.props.field) this.props.form.setFieldValue(this.props.field.name, value);
  	if (this.props.onChange) this.props.onChange(value);
	}
	handleBlur() {
  	// take care of touched
  	if (this.props.field) this.props.form.setFieldTouched(this.props.field.name, true);
	}
	render() {
  	let {
			label,
			ClearButtonProps,
			showClearButton = true,
  		FormControlProps: {classes: fClasses = {}, ...FormControlProps} = {},
  		RadioGroupLabelProps,
  		FormHelperTextProps = {},
  		RadioLabelProps,
  		RadioProps,
  		RadioGroupProps: {row, ...RadioGroupProps} = {},
  		compact,
  		classes,
  		options,
  		...props
  	} = this.props;

		const {error, helperText, ...fp} = formikToMuiProps(props);

  	return (
  		<FormControl
  			error={error}
  			{...FormControlProps}
  			classes={{...fClasses, root: clsx(fClasses.root, classes[`formControl${compact ? 'Compact' : 'Normal'}`])}}
  		>
  			{label && (
  				<FormLabel
  					{...RadioGroupLabelProps}
  					classes={{...(RadioGroupLabelProps || {}).classes, ...(compact ? {root: classes.formLabel} : {})}}
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
  			<MuiRadioGroup
  				{...RadioGroupProps}
  				row={row || compact}
  				{...fp}
  				onChange={this.handleChange}
  				onBlur={this.handleBlur}
  			>
  				{options.map((option, i) => (
  					<FormControlLabel
  						key={i}
							control={<Radio
								{...RadioProps}
								checked={fp.value === option.value}
							/>}
							{...RadioLabelProps}
							disabled={option.disabled ? true : false}
  						value={option.value}
  						label={option.label}
  					/>
					))}
  				{showClearButton && <FormControlLabel
						{...RadioLabelProps}
						control={<ClearButton {...ClearButtonProps} onClick={this.handleClear}/>}
  				/>}
  			</MuiRadioGroup>
  		</FormControl>
  	);
	}
}

export default withStyles(styles)(RadioGroup);
