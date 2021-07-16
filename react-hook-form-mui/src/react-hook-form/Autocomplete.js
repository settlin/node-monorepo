import React, {useEffect} from 'react';
import {useRMController} from './useRMController';
import MUIAutocomplete, {createFilterOptions} from '@material-ui/lab/Autocomplete';
import Input from '../Input';
import Chip from '@material-ui/core/Chip';

export default function RHFAutocomplete(props) {
	const {
		ref,
		// eslint-disable-next-line no-unused-vars
		fieldState,
		// eslint-disable-next-line no-unused-vars
		formState,
		options,
		name,
		optionsAsync,
		...rest
	} = useRMController(props);
	// eslint-disable-next-line no-unused-vars
	const onChange = function(event, value, reason) {
		rest.onChange(value);
	};

	const filterOption = createFilterOptions();
	return (
		<MUIAutocomplete
			inputRef={ref}
			multiple
			onInputChange={optionsAsync}
			options={options}
			renderInput={(params) => (
				<Input name={name} rhf={false} {...params} InputLabelProps={{...params.InputLabelProps, className: props.InputLabelProps?.classes}} inputProps={{...params.inputProps, className: params.inputProps.className + ' ' + 'mui'}} label={rest.label}/>
			)}
			{...rest}
			filterOptions={(values, params) => {
				const filter = filterOption(values, params);
				if (params.inputValue !== '') {
					filter.push({
						label: params.inputValue,
						value: params.inputValue.toLowerCase(),
					});
				}
				return filter;
			}}
			getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
			getOptionSelected={(option, value) => option.value === value.value}
			onChange={onChange}
		/>
	);
}
