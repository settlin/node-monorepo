import React, {useState} from 'react';
import {Input} from '../../src';
import RHFAutocomplete from '../../src/react-hook-form/RHFAutocomplete';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import PropTypes from 'prop-types';
import {useDebounceCallback} from '@react-hook/debounce';
import {useFormContext} from 'react-hook-form';

// eslint-disable-next-line no-unused-vars
export default function Autocomplete({optionsAsync, options: optionsSync, isClearable, compact, selectComponents, type, label, AutocompleteProps, ...props}) {
	const {control} = useFormContext();
	const [inputValue, setInputValue] = useState('');
	const [options, setOptions] = useState([]);
	const handleChange = (event, value) => {
		setInputValue(value);
	};

	const optionsAsyncDebounced = useDebounceCallback(optionsAsync, 200);
	// const optionsAsyncDebounced = React.useCallback((active) => debounce(() => optionsAsync(inputValue, setOptions, active)), [inputValue, setOptions, optionsAsync]);

	React.useEffect(() => {
		let active = true;

		if (inputValue === '') {
			setOptions([]);
			// eslint-disable-next-line no-undefined
			return undefined;
		}

		optionsAsyncDebounced(inputValue, setOptions, active);

		return () => {
			active = false;
		};
	}, [inputValue, optionsAsyncDebounced]);

	return (
		<RHFAutocomplete
			autoComplete
			control={control}
			filterOptions={(x) => x}
			getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
			includeInputInList
			name='fruits'
			onChange={handleChange}
			options={optionsSync || options}
			renderInput={(params) => (
				<Input
					{...props}
					{...params}
					InputProps={{...params.InputProps, ...props.InputProps}}
					fullWidth
					placeholder='Auto Complete'
					rhf={false}
				/>
			)}
			// value={inputValue}
			// renderOption={(option) => {
			// 	option.inputValue = inputValue;
			// 	var matches = match(option.label, inputValue);
			// 	const parts = parse(option.label, matches);

			// 	if (selectComponents?.Option) return <selectComponents.Option {...option} parts={parts}/>;
			// 	return (
			// 		<Grid alignItems='center' container key={option.value}>
			// 			<Grid item xs>
			// 				<Typography color='textSecondary' variant='body2'>
			// 					{parts.map((part) => (
			// 						<span key={part.text} style={{fontWeight: part.highlight ? 700 : 400}}>
			// 							{part.text}
			// 						</span>
			// 					))}
			// 				</Typography>
			// 			</Grid>
			// 		</Grid>
			// 	);
			// }}
			{...AutocompleteProps}
		/>
	);
}

Autocomplete.propTypes = {
	AutocompleteProps: PropTypes.object,
	compact: PropTypes.bool,
	InputProps: PropTypes.object,
	isClearable: PropTypes.bool,
	label: PropTypes.string,
	options: PropTypes.object,
	optionsAsync: PropTypes.func,
	selectComponents: PropTypes.object,
	type: PropTypes.string,
};
