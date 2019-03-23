import React from 'react';
import validateEmail from './utils/validate/email';
import validateMobile from './utils/validate/mobile';
import validateDob from './utils/validate/dob';
import LinearProgress from '@material-ui/core/LinearProgress';

class Input extends React.PureComponent {
	state = {}
	extraProps() {
		let {type: typeOrig, label = '', required, validate: validateOrig, formik = true} = this.props;

		if (!formik) return {label};
		let validateFunc = () => { }, validateReq = () => { };
		if (typeof validateOrig === 'function') validateFunc = validateOrig; // original validate function
		else if (validateOrig) {
			switch (typeOrig) {
				case 'aadhar':
					validateFunc = v => !/^\d{4}\s\d{4}\s\d{4}$/.test(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid Aadhar Number');
					break;
				case 'dob':
					validateFunc = v => !validateDob(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid DOB Age Limit (18 to 57)');
					break;
				case 'pincode':
					validateFunc = v => !/^[1-9][0-9]{5}$/.test(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid Pincode');
					break;
				case 'pan':
					validateFunc = v => !/[A-Za-z]{5}\d{4}[A-Za-z]{1}/.test(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid PAN Number');
					break;
				case 'inr':
					validateFunc = v => !/^\d*$/.test(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid Amount');
					break;
				case 'mobile':
				case 'otp':
					validateFunc = v => validateMobile(v, typeof validateOrig === 'string' ? validateOrig : 'Invalid Indian Mobile');
					break;
				case 'email':
					validateFunc = v => validateEmail(v, typeof validateOrig === 'string' ? validateOrig : 'Invalid Email');
					break;
			}
		}
		if (required) {
			validateReq = v => typeof v === 'undefined' && (typeof required === 'string' ? required : 'Required');
			label += ' *';
		}
		return {
			label,
			validate: v => validateReq(v) || validateFunc(v),
		};
	}
	type() {
		const {type} = this.props;
		switch (type) {
			case 'array': return null;
			case 'inr':
			case 'mobile':
			case 'pincode': return 'number';
			case 'otp': return null;
			case 'switch': return 'checkbox';
			default: return type || 'text';
		}
	}
	module() {
		let {type, mui, formik = true, options} = this.props;

		switch (type) {
			case 'array':
				if (!formik) return {error: '`array` type is only supported via formik. `formik` prop must be set to true in order to use it.'};
				return {file: './formik/InputArray'};
			case 'buttons':
				return {file: `./${formik ? 'formik' : 'forms'}/ButtonGroup`};
			case 'checkbox':
				return {file: `./${formik ? 'formik' : 'forms'}/${options ? 'CheckboxGroup' : 'Checkbox'}`};
			case 'file':
				return {file: `./${formik ? 'formik' : 'forms'}/Dropzone`};
			case 'inr':
				return {file: `./${formik ? 'formik' : 'forms'}/CurrencyField`};
			case 'otp':
				return {file: `./${formik ? 'formik' : 'forms'}/OtpField`};
			case 'radio':
				return {file: `./${formik ? 'formik' : 'forms'}/${options ? 'RadioGroup' : 'Radio'}`};
			case 'select':
				return {file: `./${formik ? 'formik' : 'forms'}/${mui ? 'Select' : 'FilterField'}`};
			case 'switch':
				return {file: `./${formik ? 'formik' : 'forms'}/Switch`};
			default:
				return {file: `./${formik ? 'formik' : 'forms'}/TextField`};
		}
	}
	componentDidMount() {
		if (this.props.component) return;
		const {file, error} = this.module();
		if (error) this.setState({component: error});
		else {
			import(file)
				.then(({default: component}) => this.setState({component}))
				.catch(e => {
					console.error(e);  // eslint-disable-line no-console
					this.setState({component: e.message});
				});
		}
	}
	render() {
		const {type: typeOrig, container, validate, label, formik = true, mui, components: {Field = this.state.component, Loader = LinearProgress} = {}, fast = true, compact = true, ...rest} = this.props;  // eslint-disable-line no-unused-vars
		const Grid = container ? require('@material-ui/core/Grid').default : ({children}) => children;

		const type = this.type();
		const extraProps = {...(formik ? {fast} : {}), compact, ...this.extraProps()};

		return <Grid item={true} {...container}>
			{Field
				? <Field {...rest} {...(type ? {type} : {})} {...extraProps}/>
				: <Loader/>
			}
		</Grid>;
	}
}

export default Input;
