import PropTypes from 'prop-types';
import React, {useState} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from './TextField';

function Select({
	options,
	optionsAsync,
	creatable,
	classes,
	name,
	components,
	multiple = false,
	native = false,
	InputLabelProps,
	SelectProps = {},
	children, // eslint-disable-line no-unused-vars
	...props
}) {
	const commonProps = {
		...props,
		isMulti: multiple,
		classes,
		name,
		components,
		onChange(v) {
			onChange && onChange(v);
		},
	};
	// console.log('common props are', props);
	// const [cacheOptions, setCacheOptions] = useState(true);

	const isNative = !multiple && native;
	// console.log('select', multiple, isNative, props);
	// if (optionsAsync) {
	// 	const {default: AsyncSelect} = creatable ? require('react-select/async-creatable') : require('react-select/async');

	// 	return (
	// 		<AsyncSelect
	// 			cacheOptions={cacheOptions}
	// 			defaultOptions={[]}
	// 			loadOptions={(val, cb) => optionsAsync(val, function(arr) {
	// 				if (!arr?.length) setCacheOptions(false);
	// 				cb(arr);
	// 			})}
	// 			{...commonProps}
	// 			{...props}
	// 		/>
	// 	);
	// }
	return (
		<TextField
			{...props}
			InputLabelProps={{
				...(isNative === true ? {shrink: true} : {}),
				...InputLabelProps,
			}}
			SelectProps={{
				...SelectProps,
				multiple,
				native: isNative,
			}}
			fullWidth
			multiple={multiple}
			select
		>
			{isNative
				? options.map((option, i) => (
					// eslint-disable-next-line react/no-array-index-key
					<option key={i} value={option.value}>
						{option.label}
					</option>
				))
				: options.map((option, i) => (
					// eslint-disable-next-line react/no-array-index-key
					<MenuItem key={i} value={option.value}>
						{option.label}
					</MenuItem>
				))}
		</TextField>
	);
}

Select.propTypes = {
	children: PropTypes.node,
	InputLabelProps: PropTypes.object,
	multiple: PropTypes.bool,
	native: PropTypes.bool,
	options: PropTypes.array,
	SelectProps: PropTypes.object,
};
Select.displayName = 'MUISelect';

export default Select;
