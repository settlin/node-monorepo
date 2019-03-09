import React from 'react';
import Select from '../forms/Select';

const FormikSelect = ({children, render, fast, ...props}) => { // eslint-disable-line no-unused-vars
	const Field = require('formik')[fast ? 'FastField' : 'Field'];
	return <Field {...props} component={Select}/>;
};

export default FormikSelect;
