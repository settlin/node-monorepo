import React from 'react';
import {useRMController} from './useRMController';
import Slider from '../forms/Slider';

export default function RHFSlider(props) {
	const p = useRMController(props);
	const onChange = function(event, value, reason) {
		console.log('in rhf slider', value);
		props.onChange(event, value);
	};
	return (
		<Slider
			{...p}
			onChange={onChange}
		/>
	);
}
