import React from 'react';
import {useRMController} from './useRMController';
import Slider from '../forms/Slider';

export default function RHFSlider(props) {
	const p = useRMController(props);

	return (
		<Slider
			{...p}
		/>
	);
}
