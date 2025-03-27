import React from 'react';
import clsx from 'clsx';

import ToggleButton from '@mui/material/ToggleButton';
import MuiToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import formikToMuiProps from '../forms/formikToMuiProps';
import { styled } from '@mui/material/styles';
import formControl from '../styles/formControl';
import formLabel from '../styles/formLabel';

const StyledFormControl = styled(FormControl, {
  shouldForwardProp: prop => prop !== 'compact',
})(({ compact }) => ({
  ...(compact ? formControl.compact : formControl.normal),
}));

const StyledFormLabel = styled(FormLabel)(formLabel);

const StyledToggleButtonGroup = styled(MuiToggleButtonGroup)({
  marginTop: '8px',
  width: 'max-content',
});

const StyledToggleButton = styled(ToggleButton)({
  height: '100%',
});

const ToggleButtonGroup = (props) => {
	const handleChange = (event, value) => {
		if (props.field) props.form.setFieldValue(props.field.name, value);
		if (props.onChange) props.onChange(event.currentTarget.value);
	};

	const handleBlur = () => {
		// take care of touched
		if (props.field) props.form.setFieldTouched(props.field.name, true);
	};

	let {
		label,
		FormControlProps: {classes: fClasses = {}, ...FormControlProps} = {},
		FormLabelProps,
		FormHelperTextProps = {},
		ToggleButtonProps = {},
		ToggleButtonGroupProps: {classes: tClasses = {}, ...ToggleButtonGroupProps} = {},
		compact,
		options,
		exclusive = true,
		...p
	} = props;

	const {error, helperText, ...fp} = formikToMuiProps(p);

	return (
		<StyledFormControl
			error={error}
			{...FormControlProps}
			compact={compact}
		>
			{label && (
				<StyledFormLabel
					{...FormLabelProps}
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
				</StyledFormLabel>
			)}
			{compact ? (
				<StyledToggleButtonGroup
					{...ToggleButtonGroupProps}
					{...fp}
					exclusive={exclusive}
					onChange={handleChange}
					onBlur={handleBlur}
				>
					{options.map(option => (
						<StyledToggleButton
							key={option.value}
							{...ToggleButtonProps}
							value={option.value}
						>
							{option.label}
						</StyledToggleButton>
					))}
				</StyledToggleButtonGroup>
			) : (
				<StyledToggleButtonGroup
					{...ToggleButtonGroupProps}
					{...fp}
					exclusive={exclusive}
					onChange={handleChange}
					onBlur={handleBlur}
				>
					{options.map(option => (
						<StyledToggleButton
							key={option.value}
							{...ToggleButtonProps}
							value={option.value}
						>
							{option.label}
						</StyledToggleButton>
					))}
				</StyledToggleButtonGroup>
			)}
		</StyledFormControl>
	);
};

export default ToggleButtonGroup;
