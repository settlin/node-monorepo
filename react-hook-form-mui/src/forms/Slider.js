/* eslint-disable react/no-multi-comp */
import PropTypes from 'prop-types';
import React from 'react';
import {Typography, Slider, Grid, Tooltip, InputLabel, FormControl, FormHelperText} from '@material-ui/core';
import currencify from '../utils/currencify';

function ValueLabelComponent({children, value}) {
	return (
		<Tooltip arrow placement='top' title={value > 100000 ? currencify(value, {numberWithCommas: true}) : value}>
			{children}
		</Tooltip>
	);
}

function SliderButton({totalStep, helperText, SliderProps = {}, label, marks, displayValue, name, minValue, value, setValue, maxValue, ...props}) {
	const handleChange = (event, newVal) => {
		setValue(name, newVal);
	};

	return (
		<Grid>
			<Typography>
				{label}
			</Typography>
			<Slider
				className={SliderProps}
				marks={marks}
				max={maxValue}
				min={minValue}
				step={totalStep}
				{...props}
				ValueLabelComponent={ValueLabelComponent}
				onChange={handleChange}
				value={value}
				valueLabelDisplay={displayValue}
			/>
		</Grid>
	);
	// return (
	// 	<FormControl>
	// 		<InputLabel>
	// 			{label}
	// 		</InputLabel>
	// 		<Slider
	// 			className={SliderProps}
	// 			marks={marks}
	// 			max={maxValue}
	// 			min={minValue}
	// 			step={totalStep}
	// 			{...props}
	// 			ValueLabelComponent={ValueLabelComponent}
	// 			onChange={handleChange}
	// 			value={value}
	// 			valueLabelDisplay={displayValue}
	// 		/>
	// 		<FormHelperText>
	// 			{helperText}
	// 		</FormHelperText>
	// 	</FormControl>
	// );
}

SliderButton.propTypes = {
	displayValue: PropTypes.string,
	label: PropTypes.string,
	marks: PropTypes.bool,
	maxValue: PropTypes.number,
	minValue: PropTypes.number,
	name: PropTypes.string,
	setValue: PropTypes.func,
	SliderProps: PropTypes.object,
	totalStep: PropTypes.number,
};

export default SliderButton;
