import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

import Checkbox from '../forms/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import withStyles from '@material-ui/core/styles/withStyles';
import formControl from '../styles/formControl';
import formLabel from '../styles/formLabel';

const styles = {
	formControlCompact: formControl.compact,
	formControlNormal: formControl.normal,
	formLabel,
};

class CheckboxGroup extends React.Component {
	constructor(p) {
		super(p);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}
	handleChange(event, v) {
		const {name, value = [], setFieldValue, onChange} = this.props;

		const target = event.currentTarget;
		let valueArray = [...value] || [];

		if (target.checked) valueArray.push(v);
		else valueArray.splice(valueArray.indexOf(v), 1);
		if (setFieldValue) setFieldValue(name, valueArray);
		if (onChange) onChange(valueArray);
	}
	handleBlur() {
		if (this.props.onBlur) this.props.onBlur();
	}
	render() {
		let {
			name,
			options,
			label,
			compact,
			FormControlProps: {classes: fClasses = {}, ...FormControlProps} = {},
			FormLabelProps,
			FormHelperTextProps = {},
			CheckboxProps,
			FormGroupProps,
			classes,
			Field = () => <span/>,
			value,
			error,
			helperText,
			...props
		} = this.props;

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
								className={FormHelperTextProps.className}
								error={Boolean(errStr)}
							>
								{helperText}
							</FormHelperText>
						)}
					</FormLabel>
				)}
				<FormGroup {...FormGroupProps} row={(FormGroupProps || {}).row || compact}>
					{options.map((option, i) => (
						<Field
							// eslint-disable-next-line react/no-array-index-key
							key={i}
							name={name}
							{...props}
						>
							{({form}) => (
								<Checkbox
									{...option}
									{...CheckboxProps}
									checked={value.includes(option.value)}
									name={name}
									// eslint-disable-next-line react/jsx-handler-names
									onBlur={this.handleBlur}
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
			</FormControl>
		);
	}
}

CheckboxGroup.propTypes = {
	CheckboxProps: PropTypes.object,
	classes: PropTypes.object,
	ClearButtonProps: PropTypes.object,
	compact: PropTypes.bool,
	error: PropTypes.bool,
	Field: PropTypes.func,
	FormControlLabelProps: PropTypes.object,
	FormControlProps: PropTypes.object,
	FormGroupProps: PropTypes.object,
	FormHelperTextProps: PropTypes.object,
	FormLabelProps: PropTypes.object,
	helperText: PropTypes.node,
	label: PropTypes.node,
	name: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	options: PropTypes.array,
	RadioGroupLabelProps: PropTypes.object,
	RadioGroupProps: PropTypes.object,
	RadioLabelProps: PropTypes.object,
	RadioProps: PropTypes.object,
	setFieldValue: PropTypes.func,
	showClearButton: PropTypes.bool,
	value: PropTypes.array,
};

export default withStyles(styles)(CheckboxGroup);
