import React from 'react';
import Switch from '../forms/Switch';

const FormikCheckbox = ({children, render, fast, type, ...props}) => { // eslint-disable-line no-unused-vars
	const Field = require('formik')[fast ? 'FastField' : 'Field'];
	return <Field {...props} component={Switch}>
		{children}
	</Field>;
};

export default FormikCheckbox;
