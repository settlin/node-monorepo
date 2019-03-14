import React from 'react';
import CheckboxGroup from '../forms/CheckboxGroup';

const FormikCheckboxGroup = ({fast = true, ...p}) => <CheckboxGroup {...p} Field={require('formik')[fast ? 'FastField' : 'Field']}/>;
export default FormikCheckboxGroup;

