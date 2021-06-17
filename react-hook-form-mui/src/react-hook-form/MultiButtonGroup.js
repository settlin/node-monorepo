import PropTypes from 'prop-types';
import React from 'react';
import {useRMController} from './useRMController';
import ButtonGroup from '../forms/ButtonGroup';

function getNextOptions({
	values,
	options,
}) {
	if (!values.length) return null;

	for (let i = 0; i < options.length; i++) {
		const matches = options[i].value.startsWith(values[0]);
		if (!matches) continue;
		return options[i].options;
	}
	return null;
}

function RecursiveButtonGroup({
	values,
	options,
	onChange,
	onBlur,
	...rest
}) {
	if (!values.length) return null;

	const nextOptions = getNextOptions({values, options});
	if (!nextOptions) return null;
	const nextToNextOptions = getNextOptions({options: nextOptions, values: values.slice(1)});
	return (
		<>
			<ButtonGroup
				exclusive
				onBlur={onBlur}
				onChange={onChange}
				options={nextOptions}
				value={(values[1] + (nextToNextOptions ? '-' : '')) || values[0]}
				{...rest}
			/>
			<RecursiveButtonGroup {...{options: nextOptions, values: values.slice(1), onChange, onBlur}}/>
		</>
	);
}

RecursiveButtonGroup.propTypes = {
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	options: PropTypes.array,
	values: PropTypes.array,
};

function getAllValues(value, startIndex = 0) {
	if (!value || (startIndex >= value.length)) return [];

	const ind = value.indexOf(':', startIndex);
	if (ind === -1) {
		const v = value.replace(/-$/, '');
		return [
			v,
			...(v !== value ? [] : [v]),
		];
	}
	return [
		value.substr(0, ind),
		...getAllValues(value, ind + 1),
	];
}

// eslint-disable-next-line react/no-multi-comp
export default function RHFMultiButtonGroup(props) {
	const {
		// eslint-disable-next-line no-unused-vars
		fieldState,
		// eslint-disable-next-line no-unused-vars
		formState,
		...p
	} = useRMController(props);

	const {options} = props;
	const {value, onChange, onBlur} = p;

	const values = getAllValues(value);

	return (
		<>
			<ButtonGroup
				exclusive
				{...p}
				value={values[0] + '-'}
			/>
			<RecursiveButtonGroup {...{options, values, onChange, onBlur}}/>
		</>
	);
}

RHFMultiButtonGroup.propTypes = {
	control: PropTypes.object,
	name: PropTypes.string,
	options: PropTypes.array,
};
