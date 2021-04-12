import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import ReactSelect, {components as comps} from 'react-select';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import {emphasize} from '@material-ui/core/styles/colorManipulator';
import InputAdornment from '@material-ui/core/InputAdornment';
import FInput from '../../src/Input';
import {getIn} from 'formik';

import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
	root: {
		paddingTop: theme.spacing(1),
		fontSize: 'inherit',
		width: '100%',
	},
	input: {
		display: 'flex',
		padding: 0,
		height: 'auto',
	},
	valueContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		flex: 1,
		alignItems: 'center',
		overflow: 'hidden',
		fontSize: 'inherit',
	},
	chip: {
		margin: `${theme.spacing(0.25)}px`,
		height: `${32 - theme.spacing(1)}px`,
	},
	chipDeleteIcon: {
		height: '80%',
	},
	chipFocused: {
		backgroundColor: emphasize(
			theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
			0.08,
		),
	},
	noOptionsMessage: {
		padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
	},
	singleValue: {
		// fontSize: 'inherit',
	},
	placeholder: {
		position: 'absolute',
		left: 2,
		fontSize: 'inherit',
	},
	paper: {
		position: 'absolute',
		zIndex: 1,
		marginTop: theme.spacing(1),
		left: 0,
		right: 0,
	},
	divider: {
		height: theme.spacing(2),
	},
});

function NoOptionsMessage(props) {
	return (
		<Typography
			color='textSecondary'
			className={props.selectProps.classes.noOptionsMessage}
			{...props.innerProps}
		>
			{props.children}
		</Typography>
	);
}
NoOptionsMessage.propTypes = {
	selectProps: PropTypes.object,
	innerProps: PropTypes.object,
	children: PropTypes.node,
};

function inputComponent({inputRef, ...props}) {
	return <div ref={inputRef} {...props}/>;
}
inputComponent.propTypes = {
	inputRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({current: PropTypes.elementType}),
	]),
};

function Control(props) {
	const {InputProps, InputLabelProps, ...TextFieldProps} = props.selectProps.TextFieldProps;
	const {label, compact, InputAdornmentProps} = TextFieldProps;
	// if (compact && label && TextFieldProps.required) label = label.replace(/\*$/, '').trim() + ' *';

	return (
		<FInput
			formik={false}
			fullWidth
			InputProps={{
				...InputProps,
				inputComponent,
				...(compact ? {startAdornment: <InputAdornment style={{whiteSpace: 'nowrap', fontSize: '0.8rem', opacity: 0.85}} position='start' {...InputAdornmentProps}>{label}</InputAdornment>} : {}),
				inputProps: {
					className: props.selectProps.classes.input,
					inputRef: props.innerRef,
					children: props.children,
					...props.innerProps,
				},
			}}
			// {...(!compact && label) ? {label} : {}}
			InputLabelProps={{shrink: props.isFocused || props.hasValue, ...InputLabelProps}}
			{...TextFieldProps}
		/>
	);
}
Control.propTypes = {
	selectProps: PropTypes.object,
	innerProps: PropTypes.object,
	children: PropTypes.node,
	isFocused: PropTypes.bool,
	hasValue: PropTypes.bool,
	innerRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({current: PropTypes.elementType}),
	]),
};

const Input = function(props) {
	return <comps.Input {...props} autoComplete='none'/>;
};

const ClearIndicator = props => <comps.DropdownIndicator {...props}>
	<IconButton size='small' style={props.getStyles('clearIndicator', props)}><Close fontSize='small'/></IconButton>
</comps.DropdownIndicator>;
ClearIndicator.propTypes = {
	getStyles: PropTypes.func,
};

const DropdownIndicator = (props) => <comps.DropdownIndicator {...props}>
	<IconButton size='small' style={props.getStyles('dropdownIndicator', props)}><ExpandMore/></IconButton>
</comps.DropdownIndicator>;
DropdownIndicator.propTypes = {
	getStyles: PropTypes.func,
};

