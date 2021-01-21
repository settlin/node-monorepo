import React from 'react';
import RadioGroup from '../forms/RadioGroup';

const FormikRadio = ({children, render, fast, type, buttons, ...props}) => { // eslint-disable-line no-unused-vars
	const Field = require('formik')[fast ? 'FastField' : 'Field'];
	return <Field {...props} component={RadioGroup}>
		{children}
	</Field>;
};

export default FormikRadio;
