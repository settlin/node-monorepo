import React, {useState} from 'react';
import Input from '../Input';
import MuiAutocomplete, {createFilterOptions} from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import PropTypes from 'prop-types';
import {useDebounceCallback} from '@react-hook/debounce';

export default function Autocomplete({
	optionsAsync,
	options: optionsSync,
	isClearable, // eslint-disable-line no-unused-vars
	compact,
	label,
	type, // eslint-disable-line no-unused-vars
	error,
	inputRef,
	helperText,
	container,
	selectComponents,
	InputProps,
	placeholder,
	multiple,
	inputProps,
	...props
}) {
	const [inputValue, setInputValue] = useState('');
	const [options, setOptions] = useState([]);
	const filterOption = createFilterOptions();

	const optionsAsyncDebounced = useDebounceCallback(optionsAsync, 200);
	console.log('optionsAsyncDebounced', optionsAsyncDebounced);
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
		<MuiAutocomplete
			autoComplete
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
			getOptionLabel={(option) =>
				typeof option === 'string' ? option : option.label
			}
			getOptionSelected={(option, value) =>
				Array.isArray(option)
					? option.find(o => o.label === value.label)
					: option.label === value.label
			}
			includeInputInList
			multiple
			onInputChange={(event, newInputValue) => {
				console.log('val', newInputValue);
				setInputValue(newInputValue);
			}}
			// onInputChange={optionsAsync}
			options={optionsSync || options}
			renderInput={(params) => (
				<Input
					{...{
						error,
						helperText: helperText,
						placeholder: placeholder,
						inputRef,
						label, // causes problem - TODO
						compact,
						container,
					}}
					{...params}
					InputLabelProps={{...params.InputLabelProps, className: props.InputLabelProps?.classes}}
					InputProps={{...params.InputProps, ...InputProps}}
					fullWidth
					inputProps={{...params.inputProps, className: params.inputProps.className + ' ' + 'mui'}}
					rhf={false}
				/>
			)}
			renderOption={(option) => {
				console.log('OPtions', option);
				option.inputValue = inputValue;
				var matches = match(option.label, inputValue);
				const parts = parse(option.label, matches);
				console.log('matches', matches, parts);
				if (selectComponents?.Option) return <selectComponents.Option {...option} parts={parts}/>;
				return (
					<Grid alignItems='center' container key={option.value}>
						<Grid item xs>
							<Typography color='textSecondary' variant='body2'>
								{parts.map((part) => (
									<span
										key={part.text}
										style={{fontWeight: part.highlight ? 700 : 400}}
									>
										{part.text}
									</span>
								))}
							</Typography>
						</Grid>
					</Grid>
				);
			}}
			{...props}
			{...(multiple
				? {}
				: {
					onChange(event, newValue, reason, details) {
						props.onChange(event, newValue.slice(-1), reason, details);
					},
				}
			)}
		/>
	);
}

Autocomplete.propTypes = {
	compact: PropTypes.bool,
	container: PropTypes.object,
	error: PropTypes.bool,
	helperText: PropTypes.string,
	InputProps: PropTypes.object,
	inputProps: PropTypes.object,
	inputRef: PropTypes.func,
	isClearable: PropTypes.bool,
	label: PropTypes.string,
	multiple: PropTypes.bool,
	onChange: PropTypes.func,
	options: PropTypes.object,
	optionsAsync: PropTypes.func,
	placeholder: PropTypes.string,
	selectComponents: PropTypes.object,
	type: PropTypes.string,
};
