import React from 'react';
import Radio from '../forms/Radio';

const FormikRadio = ({children, render, fast, type, buttons, ...props}) => { // eslint-disable-line no-unused-vars
	const Field = require('formik')[fast ? 'FastField' : 'Field'];
	return <Field {...props} component={Radio}>
		{children}
	</Field>;
};

export default FormikRadio;
