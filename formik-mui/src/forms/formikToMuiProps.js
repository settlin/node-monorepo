import {getIn} from 'formik';
export default function({
	field = {},
	form = {},
	disabled = false,
	error,
	multiple,
	checked,
	...props
}, type) {
	const {name, onChange} = field;
	const {errors = {}, touched = {}, isSubmitting, dirty} = form;

	const fErr = getIn(errors, name);
	const fieldError = (dirty || getIn(touched, name)) && typeof fErr === 'string' ? fErr : null;

	const extraProps = {};

	if (onChange) {
		switch (type || props.type) {
			case 'select':
				multiple && typeof field.value === 'undefined' ? [] : typeof field.value === 'undefined' ? '' : field.value; break;

			case 'radio':
				field.value = field.value || '';
				extraProps.checked = checked || (field.value ? 'checked' : '');
				break;

			case 'checkbox':
				field.value = typeof field.value === 'undefined' ? '' : field.value === true ? 'checked' : field.value || '';
				extraProps.checked = typeof checked !== 'undefined' ? checked : field.value ? 'checked' : '';
				break;

			default: typeof field.value === 'undefined' ? '' : field.value;
		}
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
