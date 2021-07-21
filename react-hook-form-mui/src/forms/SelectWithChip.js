import PropTypes from 'prop-types';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MuiSelect from '@material-ui/core/Select';
import {Chip, InputLabel, InputAdornment} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

function SelectChip({
	options,
	multiple = false,
	native = false,
	label,
	name,
	setFieldValue,
	InputLabelProps,
	...props
}) {
	const initOptions = [...options];
	const handleDelete = (value) => {
		setFieldValue(name, props.value.filter(v => v !== value));
	};

	return (
		<MuiSelect
			{...props}
			{...label
				? {
					startAdornment: (
						<InputAdornment position='start'>
							<InputLabel className={InputLabelProps.classes}>
								{label}
							</InputLabel>
						</InputAdornment>
					),
				}
				: {}
			}
			fullWidth
			inputProps
			multiple={multiple}
			renderValue={(value) => (
				Array.isArray(value) ?
					(value?.map(val => (
						<Chip color='primary' deleteIcon={<CancelIcon/>} key={val} label={initOptions.find(o => o.value === val)?.label} onDelete={()=>handleDelete(val)} onMouseDown={(e) => e.stopPropagation()} size='small' style={{marginLeft: '1%'}}/>
					))) : (
						<Chip
							color='primary'
							label={initOptions.find(o => o.value === value)?.label}
							size='small'
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
	);
}

SelectChip.propTypes = {
	InputLabelProps: PropTypes.object,
	multiple: PropTypes.bool,
	native: PropTypes.bool,
	options: PropTypes.array,
	SelectProps: PropTypes.object,
};
SelectChip.displayName = 'MUISelectWithChip';

export default SelectChip;
