import React from 'react';
import OTP from '../forms/OtpField';

const FormikOTPField = ({children, render, fast, ...props}) => { // eslint-disable-line no-unused-vars
	const Field = require('formik')[fast ? 'FastField' : 'Field'];
	return <Field {...props} component={OTP}/>;
};

export default FormikOTPField;