function Option(props) {
	return (
		<MenuItem
			buttonRef={props.innerRef}
			selected={props.isFocused}
			component='div'
			style={{
				fontWeight: props.isSelected ? 500 : 400,
				zIndex: 2,
			}}
			{...props.innerProps}
		>
			{props.children}
		</MenuItem>
	);
}
Option.propTypes = {
	selectProps: PropTypes.object,
	innerProps: PropTypes.object,
	children: PropTypes.node,
	isFocused: PropTypes.bool,
	isSelected: PropTypes.bool,
	innerRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({current: PropTypes.elementType}),
	]),
};

function Placeholder(props) {
	return (
		<Typography
			color='textSecondary'
			className={props.selectProps.classes.placeholder}
			{...props.innerProps}
		>
			{props.children}
		</Typography>
	);
}
Placeholder.propTypes = {
	selectProps: PropTypes.object,
	innerProps: PropTypes.object,
	children: PropTypes.node,
};

function SingleValue(props) {
	const {selectProps: {value, classes}, children} = props;
	return value?.label
		? value.label
		: <Typography className={classes.singleValue} {...props.innerProps}>
			{children}
		</Typography>;
}
SingleValue.propTypes = {
	selectProps: PropTypes.object,
	innerProps: PropTypes.object,
	children: PropTypes.node,
};

function ValueContainer(props) {
	return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}
ValueContainer.propTypes = {
	selectProps: PropTypes.object,
	children: PropTypes.node,
};

function MultiValue(props) {
	return (
		<Chip
			tabIndex={-1}
			label={props.children}
			className={clsx(props.selectProps.classes.chip, {
				[props.selectProps.classes.chipFocused]: props.isFocused,
			})}
			onDelete={props.removeProps.onClick}
			deleteIcon={<CancelIcon className={props.selectProps.classes.chipDeleteIcon} {...props.removeProps}/>}
		/>
	);
}
MultiValue.propTypes = {
	selectProps: PropTypes.object,
	innerProps: PropTypes.object,
	removeProps: PropTypes.object,
	children: PropTypes.node,
	isFocused: PropTypes.bool,
	onClick: PropTypes.func,
};

function Menu(props) {
	return (
		<Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
			{props.children}
		</Paper>
	);
}
Menu.propTypes = {
	selectProps: PropTypes.object,
	innerProps: PropTypes.object,
	children: PropTypes.node,
};

const modifiedComponents = {
	Control,
	Input,
	Menu,
	MultiValue,
	NoOptionsMessage,
	Option,
	Placeholder,
	SingleValue,
	ValueContainer,
	ClearIndicator,
	DropdownIndicator,
};

