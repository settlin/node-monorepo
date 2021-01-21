import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import Flatpickr from './Flatpickr';
import Input from '../../src/Input';
import formikToMuiProps from '../../src/forms/formikToMuiProps';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import dateRanges from './dateRanges';
import moment from 'moment';
import 'flatpickr/dist/themes/material_red.css';
import './flatpickr.css';

const styles = {
	color: 'rgb(204, 204, 204)',
	padding: '4px',
	transition: 'color 150ms ease 0s',
};

export default ({
	children, // eslint-disable-line no-unused-vars
	fullWidth = true, // eslint-disable-line no-unused-vars
	variant = 'inline', // eslint-disable-line no-unused-vars
	type,
	format = type === 'date' ? 'DD/MM/YYYY' : 'DD/MM/YYYY hh:mm a', // eslint-disable-line no-unused-vars
	fast, // eslint-disable-line no-unused-vars
	validate, // eslint-disable-line no-unused-vars
	compact,
	label,
	onChange, // eslint-disable-line no-unused-vars
	picker, // eslint-disable-line no-unused-vars
	range,
	maxDate,
	options,
	defaultValue,
	InputProps = {},
	InputLabelProps,
	InputAdornmentProps,
	TextFieldProps,
	...p}) => {
	const fp = formikToMuiProps({...p, type: 'text'});

	const onClear = () => p.form.setFieldValue(fp.name, []);
	onChange = onChange || (v => v[0] && (!range || v[1]) && p.form.setFieldValue(fp.name, range ? v : v[0]));

	if (compact) {
		InputProps = {...InputProps, ...(label ? {startAdornment: <InputAdornment style={{whiteSpace: 'nowrap', fontSize: '0.8rem', opacity: 0.85}} position='start' disablePointerEvents={true} {...InputAdornmentProps}>{label}</InputAdornment>} : {})};
		label = '';
	}
	InputProps.endAdornment = <InputAdornment position='end'>
		<IconButton onClick={onClear} size='small' style={styles}><Close fontSize='small'/></IconButton>
	</InputAdornment>;

	options = {disableMobile: true, dateFormat: 'M d \'y', plugins: [], defaultDate: defaultValue, ...options};
	if (range) {
		options.mode = 'range';
		options.plugins = [dateRanges];
	}

	return <Flatpickr
		{...{maxDate, options, onChange}}
		render={
			({}, ref) => {
				return <Input formik={false} {...fp}
					{...{
						InputProps,
						InputLabelProps,
						...TextFieldProps,
					}}
					defaultValue={defaultValue}
					value={range ? (fp.value || []).map(v => moment(v).format("MMM DD 'YY")).join(' to ') : fp.value ? moment(fp.value).format("MMM DD 'YY") : ''}
					inputRef={ref}
				/>;
			}
		}
	/>;
};
