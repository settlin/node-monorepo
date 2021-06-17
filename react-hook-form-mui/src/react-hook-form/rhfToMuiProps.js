import React from 'react';
import isDate from '../utils/isDate';
import {get} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';

export function rhfToMuiProps({
	field = {},
	fieldState,
	formState,
	disabled = false,
	error,
	checked,
	defaultValue,
	...props
}) {
	const {name, onChange} = field;
	const {errors = {}, touchedFields = {}, dirtyFields = {}, isSubmitting} = formState;

	const fErr = name && get(errors, name);
	const fieldTouched = (name && get(touchedFields, name));
	const fieldDirty = (name && get(dirtyFields, name));


	// const fieldError = (fieldDirty || fieldTouched) && fErr
	// 	? 
	// 	<ErrorMessage errors={errors} message={fErr.type === 'required' ? fErr.message || 'Required' 
	// 	: 
	// 	fErr.message || null} name={name}/>
	// 	: null;

	const extraProps = {};

	if (onChange) {
		field.value = defaultValue || field.value;

		switch (props.type) {
			case 'autocomplete':
			case 'select':
				field.value = typeof field.value === 'undefined' ? props.multiple ? [] : '' : field.value;
				break;

			case 'checkbox':
			case 'radio':
				field.value = typeof field.value === 'undefined' ? '' : field.value === true ? 'checked' : field.value || '';
				break;

			case 'switch':
				field.value = typeof field.value === 'undefined' ? false : Boolean(field.value);
				break;

			case 'date':
				field.value = typeof field.value === 'undefined' ? '' : isDate(field.value) ? field.value.toISOString().split('T')[0] : field.value;
				break;

			default: field.value = typeof field.value === 'undefined' ? '' : field.value;
		}
	}
	switch (props.type) {
		case 'checkbox':
		case 'switch':
		case 'radio':
			extraProps.checked = typeof checked !== 'undefined' ? checked : Boolean((field || {}).value || props.value);
			break;
	}

	return {
		disabled: isSubmitting || disabled,
		...props,
		...field,
		...extraProps,
		formState,
		fieldState,
		// touched: fieldTouched,
		error: error || Boolean(fErr),
		// helperText: fieldError || props.helperText,
	};
}
