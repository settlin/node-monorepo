import {getIn} from 'formik';
import isDate from '../utils/isDate';

export default function({
	field = {},
	form = {},
	disabled = false,
	error,
	multiple,
	checked,
	defaultValue,
	...props
}) {
	const {name, onChange} = field;
	const {errors = {}, touched = {}, isSubmitting, dirty} = form;

	const fErr = name && getIn(errors, name);
	const fieldTouched = (name && getIn(touched, name));
	const fieldError = (dirty || fieldTouched) && typeof fErr === 'string' ? fErr : null;

	const extraProps = {};

	if (onChange) {
		field.value = defaultValue || field.value;

		switch (props.type) {
			case 'select':
				field.value = typeof field.value === 'undefined' ? multiple ? [] : '' : field.value;
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
		// touched: fieldTouched,
		error: error || Boolean(fieldError),
		helperText: fieldError || props.helperText,
	};
}
