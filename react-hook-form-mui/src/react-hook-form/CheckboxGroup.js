import React from 'react';
import {useRMController} from './useRMController';
import CheckboxGroup from '../forms/CheckboxGroup';
import Checkbox from '../forms/Checkbox';

export default function RHFSelect(props) {
	const {
		ref,
		// eslint-disable-next-line no-unused-vars
		fieldState,
		// eslint-disable-next-line no-unused-vars
		formState,
    isSingle = false,
    ...rest
	} = useRMController(props);
	return isSingle ? (<Checkbox inputRef={ref} {...rest}/>) : (<CheckboxGroup inputRef={ref} {...rest}/>);
}
