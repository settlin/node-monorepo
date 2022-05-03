import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

import Radio from '@mui/material/Radio';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import withStyles from '@mui/styles/withStyles';
import Clear from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import formControl from '../styles/formControl';
import formLabel from '../styles/formLabel';

function ClearButton(p) {
	return (
        // eslint-disable-next-line react/jsx-handler-names
        <IconButton onClick={p.onClick} size="large">
			<Clear/>
		</IconButton>
    );
}

const styles = {
	formControlCompact: formControl.compact,
	formControlNormal: formControl.normal,
	formLabel,
};

// eslint-disable-next-line react/no-multi-comp
class RadioGroup extends React.PureComponent {
	constructor(p) {
		super(p);
		this.handleChange = this.handleChange.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}
	handleChange(event) {
		if (this.props.onChange) this.props.onChange(event.target.value);
	}
	handleClear() {
		let value;
		if (this.props.onChange) this.props.onChange(value);
	}
	handleBlur() {
		if (this.props.onBlur) this.props.onBlur();
	}
	render() {
		let {
			label,
			ClearButtonProps,
			showClearButton = true,
			FormControlProps: {classes: fClasses = {}, ...FormControlProps} = {},
			RadioGroupLabelProps,
			FormHelperTextProps = {},
			RadioLabelProps,
			RadioProps,
			RadioGroupProps: {row, ...RadioGroupProps} = {},
			compact,
			classes,
			options,
			...props
		} = this.props;

		const {error, helperText, ...fp} = formikToMuiProps(props);

		return (
			<FormControl
				error={error}
				{...FormControlProps}
				classes={{...fClasses, root: clsx(fClasses.root, classes[`formControl${compact ? 'Compact' : 'Normal'}`])}}
			>
				{label && (
					<FormLabel
						{...RadioGroupLabelProps}
						classes={{...(RadioGroupLabelProps || {}).classes, ...(compact ? {root: classes.formLabel} : {})}}
					>
						{label}
						{helperText && (
							<FormHelperText
								{...FormHelperTextProps}
								className={FormHelperTextProps.className}
								error={error}
							>
								{helperText}
							</FormHelperText>
						)}
					</FormLabel>
				)}
				<MuiRadioGroup
					{...RadioGroupProps}
					row={row || compact}
					{...fp}
					// eslint-disable-next-line react/jsx-handler-names
					onBlur={this.handleBlur}
					// eslint-disable-next-line react/jsx-handler-names
					onChange={this.handleChange}
				>
					{options.map((option, i) => (
						<FormControlLabel
							control={(
								<Radio
									{...RadioProps}
									checked={fp.value === option.value}
								/>
							)}
							// eslint-disable-next-line react/no-array-index-key
							key={i}
							{...RadioLabelProps}
							disabled={option.disabled ? true : false}
							label={option.label}
							value={option.value}
						/>
					))}
					{showClearButton && (
						<FormControlLabel
							{...RadioLabelProps}
							// eslint-disable-next-line react/jsx-handler-names
							control={<ClearButton {...ClearButtonProps} onClick={this.handleClear}/>}
						/>
					)}
				</MuiRadioGroup>
			</FormControl>
		);
	}
}

RadioGroup.propTypes = {
	classes: PropTypes.object,
	ClearButtonProps: PropTypes.object,
	compact: PropTypes.bool,
	error: PropTypes.bool,
	FormControlLabelProps: PropTypes.object,
	FormControlProps: PropTypes.object,
	FormHelperTextProps: PropTypes.object,
	helperText: PropTypes.node,
	label: PropTypes.node,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	options: PropTypes.array,
	RadioGroupLabelProps: PropTypes.object,
	RadioGroupProps: PropTypes.object,
	RadioLabelProps: PropTypes.object,
	RadioProps: PropTypes.object,
	showClearButton: PropTypes.bool,
};

export default withStyles(styles)(RadioGroup);
