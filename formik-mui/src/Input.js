import React from 'react';
import validateEmail from './utils/validate/email';
import validateMobile from './utils/validate/mobile';
import validateDob from './utils/validate/dob';

const Input = ({type: typeOrig, container, required, validate: validateOrig, label: labelOrig = '', mui, ...rest}) => {
	let Grid = container ? require('@material-ui/core/Grid').default : ({children}) => children;

	let label = labelOrig, type, validateFunc = () => {}, validateReq = () => {}, Field;
	if (typeof validateOrig === 'function') validateFunc = validateOrig; // original validate function
	else if (validateOrig) {
		switch (typeOrig) {
			case 'aadhar':
				validateFunc = v => !/^\d{4}\s\d{4}\s\d{4}$/.test(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid Aadhar Number');
				break;
			case 'dob':
				validateFunc = v => !validateDob(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid DOB Age Limit (18 to 57)');
				break;
			case 'pincode':
				validateFunc = v => !/^[1-9][0-9]{5}$/.test(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid Pincode');
				break;
			case 'pan':
				validateFunc = v => !/[A-Za-z]{5}\d{4}[A-Za-z]{1}/.test(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid PAN Number');
				break;
			case 'inr':
				validateFunc = v => !/^\d*$/.test(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid Amount');
				break;
			case 'mobile':
			case 'otp':
				validateFunc = v => validateMobile(v, typeof validateOrig === 'string' ? validateOrig : 'Invalid Indian Mobile');
				break;
			case 'email':
				validateFunc = v => validateEmail(v, typeof validateOrig === 'string' ? validateOrig : 'Invalid Email');
				break;
		}
	}
	if (required) {
		validateReq = v => typeof v === 'undefined' && (typeof required === 'string' ? required : 'Required');
		label += ' *';
	}

	switch (typeOrig) {
		case 'array':
			Field = require('./formik/InputArray').default;
			break;
		case 'buttons':
			type = 'buttons';
			Field = require('./formik/ButtonGroup').default;
			break;
		case 'checkbox':
			type = 'checkbox';
			Field = rest.options ? require('./formik/CheckboxGroup').default : require('./formik/Checkbox').default;
			break;
		case 'inr':
			type = 'number';
			Field = require('./formik/CurrencyField').default;
			break;
		case 'mobile':
			type = 'number';
			Field = require('./formik/TextField').default;
			break;
		case 'otp':
			Field = require('./formik/OtpField').default;
			break;
		case 'pincode':
			type = 'number';
			Field = require('./formik/TextField').default;
			break;
		case 'radio':
			type = 'radio';
			Field = require('./formik/Radio').default;
			break;
		case 'select':
			Field = mui ? require('./formik/Select').default : require('./formik/FilterField').default;
			break;
		case 'switch':
			type = 'checkbox';
			Field = require('./formik/Switch').default;
			break;
		default:
			type = typeOrig || 'text';
			Field = require('./formik/TextField').default;
			break;
	}
	const validate = v => validateReq(v) || validateFunc(v);
	return <Grid item={true} {...container}><Field {...{validate, label, type, compact: true}} {...rest}/></Grid>;
};

export default Input;
