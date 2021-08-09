import PropTypes from 'prop-types';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MuiSelect from '@material-ui/core/Select';
import {Chip, InputLabel, FormControl, FormHelperText} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

function SelectChip({
	options,
	multiple = false,
	native = false,
	label,
	name,
	setFieldValue,
	helperText,
	...props
}) {
	const initOptions = [...options];
	const handleDelete = (value) => {
		setFieldValue(name, props.value.filter(v => v !== value));
	};
	return (
		<FormControl>
			<InputLabel>
				{label}
			</InputLabel>
			<MuiSelect
				{...props}
				fullWidth
				inputProps
				{...label}
				multiple={multiple}
				renderValue={(value) => (
					Array.isArray(value) ?
						(value?.map(val => (
							<Chip deleteIcon={<CancelIcon/>} key={val} label={initOptions.find(o => o.value === val)?.label} onDelete={()=>handleDelete(val)} onMouseDown={(e) => e.stopPropagation()} style={{marginLeft: '1%'}}/>
						))) : (
							<Chip
								label={initOptions.find(o => o.value === value)?.label}
							/>
						)
				)}
			>
				{options.map((option, i) => (
				// eslint-disable-next-line react/no-array-index-key
					<MenuItem key={i} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</MuiSelect>
			<FormHelperText>
				{helperText}
			</FormHelperText>
		</FormControl>
	);
}

SelectChip.propTypes = {
	compact: PropTypes.bool,
	helperText: PropTypes.string,
	InputLabelProps: PropTypes.object,
	label: PropTypes.string,
	multiple: PropTypes.bool,
	name: PropTypes.string,
	native: PropTypes.bool,
	options: PropTypes.array,
	SelectProps: PropTypes.object,
	setFieldValue: PropTypes.func,
};
SelectChip.displayName = 'MUISelectWithChip';

export default SelectChip;
