import React from 'react';
import {rhfToMuiProps} from './rhfToMuiProps';
import {useController, useFormContext} from 'react-hook-form';

export function useRMController({name, ...rest}) {
	const {control, setValue} = useFormContext();
	const p = useController({
		name,
		control,
		rules: {required: rest.required},
		defaultValue: rest.defaultValue,
	});
	return rhfToMuiProps({...p, setFieldValue: setValue, ...rest});
}
