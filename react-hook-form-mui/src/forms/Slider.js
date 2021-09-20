/* eslint-disable react/no-multi-comp */
import PropTypes from 'prop-types';
import React from 'react';
import {Typography, Slider, Grid, Tooltip, FormControl, FormLabel, FormHelperText} from '@material-ui/core';
import currencify from '../utils/currencify';

function ValueLabelComponent({children, value}) {
	return (
		<Tooltip arrow placement='top' title={value > 100000 ? currencify(value, {numberWithCommas: true}) : value}>
			{children}
		</Tooltip>
	);
}

ValueLabelComponent.propTypes = {
	children: PropTypes.element,
	value: PropTypes.string,
};

// eslint-disable-next-line react/prop-types
function SliderButton({totalStep, SliderProps = {}, FormControlProps = {}, helperText, label, showMarks = false, displayValue = 'auto', name, valueLabelFormat, minValue, value, setValue, maxValue, ...props}) {
	// console.log('props are', props);
	const handleChange = (event, newVal) => {
		setValue(name, newVal);
	};

	// const changeVal = (v) => {
	// 	return v + 5000;
	// };

	return (
		// <Grid style={{marginTop: '0.6rem'}}>
		// 	<Typography>
		// 		{label}
		// 	</Typography>
		// 	<Slider
		// 		className={SliderProps}
		// 		marks={showMarks}
		// 		max={maxValue}
		// 		min={minValue}
		// 		step={totalStep}
		// 		{...props}
		// 		ValueLabelComponent={ValueLabelComponent}
		// 		onChange={handleChange}
		// 		value={value}
		// 		valueLabelDisplay={displayValue}
		// 	/>
		// </Grid>
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
				// value={()=>changeVal(value)}
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
	SliderProps: PropTypes.object,
	totalStep: PropTypes.number,
};

export default SliderButton;
