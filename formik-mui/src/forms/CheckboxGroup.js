import React from 'react';
import Checkbox from '../forms/Checkbox';
import MuiFormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MuiFormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import {connect, getIn} from 'formik';
import { styled } from '@mui/material/styles';
import formControl from '../styles/formControl';
import formLabel from '../styles/formLabel';

const StyledFormControl = styled(MuiFormControl, {
  shouldForwardProp: (prop) => prop !== 'compact',
})(({ compact }) => ({
  ...(compact ? formControl.compact : formControl.normal)
}));

const StyledFormLabel = styled(MuiFormLabel)({
  ...formLabel
});

const CheckboxGroup = ({name, formik: {errors, values, touched, dirty, setFieldTouched, setFieldValue} = {}, options, label, compact, FormControlProps = {}, FormLabelProps = {}, FormHelperTextProps = {}, CheckboxProps = {}, FormGroupProps = {}}) => {
	const value = getIn(values, name) || [];
	const error = getIn(errors, name);
	const helperText = (dirty || (name && getIn(touched, name)) && typeof error === 'string' ? error : null);

	return (
		<StyledFormControl
			error={Boolean(helperText)}
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
							error={Boolean(helperText)}
							className={FormHelperTextProps.className}
						>
							{helperText}
						</FormHelperText>
					)}
				</StyledFormLabel>
			)}
			<FormGroup {...FormGroupProps} row={(FormGroupProps || {}).row || compact}>
				{options.map((option, i) => (
					<Checkbox key={i}
						{...option}
						{...CheckboxProps}
						name={name}
						checked={value.includes(option.value)}
						onChange={() => {
							if (value.includes(option.value)) {
								const nextValue = value.filter(v => v !== option.value);
								setFieldValue(name, nextValue);
							}
							else {
								const nextValue = value.concat(option.value);
								setFieldValue(name, nextValue);
							}
						}}
						onBlur={() => setFieldTouched(name, true)}
					/>
				))}
			</FormGroup>
		</StyledFormControl>
	);
};

export default connect(CheckboxGroup);
