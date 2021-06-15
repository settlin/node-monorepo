import React from 'react';
import {rhfToMuiProps} from './rhfToMuiProps';
import {useController} from 'react-hook-form';

export function useRMController({control, name, ...rest}) {
	const p = useController({
		name,
		control,
		rules: {required: rest.required},
		defaultValue: rest.defaultValue,
	});

	return rhfToMuiProps({...p, ...rest});
}
