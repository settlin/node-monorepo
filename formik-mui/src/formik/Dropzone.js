import React from 'react';
import Dropzone from '../forms/Dropzone/index';

const FormikDropzone = ({children, render, fast = true, ...props}) => { // eslint-disable-line no-unused-vars
	const Field = require('formik')[fast ? 'FastField' : 'Field'];
	return <Field {...props} component={Dropzone}>
		{children}
	</Field>;
};

export default FormikDropzone;
