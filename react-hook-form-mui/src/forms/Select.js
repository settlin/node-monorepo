import PropTypes from 'prop-types';
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
