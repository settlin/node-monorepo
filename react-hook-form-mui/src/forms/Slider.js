/* eslint-disable react/no-multi-comp */
import PropTypes from 'prop-types';
import React from 'react';
import {Slider, Tooltip, FormControl, FormLabel, FormHelperText} from '@mui/material';

function ValueLabelComponent({children, value}) {
	return (
		<Tooltip arrow placement='top' title={value}>
			{children}
		</Tooltip>
	);
}

ValueLabelComponent.propTypes = {
	children: PropTypes.element,
	value: PropTypes.string,
};

// eslint-disable-next-line react/prop-types
function SliderButton({totalStep, SliderProps, FormControlProps = {}, helperText, label, showMarks = false, displayValue = 'auto', name, valueLabelFormat, minValue, value, setValue, maxValue, ...props}) {
	const handleChange = (event, newVal) => {
		setValue(name, newVal);
	};

	return (
		<FormControl {...FormControlProps}>
			<FormLabel>
				{label}
			</FormLabel>
			<Slider
				className={SliderProps}
				marks={showMarks}
				max={maxValue}
				min={minValue}
				step={totalStep}
				{...props}
				ValueLabelComponent={ValueLabelComponent}
				onChange={handleChange}
				value={value}
				valueLabelDisplay={displayValue}
				valueLabelFormat={(v)=>valueLabelFormat(v)}
			/>
			<FormHelperText>
				{helperText}
			</FormHelperText>
		</FormControl>
	);
}

SliderButton.propTypes = {
	displayValue: PropTypes.string,
	label: PropTypes.string,
	maxValue: PropTypes.number,
	minValue: PropTypes.number,
	name: PropTypes.string,
	setValue: PropTypes.func,
	showMarks: PropTypes.bool,
	SliderProps: PropTypes.string,
	totalStep: PropTypes.number,
};

export default SliderButton;
