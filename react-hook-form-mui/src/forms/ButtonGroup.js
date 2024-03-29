import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import ToggleButton from '@mui/material/ToggleButton';
import MuiToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';
import formControl from '../styles/formControl';

const styles = makeStyles({
	formControlCompact: formControl.compact,
	labelCompact: {
		direction: 'column',
	},
	formControlNormal: formControl.normal,
	button: {
		height: '100%',
	},
	buttonGroup: {
		// width: 'max-content',
		// marginTop:'8px',
		display: 'block',
	},
	labelContainerCompact: {
		marginRight: 8,
	},
});

function ToggleButtonGroup(props) {
	let {
		label,
		LabelContainerProps: {classes: lcClasses = {}, ...LabelContainerProps} = {},
		FormControlProps: {classes: fClasses = {}, ...FormControlProps} = {},
		FormLabelProps,
		FormHelperTextProps = {},
		ToggleButtonProps = {},
		ToggleButtonGroupProps: {classes: tClasses = {}, ...ToggleButtonGroupProps} = {},
		compact,
		options,
		exclusive = true,
		refB: ref,
		required,
		disabled,
		name,
		error,
		helperText,
		setValue,
		orientation,
		...p
	} = props;

	const classesStyle = styles();
	const handleChange = (event, value) => {
		if (props.onChange) {
			props.onChange(value);
			if (setValue) setValue(name, value.replace(/-$/, ''));
		}
	};

	const handleBlur = (event) => {
		// take care of touched
		if (props.onBlur) props.onBlur(event);
	};
	return (
		<FormControl
			error={error}
			ref={ref}
			{...FormControlProps}
			{...{required, disabled}}
			classes={{...fClasses, root: clsx(fClasses.root, classesStyle[`formControl${compact ? 'Compact' : 'Normal'}`])}}
		>
			<Grid
				classes={{...lcClasses, root: clsx(lcClasses.root, classesStyle[`labelContainer${compact ? 'Compact' : 'Normal'}`])}}
				container
				direction={'column'}
				// ref={ref}
				{...LabelContainerProps}
			>
				<Grid item>
					{label && (
						<FormLabel
							{...FormLabelProps}
						>
							{label}
						</FormLabel>
					)}
				</Grid>
				<Grid item>

					{helperText && (
						<FormHelperText
							{...FormHelperTextProps}
							className={FormHelperTextProps.className}
							error={error}
						>
							{helperText}
						</FormHelperText>
					)}
				</Grid>
			</Grid>
			<MuiToggleButtonGroup
				{...ToggleButtonGroupProps}
				{...p}
				classes={compact ? {} : {root: clsx(tClasses.root, classesStyle.buttonGroup)}}
				exclusive={exclusive}
				onBlur={handleBlur}
				onChange={handleChange}
				orientation={orientation}
				size='small'
			>
				{options.map(option => (
					<ToggleButton
						key={option.value}
						{...ToggleButtonProps}
						style={{height: '2.5rem'}}
						value={option.value}
					>
						{option.label}
					</ToggleButton>
				))
				}
			</MuiToggleButtonGroup>
		</FormControl>
	);
}

ToggleButtonGroup.propTypes = {
	classes: PropTypes.object,
	compact: PropTypes.bool,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	exclusive: PropTypes.bool,
	field: PropTypes.object,
	FormControlProps: PropTypes.object,
	FormHelperTextProps: PropTypes.object,
	FormLabelProps: PropTypes.object,
	helperText: PropTypes.node,
	label: PropTypes.string,
	LabelContainerProps: PropTypes.object,
	name: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	options: PropTypes.array,
	orientation: PropTypes.string,
	refB: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({current: PropTypes.elementType}),
	]),
	required: PropTypes.bool,
	setValue: PropTypes.func,
	ToggleButtonGroupProps: PropTypes.object,
	ToggleButtonProps: PropTypes.object,
};

// eslint-disable-next-line react/no-multi-comp, react/display-name
export default React.forwardRef((props, ref) => <ToggleButtonGroup {...props} refB={ref}/>);
