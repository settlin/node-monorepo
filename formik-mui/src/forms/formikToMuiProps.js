import {getIn} from 'formik';
import isDate from '../utils/isDate';

export default function({
	field = {},
	form = {},
	disabled = false,
	error,
	multiple,
	checked,
	...props
}) {
	const {name, onChange} = field;
	const {errors = {}, touched = {}, isSubmitting, dirty} = form;

	const fErr = name && getIn(errors, name);
	const fieldTouched = (name && getIn(touched, name));
	const fieldError = (dirty || fieldTouched) && typeof fErr === 'string' ? fErr : null;

	const extraProps = {};

	if (onChange) {
		switch (props.type) {
			case 'select':
				field.value = typeof field.value === 'undefined' ? multiple ? [] : '' : field.value;
				break;

			case 'checkbox':
				field.value = typeof field.value === 'undefined' ? '' : field.value === true ? 'checked' : field.value || '';
				break;

			case 'file':
				field.value = typeof field.value === 'undefined' ? [] : field.value;
				break;

			case 'date':
				field.value = typeof field.value === 'undefined' ? '' : isDate(field.value) ? field.value.toISOString().split('T')[0] : field.value;
				break;

			default: typeof field.value === 'undefined' ? '' : field.value;
		}
	}
	switch (props.type) {
		case 'checkbox':
			extraProps.checked = typeof checked !== 'undefined' ? checked : (field || {}).value || props.value ? 'checked' : '';
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
