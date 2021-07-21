import React from 'react';
import {useRMController} from './useRMController';
import CurrencyField from '../forms/CurrencyField';

export default function RHFCurrencyField(props) {
	const p = useRMController(props);
	return (
		<CurrencyField
			{...p}
		/>
	);
}
