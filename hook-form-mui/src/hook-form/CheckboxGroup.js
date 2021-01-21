import React from 'react';
import CheckboxGroup from '../forms/CheckboxGroup';

const FormikCheckboxGroup = ({fast, ...p}) => <CheckboxGroup {...p} Field={require('formik')[fast ? 'FastField' : 'Field']}/>;
export default FormikCheckboxGroup;

