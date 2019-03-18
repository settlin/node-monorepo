import {getIn} from 'formik';

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
	window.getIn = getIn;
	const fieldError = (dirty || (name && getIn(touched, name))) && typeof fErr === 'string' ? fErr : null;

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
		error: error || Boolean(fieldError),
		helperText: fieldError || props.helperText,
	};
}
