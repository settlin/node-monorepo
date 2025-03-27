import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {useFormControl} from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const StyledLabel = styled('label', {
	name: 'MuiFormControlLabel',
	shouldForwardProp: (prop) => 
		prop !== 'labelPlacement' && prop !== 'disabled' && prop !== 'offLabel'
})(({ theme, labelPlacement, disabled, offLabel }) => ({
	/* Styles applied to the root element. */
	display: 'inline-flex',
	alignItems: 'center',
	cursor: 'pointer',
	// For correct alignment with the text.
	verticalAlign: 'middle',
	// Remove grey highlight
	WebkitTapHighlightColor: 'transparent',
	marginLeft: offLabel ? 0 : -11,
	marginRight: 16, // used for row presentation of radio/checkbox
	'&.Mui-disabled': {
		cursor: 'default',
	},
	
	/* Styles applied to the root element if `labelPlacement="start"`. */
	...(labelPlacement === 'start' && {
		flexDirection: 'row-reverse',
		marginLeft: 16, // used for row presentation of radio/checkbox
		marginRight: -11,
	}),
	
	/* Styles applied to the root element if `labelPlacement="top"`. */
	...(labelPlacement === 'top' && {
		flexDirection: 'column-reverse',
		marginLeft: 16,
	}),
	
	/* Styles applied to the root element if `labelPlacement="bottom"`. */
	...(labelPlacement === 'bottom' && {
		flexDirection: 'column',
		marginLeft: 16,
	}),
}));

const StyledTypography = styled(Typography, {
	name: 'MuiFormControlLabel',
	shouldForwardProp: (prop) => prop !== 'disabled'
})(({ theme, disabled }) => ({
	/* Styles applied to the label's Typography component. */
	'&.Mui-disabled': {
		color: theme.palette.text.disabled,
	},
}));

/**
 * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */
const FormControlLabel = React.forwardRef(function FormControlLabel(props, ref) {
	const {
		checked, // eslint-disable-line no-unused-vars
		className: classNameProp,
		control,
		disabled: disabledProp,
		inputRef, // eslint-disable-line no-unused-vars
		label,
		labelPlacement = 'end',
		name, // eslint-disable-line no-unused-vars
		offLabel,
		onChange, // eslint-disable-line no-unused-vars
		value, // eslint-disable-line no-unused-vars
		...other
	} = props;
	const muiFormControl = useFormControl();

	let disabled = disabledProp;
	if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
		disabled = control.props.disabled;
	}
	if (typeof disabled === 'undefined' && muiFormControl) {
		disabled = muiFormControl.disabled;
	}

	const controlProps = {
		disabled,
	};
	['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(key => {
		if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
			controlProps[key] = props[key];
		}
	});

	return (
		<StyledLabel
			className={clsx(
				{
					'Mui-disabled': disabled,
				},
				classNameProp,
			)}
			ref={ref}
			labelPlacement={labelPlacement}
			disabled={disabled}
			offLabel={offLabel}
			{...other}
		>
			{offLabel && <StyledTypography
				component='span'
				className={clsx({ 'Mui-disabled': disabled })}
				disabled={disabled}
			>
				{offLabel}
			</StyledTypography>}
			{React.cloneElement(control, controlProps)}
			<StyledTypography
				component='span'
				className={clsx({ 'Mui-disabled': disabled })}
				disabled={disabled}
			>
				{label}
			</StyledTypography>
		</StyledLabel>
	);
});

FormControlLabel.propTypes = {
	/**
   * If `true`, the component appears selected.
   */
	checked: PropTypes.bool,
	/**
   * @ignore
   */
	className: PropTypes.string,
	/**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   */
	control: PropTypes.element,
	/**
   * If `true`, the control will be disabled.
   */
	disabled: PropTypes.bool,
	/**
   * This prop can be used to pass a ref callback to the `input` element.
   */
	inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
	/**
   * The text to be used in an enclosing label element.
   */
	label: PropTypes.node,
	/**
   * The position of the label.
   */
	labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),
	/**
   * @ignore
   */
	muiFormControl: PropTypes.object,
	/*
   * @ignore
   */
	name: PropTypes.string,
	/**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
	onChange: PropTypes.func,
	/**
   * The value of the component.
   */
	value: PropTypes.any,
};

export default FormControlLabel;
