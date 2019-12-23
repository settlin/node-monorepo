import React from 'react';

const FormikTextField = ({children, render, fast, component, ...props}) => { // eslint-disable-line no-unused-vars
	const Field = require('formik')[fast ? 'FastField' : 'Field'];
	const {compact, ...p} = props;  // eslint-disable-line no-unused-vars
	if (props.type === 'hidden') return <Field {...p}/>;

	return <Field {...props} component={component}>
		{children}
	</Field>;
};

export default FormikTextField;
