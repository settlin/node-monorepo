import React from 'react';
import cx from 'classnames';

import Checkbox from '../forms/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import {connect, getIn, Field} from 'formik';
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

class CheckboxGroup extends React.Component {
	constructor(p) {
		super(p);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}
	handleChange(event, v) {
  	const {name, value = [], formik: {setFieldValue}} = this.props;

  	const target = event.currentTarget;
  	let valueArray = [...value] || [];

  	if (target.checked) valueArray.push(v);
  	else valueArray.splice(valueArray.indexOf(v), 1);
  	setFieldValue(name, valueArray);
	}
	handleBlur() {
		// take care of touched
		if (this.props.field) this.props.form.setFieldTouched(this.props.field.name, true);
	}
	render() {
  	const {
  		name,
  		formik: {errors, values, touched},
  		options,
  		label,
  		row,
  		compact,
  		FormControlProps,
  		FormLabelProps,
  		FormHelperTextProps,
  		CheckboxProps,
  		FormGroupProps,
  		classes,
  		...props
  	} = this.props;

  	const value = getIn(values, name) || [];
  	const error = getIn(errors, name);
  	const errStr = (getIn(touched, name) && typeof error === 'string' ? error : null);
  	const helperText = errStr || props.helperText;

  	return (
  		<FormControl
  			error={Boolean(errStr)}
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
  			<FormGroup {...FormGroupProps} row={(FormGroupProps || {}).row || compact}>
  				{options.map((option, i) => (
  					<Field key={i}
  						name={name}
  						{...props}
  					>
  						{({field, form}) => (
  							<Checkbox
  								{...option}
  								{...CheckboxProps}
  								field={field}
  								form={form}
  								name={name}
  								checked={value.includes(option.value)}
  								onChange={() => {
  									if (value.includes(option.value)) {
  										const nextValue = value.filter(v => v !== option.value);
  										form.setFieldValue(name, nextValue);
  									}
 										else {
  										const nextValue = value.concat(option.value);
  										form.setFieldValue(name, nextValue);
  									}
  								}}
  							/>
  						)}
  					</Field>
  				))}
  			</FormGroup>
  			{helperText && (
  				<FormHelperText
  					{...FormHelperTextProps}
  				>
  					{helperText}
  				</FormHelperText>
  			)}
  		</FormControl>
  	);
	}
}

export default connect(withStyles(styles)(CheckboxGroup));
