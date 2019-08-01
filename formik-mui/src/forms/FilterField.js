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
		margin: `${theme.spacing(0.5)}px ${theme.spacing(0.25)}px`,
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

function inputComponent({inputRef, ...props}) {
	return <div ref={inputRef} {...props}/>;
}

function Control(props) {
	const {label, compact, InputAdornmentProps, InputProps, InputLabelProps, ...TextFieldProps} = props.selectProps.TextFieldProps;

	return (
		<TextField
			fullWidth
			InputProps={{
				...InputProps,
				inputComponent,
				...(compact ? {startAdornment: <InputAdornment style={{whiteSpace: 'nowrap', fontSize: '0.75rem', opacity: 0.85}} position='start' {...InputAdornmentProps}>{label}</InputAdornment>} : {}),
				inputProps: {
					className: props.selectProps.classes.input,
					inputRef: props.innerRef,
					children: props.children,
					...props.innerProps,
				},
			}}
			{...(!compact && label) ? {label} : {}}
			InputLabelProps={{shrink: props.isFocused || props.hasValue, ...InputLabelProps}}
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
				zIndex: 2,
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
			deleteIcon={<CancelIcon className={props.selectProps.classes.chipDeleteIcon} {...props.removeProps}/>}
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
		const {options, optionsAsync, multiple, hackForceUpdate, valueWithLabel = Boolean(optionsAsync)} = this.props;
		if (!value) return multiple ? [] : hackForceUpdate ? null : undefined;  // eslint-disable-line no-undefined
		return valueWithLabel
			? value
			: multiple
				? options.filter(o => Boolean(value.filter(v => v == o.value).length)) // eslint-disable-line eqeqeq
				: options.find(o => value == o.value); // eslint-disable-line eqeqeq
	}
	render() {
		const {
			classes, theme, label, options = [], optionsAsync, placeholder = '',
  		field = {},
  		form: {dirty, touched, errors, setFieldValue, setFieldTouched} = {},
  		helperText,
			defaultValue,
			multiple,
			creatable,
			disabled,
			isClearable,
			readOnly,
			valueWithLabel = Boolean(optionsAsync),
			getOptionValue = o => o.value,
			onChange,
			selectComponents: pc,
			name = field.name,
			value = field.value,
			hackForceUpdate, // eslint-disable-line no-unused-vars
			compact, // eslint-disable-line no-unused-vars
			openMenuOnFocus = true,
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
		} = this.props;
		const message = (dirty || (name && getIn(touched, name))) && (name && getIn(errors, name));

		const selectStyles = {
			input: base => ({
				...base,
				color: theme.palette.text.primary,
				'& input': {
					font: 'inherit',
				},
				...ss.selectInput,
			}),
			clearIndicator: base => ({...base, padding: '6px', ...ss.clearIndicator}),
			dropdownIndicator: base => ({...base, padding: '6px', ...ss.dropdownIndicator}),
			indicatorSeparator: base => ({...base, ...ss.indicatorSeparator}),
		};
		const InputAdornmentProps = {...iAP, onClick: () => this.selectRef.focus()};
		const TextFieldProps = {label, compact, placeholder, error: Boolean(message), helperText: message || helperText, disabled, readOnly, FormHelperTextProps, InputAdornmentProps, InputLabelProps, InputProps, inputProps, inputRef};

		const defaultValueProp = defaultValue ? {defaultValue: this.getValueProp(defaultValue)} : {};
		const valueProp = {value: this.getValueProp(value)};
		const components = {...modifiedComponents, ...pc};

		const commonProps = {
			...props,
			isMulti: multiple,
			isDisabled: disabled || readOnly,
			isClearable,
			classes, placeholder, autocomplete: 'off', styles: selectStyles, TextFieldProps, name,
			components,
			openMenuOnFocus,
			...(defaultValueProp),
			...(valueProp),
			onChange(v) {
				setFieldValue && setFieldValue(name, valueWithLabel ? v : multiple ? v.map(getOptionValue) : getOptionValue(v || {}));
				onChange && onChange(valueWithLabel ? v : multiple ? v.map(getOptionValue) : getOptionValue(v || {}));
			},
			onBlur() {
				setFieldTouched && setFieldTouched(name);
			},
			ref: ref => {this.selectRef = ref;},
		};

		if (optionsAsync) {
			const {default: AsyncSelect} = creatable ? require('react-select/async-creatable') : require('react-select/async');

			return <AsyncSelect
				loadOptions={optionsAsync}
				cacheOptions
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
	}
}

export default withStyles(styles, {withTheme: true})(Select);
