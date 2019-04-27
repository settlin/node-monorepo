import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from './TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'clsx';

const styles = () => ({
	root: {
		height: 32,
	},
});

const Select = ({
	options,
	multiple = false,
	native = false,
	InputLabelProps,
	SelectProps = {},
	children, // eslint-disable-line no-unused-vars
	classes,
	...props
}) => {
	const isNative = !multiple && native;
	if (props.compact) SelectProps.classes = {...SelectProps.classes, root: classNames((SelectProps.classes || {}).root, classes.root)};
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

export default withStyles(styles)(Select);