const Select = function({
	classes, theme, label, options = [], optionsAsync, placeholder = '',
	field = {},
	form: {dirty, touched, errors, setFieldValue, setFieldTouched} = {},
	helperText,
	defaultValue,
	multiple,
	closeMenuOnSelect = !multiple,
	creatable,
	disabled,
	isClearable,
	readOnly,
	required,
	valueWithLabel = Boolean(optionsAsync),
	getOptionValue = o => o.value,
	onChange,
	selectComponents: pc,
	name = field.name,
	value = field.value,
	hackForceUpdate, // eslint-disable-line no-unused-vars
	compact, // eslint-disable-line no-unused-vars
	openMenuOnFocus = true,
	menuPortalTarget = typeof window === 'undefined' ? null : document.body,
	selectStyles: ss = {},
	// props for TextField: start
	FormHelperTextProps,
	InputAdornmentProps: iAP,
	InputLabelProps,
	InputProps,
	inputProps,
	inputRef,
	// props for TextField: end
	...props
}) {
	useEffect(() => {
		if (defaultValue && props.formik) setFieldValue(name, defaultValue);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [defaultValue, name, props.formik]);

	const [cacheOptions, setCacheOptions] = useState(true);

	const getValueProp = function(v) {
		const allOptions = options?.reduce((a, o) => o.options ? [...a, ...o.options] : [...a, o], []);
		if (typeof v === 'undefined' || v === null) return multiple ? [] : hackForceUpdate ? null : undefined;  // eslint-disable-line no-undefined
		return valueWithLabel
			? v
			: multiple
				? allOptions.filter(o => Boolean((v || []).filter(vv => vv == o.value).length)) // eslint-disable-line eqeqeq
				: allOptions.find(o => v == o.value); // eslint-disable-line eqeqeq
	};
	const message = (dirty || (name && getIn(touched, name))) && (name && getIn(errors, name));

	const {selectInput, clearIndicator, dropdownIndicator, indicatorSeparator, ...moreStyles} = ss;
	const selectStyles = {
		input: base => ({
			...base,
			color: theme.palette.text.primary,
			'& input': {
				font: 'inherit',
			},
			...selectInput,
		}),
		clearIndicator: base => ({...base, padding: '2px', ...clearIndicator}),
		dropdownIndicator: base => ({...base, padding: '2px', ...dropdownIndicator}),
		indicatorSeparator: base => ({...base, ...indicatorSeparator}),
		menuPortal: base => ({...base, zIndex: 9999}),
		...moreStyles,
	};
	const InputAdornmentProps = {...iAP, onClick: () => this.selectRef.focus()};
	const TextFieldProps = {label, compact, required, placeholder, error: Boolean(message), helperText: message || helperText, disabled, readOnly, FormHelperTextProps, InputAdornmentProps, InputLabelProps, InputProps, inputProps, inputRef};

	const defaultValueProp = defaultValue ? {defaultValue: getValueProp(defaultValue)} : {};
	const valueProp = {value: getValueProp(value)};
	const components = {...modifiedComponents, ...pc};

	const commonProps = {
		...props,
		isMulti: multiple,
		closeMenuOnSelect,
		isDisabled: disabled || readOnly,
		isClearable,
		menuPortalTarget,
		classes, placeholder, autocomplete: 'off', styles: selectStyles, TextFieldProps, name,
		components,
		openMenuOnFocus,
		...(defaultValueProp),
		...(valueProp),
		onChange(v) {
			setFieldValue && setFieldValue(name, valueWithLabel ? v : multiple ? (v || []).map(getOptionValue) : getOptionValue(v || {}));
			onChange && onChange(valueWithLabel ? v : multiple ? v.map(getOptionValue) : getOptionValue(v || {}));
		},
		onBlur() {
			setFieldTouched && setFieldTouched(name);
		},
	};

	if (optionsAsync) {
		const {default: AsyncSelect} = creatable ? require('react-select/async-creatable') : require('react-select/async');

		return <AsyncSelect
			loadOptions={(val, cb) => optionsAsync(val, function(arr) {
				if (!arr.length) setCacheOptions(false);
				cb(arr);
			})}
			cacheOptions={cacheOptions}
			defaultOptions={[]}
			{...commonProps}
		/>;
	}
	const SyncSelect = creatable ? require('react-select/creatable').default : ReactSelect;
	return (
		<SyncSelect
			options={options || []}
			{...commonProps}
		/>
	);
};

Select.propTypes = {
	classes: PropTypes.object,
	field: PropTypes.object,
	form: PropTypes.object,
	helperText: PropTypes.string,
	defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	multiple: PropTypes.bool,
	closeMenuOnSelect: PropTypes.bool,
	creatable: PropTypes.bool,
	disabled: PropTypes.bool,
	isClearable: PropTypes.bool,
	readOnly: PropTypes.bool,
	required: PropTypes.bool,
	valueWithLabel: PropTypes.bool,
	getOptionValue: PropTypes.func,
	onChange: PropTypes.func,
	selectComponents: PropTypes.object,
	name: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
	hackForceUpdate: PropTypes.bool,
	compact: PropTypes.bool,
	openMenuOnFocus: PropTypes.bool,
	menuPortalTarget: PropTypes.instanceOf(typeof Element === 'undefined' ? function() {} : Element),
	selectStyles: PropTypes.object,
	FormHelperTextProps: PropTypes.object,
	InputAdornmentProps: PropTypes.object,
	InputLabelProps: PropTypes.object,
	InputProps: PropTypes.object,
	inputProps: PropTypes.object,
	formik: PropTypes.object,
	options: PropTypes.array,
	theme: PropTypes.object,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	optionsAsync: PropTypes.func,
	inputRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({current: PropTypes.elementType}),
	]),
};

export default withStyles(styles, {withTheme: true})(Select);
