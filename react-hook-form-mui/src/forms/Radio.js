import React, {Fragment} from 'react';
import MuiRadio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import clsx from 'clsx';

class Radio extends React.PureComponent {
	constructor(p) {
		super(p);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}
	handleChange(event) {
		if (this.props.onChange) this.props.onChange(event);
	}
	handleBlur(event) {
		if (this.props.onBlur) this.props.onBlur(event);
	}
	render() {
		let {
			label,
			row,
			classes = {},
			value = 'on',
			compact,  // eslint-disable-line no-unused-vars
			FormControlProps,
  		FormHelperTextProps = {},
  		FormControlLabelProps,
  		...props
		} = this.props;

		const {error, helperText, type, ...fp} = formikToMuiProps({...props, type: 'radio'});  // eslint-disable-line no-unused-vars
		// removed type from props to ensure proper working of checkbox in formik
		return (
			<FormControl
				component='fieldset'
				error={error}
				{...FormControlProps}
				className={clsx(
					{[classes.rowLabel]: row === 'all'},
					FormControlProps && FormControlProps.className,
				)}
			>
				<FormControlLabel
					{...FormControlLabelProps}
					className={clsx(
						{[classes.rowLabel]: row === 'all'},
						FormControlLabelProps && FormControlLabelProps.className,
					)}
					control={(
						<MuiRadio
							{...fp}
							onBlur={this.handleBlur}
							onChange={this.handleChange}
							value={value}
						/>
					)}
					label={(
						<>
'\'\'\'\'\'\'\'\'\'						\''{label}
'\'\'\'\'\'\'\'\'\'						\''{helperText && (
							<FormHelperText
								{...FormHelperTextProps}
								className={FormHelperTextProps.className}
								error={error}
	>
		{helperText}
	</FormHelperText>
						)}
'\'\'\'\'\'\'\'\'\'					\'\'\'\'\'

     \'\'\'\''
</>
					)}
				/>
			</FormControl>
		);
	}
}
Radio.displayName = 'FormikMaterialUIRadio';

export default Radio;
