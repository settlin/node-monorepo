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

// import React from 'react';
// import {useRMController} from './useRMController';
// import Slider from '../forms/Slider';

// export default function RHFSlider(props) {
// 	const {
// 		// eslint-disable-next-line no-unused-vars
// 		fieldState,
// 		// eslint-disable-next-line no-unused-vars
// 		formState,
// 		...rest
// 	} = useRMController(props);

// 	// const onChange = function(event, value) {
// 	// 	console.log('in rhf slider', value);
// 	// 	rest.onChange(event, value);
// 	// };

// 	return (
// 		<Slider
// 			{...rest}
// 			// onChange={onChange}
// 		/>
// 	);
// }
