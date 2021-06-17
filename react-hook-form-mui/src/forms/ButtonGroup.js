import PropTypes from 'prop-types';
import React, {useState} from 'react';
import clsx from 'clsx';
import ToggleButton from '@material-ui/lab/ToggleButton';
import MuiToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
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
		marginTop: '8px',
		width: 'max-content',
	},
	labelContainerCompact: {
		marginRight: 8,
	},
	nextLevelbuttonGroup: {
		marginTop: '10%',
		// position: 'absolute',
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
		classes,
		options,
		exclusive = true,
		required,
		disabled,
		error,
		helperText,
	} = props;

	const [option, setOption] = useState();
	const classesStyle = styles();
	const handleChange = (event, value) => {
		getOptions(value, options);
		if (props.onChange) props.onChange(value);
	};

	const handleBlur = (event) => {
		// take care of touched
		if (props.onBlur) props.onBlur(event);
	};

	const getOptions = (v, options) => {
		let option;
		const compare = options.find(o => o.value === v);
		if (compare) {
			option = compare.options.map(({value, label}) => {return ({value, label});});
			setOption(option);
		}
		else if (v) {
			for (let i = 0; i < options.length; i++) {
				if (options[i].options) option = getOptions(v, options[i].options);
				if (option) return option;
			}
		}
		return null;
	};
	// ToggleButtonProps.classes = {...ToggleButtonProps.classes, root: clsx(classesStyle.button, (ToggleButtonProps.classes || {}).root)};

	return (
		<FormControl
			error={error}
			{...FormControlProps}
			{...{required, disabled}}
			classes={{...fClasses, root: clsx(fClasses.root, classesStyle[`formControl${compact ? 'Compact' : 'Normal'}`])}}
		>
			<Grid
				classes={{...lcClasses, root: clsx(lcClasses.root, classesStyle[`labelContainer${compact ? 'Compact' : 'Normal'}`])}}
				container
				direction={'column'}
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
				{...props}
				classes={compact ? {} : {root: clsx(tClasses.root, classesStyle.buttonGroup)}}
				exclusive={exclusive}
				onBlur={handleBlur}
				onChange={handleChange}
			>
				{options.map(option => (
					<ToggleButton
						key={option.value}
						{...ToggleButtonProps}
						value={option.value}
					>
						{option.label}

					</ToggleButton>

				))
				}
				{option?.map(eachOption => (
					<ToggleButton
						className={classesStyle.nextLevelbuttonGroup}
						key={eachOption.value}
						value={eachOption.value}
						{...ToggleButtonProps}
					>
						{eachOption.label}
					</ToggleButton>
				))}
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
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	options: PropTypes.array,
	required: PropTypes.bool,
	ToggleButtonGroupProps: PropTypes.object,
	ToggleButtonProps: PropTypes.object,
};

export default ToggleButtonGroup;
