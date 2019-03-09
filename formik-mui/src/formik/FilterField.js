import React from 'react';
import Filter from '../forms/FilterField';

const FormikFilter = ({children, render, fast, ...props}) => { // eslint-disable-line no-unused-vars
	const Field = require('formik')[fast ? 'FastField' : 'Field'];
	return <Field {...props} component={Filter}/>;
};

export default FormikFilter;
