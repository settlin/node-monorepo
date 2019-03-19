import React, {Fragment} from 'react';
import MuiSwitch from '@material-ui/core/Switch';
import formikToMuiProps from '../forms/formikToMuiProps';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from './FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';


const styles = () => ({
	inputType: {
		height: '23px', // to ensure the match with react-select
	},
});

class Switch extends React.PureComponent {
	constructor(p) {
		super(p);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}
	handleChange(event) {
  	if (this.props.field) this.props.field.onChange(event);
  	if (this.props.onChange) this.props.onChange(event);
	}
	handleBlur(event) {
  	if (this.props.field) this.props.field.onBlur(event);
  	if (this.props.onBlur) this.props.onBlur(event);
	}
	render() {
  	const {
			fullWidth = true, classes, inputProps = {},
			label,
			compact, // eslint-disable-line no-unused-vars
			FormHelperTextProps = {},
			FormControlProps,
			FormControlLabelProps,
			offLabel,
			...props
		} = this.props;
		inputProps.classes = {...classes, ...inputProps.classes};

		const {error, helperText, type, ...fp} = formikToMuiProps({...props, type: 'checkbox'});  // eslint-disable-line no-unused-vars
		// removed type from props to ensure proper working of checkbox in formik

  	return <FormControl {...FormControlProps} fullWidth={fullWidth}>
  		<FormControlLabel
				{...FormControlLabelProps}
				control={
					<MuiSwitch
						{...fp}
						onChange={this.handleChange}
						onBlur={this.handleBlur}
					/>
				}
				offLabel={offLabel}
				label={
					<Fragment>
						{label}
						{helperText && <FormHelperText
							{...FormHelperTextProps}
							error={error}
							className={FormHelperTextProps.className}>
							{helperText}
						</FormHelperText>}
					</Fragment>
				}
			/>
  	</FormControl>;
	}
}
Switch.displayName = 'FormikMaterialUISwitch';

export default withStyles(styles)(Switch);
