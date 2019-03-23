import React from 'react';
import TextField from '../forms/TextField';

const FormikTextField = ({children, render, fast, ...props}) => { // eslint-disable-line no-unused-vars
	const Field = require('formik')[fast ? 'FastField' : 'Field'];
	const {compact, ...p} = props;  // eslint-disable-line no-unused-vars
	if (props.type === 'hidden') return <Field {...p}/>;

	return <Field {...props} component={TextField}>
		{children}
	</Field>;
};

export default FormikTextField;
