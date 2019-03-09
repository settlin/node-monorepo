import React from 'react';
import Radio from '../forms/Radio';
import RadioGroup from '../forms/RadioGroup';

const FormikRadio = ({ children, render, fast = true, type, buttons, ...props }) => { // eslint-disable-line no-unused-vars
	const Field = require('formik')[fast ? 'FastField' : 'Field'];
	return <Field {...props} {...(type === 'radio' ? {} : { type })} {...(type === 'hidden' ? {} : { component: props.options ? RadioGroup : Radio })}>
		{children}
	</Field>;
};

export default FormikRadio;
