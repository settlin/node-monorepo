import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import Checkbox from '../forms/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import {makeStyles} from '@material-ui/core/styles';
import formControl from '../styles/formControl';
import formLabel from '../styles/formLabel';

const styles = makeStyles({
	formControlCompact: formControl.compact,
	formControlNormal: formControl.normal,
	formLabel,
});

function CheckboxGroup(props) {
	const classesStyle = styles();
	const handleChange = (event, v) => {
		const {name, value = [], setValue, onChange} = props;

		const target = event.currentTarget;
		let valueArray = [...value] || [];

		if (target.checked) valueArray.push(v);
		else valueArray.splice(valueArray.indexOf(v), 1);
		if (setValue) setValue(name, valueArray);
		if (onChange) onChange(valueArray);
	};
	const handleBlur = () => {
		if (props.onBlur) props.onBlur();
	};
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
		setValue,
	} = props;
	return (
		<FormControl
			error={error}
			{...FormControlProps}
			classes={{...fClasses, root: clsx(fClasses.root, classesStyle[`formControl${compact ? 'Compact' : 'Normal'}`])}}
		>
			{label && (
				<FormLabel
					{...FormLabelProps}
					classes={{...(FormLabelProps || {}).classes, ...(compact ? {root: classesStyle.formLabel} : {})}}
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

					<Checkbox
						key={i}
						{...option}
						{...CheckboxProps}
						checked={value.includes(option.value)}
						name={name}
						// eslint-disable-next-line react/jsx-handler-names
						onBlur={handleBlur}
						onChange={() => {
							if (value.includes(option.value)) {
								const nextValue = value.filter(v => v !== option.value);
								setValue(name, nextValue);
							}
							else {
								const nextValue = value.concat(option.value);
								setValue(name, nextValue);
							}
						}}
					/>
				))}
			</FormGroup>
		</FormControl>
	);
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

export default CheckboxGroup;
