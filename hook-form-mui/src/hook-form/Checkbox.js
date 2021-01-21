import React from 'react';
import Checkbox from '../forms/Checkbox';

const FormikCheckbox = ({children, render, fast, type, ...props}) => { // eslint-disable-line no-unused-vars
	const Field = require('formik')[fast ? 'FastField' : 'Field'];
	return <Field {...props} component={Checkbox}>
		{children}
	</Field>;
};

export default FormikCheckbox;
