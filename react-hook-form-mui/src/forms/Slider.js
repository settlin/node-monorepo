import PropTypes from 'prop-types';
import React from 'react';
import {Typography, Slider} from '@material-ui/core';

function SliderButton({step, label, marks, minValue, maxValue, ...props}) {
	console.log('control here', props, props.value);
	return (
		<>
			<Typography>
				{label}
			</Typography>
			<Slider marks={marks} max={maxValue} min={minValue} step={step} {...props} value={props.value} valueLabelDisplay='auto'/>
		</>
	);
}

SliderButton.propTypes = {
	label: PropTypes.string,
	marks: PropTypes.bool,
	maxValue: PropTypes.number,
	minValue: PropTypes.number,
	step: PropTypes.number,
};

export default SliderButton;
