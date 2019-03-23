import React from 'react';
import clsx from 'clsx';
import ReactSelect, {components as comps} from 'react-select';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import {emphasize} from '@material-ui/core/styles/colorManipulator';
import InputAdornment from '@material-ui/core/InputAdornment';
import {getIn} from 'formik';

const styles = theme => ({
	root: {
		paddingTop: theme.spacing.unit,
		fontSize: 'inherit',
		width: '100%',
	},
	input: {
		display: 'flex',
		padding: 0,
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
		margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
	},
	chipFocused: {
		backgroundColor: emphasize(
			theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
			0.08,
		),
	},
	noOptionsMessage: {
		padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
	},
	singleValue: {
		fontSize: 'inherit',
	},
	placeholder: {
		position: 'absolute',
		left: 2,
		fontSize: 'inherit',
	},
	paper: {
		position: 'absolute',
		zIndex: 1,
		marginTop: theme.spacing.unit,
		left: 0,
		right: 0,
	},
	divider: {
		height: theme.spacing.unit * 2,
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

function inputComponent({inputRef, ...props}) {
	return <div ref={inputRef} {...props}/>;
}

function Control(props) {
	const {label, compact, InputAdornmentProps, InputProps, ...TextFieldProps} = props.selectProps.TextFieldProps;
	return (
		<TextField
			fullWidth
			InputProps={{
				...InputProps,
				inputComponent,
				...(compact ? {startAdornment: <InputAdornment style={{whiteSpace: 'nowrap'}} position='start' {...InputAdornmentProps}>{label}</InputAdornment>} : {}),
				inputProps: {
					className: props.selectProps.classes.input,
					inputRef: props.innerRef,
					children: props.children,
					...props.innerProps,
				},
			}}
			InputLabelProps={{shrink: props.isFocused || props.hasValue}}
			{...TextFieldProps}
		/>
	);
}

const Input = function(props) {
	return <comps.Input {...props} autoComplete='none'/>;
};

function Option(props) {
	return (
		<MenuItem
			buttonRef={props.innerRef}
			selected={props.isFocused}
			component='div'
			style={{
				fontWeight: props.isSelected ? 500 : 400,
			}}
			{...props.innerProps}
		>
			{props.children}
		</MenuItem>
	);
}

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

function SingleValue(props) {
	return (
		<Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
			{props.children}
		</Typography>
	);
}

function ValueContainer(props) {
	return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
	return (
		<Chip
			tabIndex={-1}
			label={props.children}
			className={clsx(props.selectProps.classes.chip, {
				[props.selectProps.classes.chipFocused]: props.isFocused,
			})}
			onDelete={props.removeProps.onClick}
			deleteIcon={<CancelIcon {...props.removeProps}/>}
		/>
	);
}

function Menu(props) {
	return (
		<Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
			{props.children}
		</Paper>
	);
}

const components = {
	Control,
	Input,
	Menu,
	MultiValue,
	NoOptionsMessage,
	Option,
	Placeholder,
	SingleValue,
	ValueContainer,
};

class Select extends React.PureComponent {
	componentDidMount() {
		const {
  		field: {name} = {},
  		form: {setFieldValue} = {},
			defaultValue,
  	} = this.props;
		if (defaultValue) setFieldValue(name, defaultValue);
	}
	getValueProp(value) {
		const {options, optionsAsync, multiple, valueWithLabel = Boolean(optionsAsync)} = this.props;
		if (!value) return null;
		return valueWithLabel
			? value
			: multiple
				? options.filter(o => Boolean(value.filter(v => v == o.value).length)) // eslint-disable-line eqeqeq
				: options.find(o => value == o.value); // eslint-disable-line eqeqeq
	}
	render() {
		const {
			classes, theme, label, options = [], optionsAsync, placeholder = '',
  		field: {value, name} = {},
  		form: {dirty, touched, errors, setFieldValue, setFieldTouched} = {},
  		helperText,
			defaultValue,
			multiple,
			creatable,
			disabled,
			isClearable,
			readOnly,
			valueWithLabel = Boolean(optionsAsync),
			InputAdornmentProps,
			TextFieldProps: tp,
			compact, // eslint-disable-line no-unused-vars
  		...props
  	} = this.props;
		const message = (dirty || getIn(touched, name)) && getIn(errors, name);

		const selectStyles = {
			input: base => ({
				...base,
				color: theme.palette.text.primary,
				'& input': {
					font: 'inherit',
				},
			}),
			clearIndicator: base => ({...base, padding: '6px'}),
			dropdownIndicator: base => ({...base, padding: '6px'}),
		};
		const TextFieldProps = {...tp, label, compact, InputAdornmentProps, placeholder, error: Boolean(message), helperText: message || helperText};

		const defaultValueProp = defaultValue ? {defaultValue: this.getValueProp(defaultValue)} : {};
		const valueProp = value ? {value: this.getValueProp(value)} : {};
		const commonProps = {
			...props,
			isMulti: multiple,
			isDisabled: disabled || readOnly,
			isClearable,
			classes, placeholder, autocomplete: 'off', styles: selectStyles, components, TextFieldProps, name,
			...(defaultValueProp),
			...(valueProp),
			onChange(v) {setFieldValue(name, valueWithLabel ? v : multiple ? v.map(x => x.value) : v.value);},
			onBlur() {setFieldTouched(name);},
		};

		if (optionsAsync) {
			const {default: AsyncSelect} = creatable ? require('react-select/lib/AsyncCreatable') : require('react-select/lib/Async');

			return <AsyncSelect
				loadOptions={optionsAsync}
				cacheOptions
				defaultOptions
				{...commonProps}
			/>;
		}
		const SyncSelect = creatable ? require('react-select/lib/Creatable').default : ReactSelect;
		return (
			<SyncSelect
				options={options || []}
				{...commonProps}
			/>
		);
	}
}

export default withStyles(styles, {withTheme: true})(Select);
