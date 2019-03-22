import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from './TextField';

const Select = ({
	options,
	multiple = false,
	native = false,
	InputLabelProps,
	SelectProps,
	children, // eslint-disable-line no-unused-vars
	...props
}) => {
	const isNative = !multiple && native;
	return (
		<TextField
			{...props}
			multiple={multiple}
			select
			InputLabelProps={{
				...(isNative === true ? {shrink: true} : {}),
				...InputLabelProps,
			}}
			SelectProps={{
				...SelectProps,
				multiple,
				native: isNative,
			}}
		>
			{isNative
				? options.map((option, i) => (
					<option key={i} value={option.value}>
						{option.label}
					</option>
				))
				: options.map((option, i) => (
					<MenuItem key={i} value={option.value}>
						{option.label}
					</MenuItem>
				))}
		</TextField>
	);
};
Select.displayName = 'FormikMaterialUISelect';

export default Select;
