import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from './TextField';

function Select({
	options,
	multiple = false,
	native = false,
	InputLabelProps,
	SelectProps = {},
	children, // eslint-disable-line no-unused-vars
	...props
}) {
	const isNative = !multiple && native;
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
			multiple={multiple}
			select
		>
			{isNative
				? options.map((option, i) => (
					<option key={i} value={option.code}>
						{option.name}
					</option>
				))
				: options.map((option, i) => (
					<MenuItem key={i} value={option.code}>
						{option.name}
					</MenuItem>
				))}
		</TextField>
	);
}
Select.displayName = 'MUISelect';

export default Select;
