import React from 'react';
import ButtonGroup from '../forms/ButtonGroup';

const FormikRadio = ({ children, render, fast, type, buttons, ...props }) => { // eslint-disable-line no-unused-vars
	const Field = require('formik')[fast ? 'FastField' : 'Field'];
	return <Field {...props} component={ButtonGroup}>
		{children}
	</Field>;
};

export default FormikRadio;
