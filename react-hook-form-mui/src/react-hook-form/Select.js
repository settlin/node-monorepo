import React from 'react';
import TextField from '../forms/TextField';
import {useController} from 'react-hook-form';
import MenuItem from '@material-ui/core/MenuItem';

export default function SelectField({options, control, name, ...rest}) {
	const {field} = useController({
		name,
		control,
	});
	return (
		<TextField {...field} {...rest} select>
			{
				options.map((e, index) => (
					<MenuItem key={index} value={e.code}>
						{e.name}
					</MenuItem>
				))
			}
		</TextField>
	);
}
