import React from 'react';
import validateEmail from './utils/validate/email';
import validateMobile from './utils/validate/mobile';
import validateDob from './utils/validate/dob';

const Input = ({type: typeOrig, container, required, validate: validateOrig, label: labelOrig = '', mui, component: Field, ...rest}) => {
	let Grid = container ? require('@material-ui/core/Grid').default : ({children}) => children;

	let label = labelOrig, type, validateFunc = () => {}, validateReq = () => {};
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
			Field = Field || require('./formik/InputArray').default;
			break;
		case 'buttons':
			type = 'buttons';
			Field = Field || require('./formik/ButtonGroup').default;
			break;
		case 'checkbox':
			type = 'checkbox';
			Field = Field || (rest.options ? require('./formik/CheckboxGroup').default : require('./formik/Checkbox').default);
			break;
		case 'inr':
			type = 'number';
			Field = Field || require('./formik/CurrencyField').default;
			break;
		case 'mobile':
			type = 'number';
			Field = Field || require('./formik/TextField').default;
			break;
		case 'otp':
			Field = Field || require('./formik/OtpField').default;
			break;
		case 'pincode':
			type = 'number';
			Field = Field || require('./formik/TextField').default;
			break;
		case 'radio':
			type = 'radio';
			Field = Field || require('./formik/Radio').default;
			break;
		case 'select':
			Field = Field || (mui ? require('./formik/Select').default : require('./formik/FilterField').default);
			break;
		case 'switch':
			type = 'checkbox';
			Field = Field || require('./formik/Switch').default;
			break;
		default:
			type = typeOrig || 'text';
			Field = Field || require('./formik/TextField').default;
			break;
	}
	const validate = v => validateReq(v) || validateFunc(v);
	return <Grid item={true} {...container}><Field {...{validate, label, type, compact: true}} {...rest}/></Grid>;
};

export default Input;
