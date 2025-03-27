import React, {memo} from 'react';
import Radio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import MuiFormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import MuiFormLabel from '@mui/material/FormLabel';
import formikToMuiProps from '../forms/formikToMuiProps';
import { styled } from '@mui/material/styles';
import Clear from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import clsx from 'clsx';

const ClearButton = memo((p) => (
	<IconButton onClick={p.onClick} size="large">
		<Clear/>
	</IconButton>
));

const StyledFormControl = styled(MuiFormControl, {
  shouldForwardProp: (prop) => prop !== 'compact',
})(({ compact }) => ({
  ...(compact ? {
    flexDirection: 'row',
    marginBottom: '8px',
    alignItems: 'center',
  } : {
    marginTop: '16px',
  })
}));

const StyledFormLabel = styled(MuiFormLabel)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  marginRight: '20px',
});



const RadioGroup = ({
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
}) => {
	const {error, helperText, ...fp} = formikToMuiProps(props);

	const handleChange = (event) => {
		if (props.field) props.field.onChange(event);
		if (props.onChange) props.onChange(event.target.value);
	};

	const handleClear = () => {
		let value;
		if (props.field) props.form.setFieldValue(props.field.name, value);
		if (props.onChange) props.onChange(value);
	};

	const handleBlur = () => {
		if (props.field) props.form.setFieldTouched(props.field.name, true);
	};

	return (
		<StyledFormControl
			error={error}
			{...FormControlProps}
			compact={compact}
			className={clsx(fClasses.root)}
		>
			{label && (
				<StyledFormLabel
					{...RadioGroupLabelProps}
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
			<MuiRadioGroup
				{...RadioGroupProps}
				row={row || compact}
				{...fp}
				onChange={handleChange}
				onBlur={handleBlur}
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
					control={<ClearButton {...ClearButtonProps} onClick={handleClear}/>}
				/>}
			</MuiRadioGroup>
		</StyledFormControl>
	);
};

export default RadioGroup;

