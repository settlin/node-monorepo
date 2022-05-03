import PropTypes from 'prop-types';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';
import {Chip, InputLabel, FormControl, FormHelperText} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

function SelectChip({
	options,
	multiple = false,
	label,
	name,
	setValue,
	helperText,
	ChipProps = {},
	InputLabelProps = {},
	...props
}) {
	const initOptions = [...options];
	const handleDelete = (value) => {
		setValue(name, props.value.filter(v => v !== value));
	};
	return (
		<FormControl>
			<InputLabel {...InputLabelProps}>
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
							<Chip className={ChipProps} deleteIcon={<CancelIcon/>} key={val} label={initOptions.find(o => o.value === val)?.label} onDelete={()=>handleDelete(val)} onMouseDown={(e) => e.stopPropagation()} style={{marginLeft: '1%'}}/>
						))) : (
							<Chip
								className={ChipProps}
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
	ChipProps: PropTypes.object,
	compact: PropTypes.bool,
	helperText: PropTypes.string,
	InputLabelProps: PropTypes.object,
	label: PropTypes.string,
	multiple: PropTypes.bool,
	name: PropTypes.string,
	native: PropTypes.bool,
	options: PropTypes.array,
	SelectProps: PropTypes.object,
	setValue: PropTypes.func,
	value: PropTypes.string,
};
SelectChip.displayName = 'MUISelectWithChip';

export default SelectChip;
