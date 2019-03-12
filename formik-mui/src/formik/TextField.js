import React from 'react';
import TextField from '../forms/TextField';

const FormikTextField = ({children, render, fast = true, ...props}) => { // eslint-disable-line no-unused-vars
	const Field = require('formik')[fast ? 'FastField' : 'Field'];
	return <Field {...props} component={TextField}>
		{children}
	</Field>;
};

export default FormikTextField;
