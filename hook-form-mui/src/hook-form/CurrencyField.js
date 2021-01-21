import React from 'react';
import CurrencyField from '../forms/CurrencyField';

const FormikCurrencyField = ({render, fast, ...props}) => { // eslint-disable-line no-unused-vars
	const Field = require('formik')[fast ? 'FastField' : 'Field'];
	return <Field {...props} component={CurrencyField}/>;
};

export default FormikCurrencyField;
