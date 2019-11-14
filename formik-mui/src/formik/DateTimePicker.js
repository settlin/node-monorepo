import React from 'react';
import DateTimePicker from '../forms/DateTimePicker';

const FormikDateTimePicker = ({children, render, fast, ...props}) => { // eslint-disable-line no-unused-vars
	const Field = require('formik')[fast ? 'FastField' : 'Field'];
	return <Field {...props} component={DateTimePicker}>
		{children}
	</Field>;
};

export default FormikDateTimePicker;
