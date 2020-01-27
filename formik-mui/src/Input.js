import React, {Fragment} from 'react';
import validateEmail from './utils/validate/email';
import validateMobile from './utils/validate/mobile';
import validateIndianMobile from './utils/validate/indianMobile';
import validateDob from './utils/validate/dob';
import LinearProgress from '@material-ui/core/LinearProgress';

class ErrorBoundary extends React.Component {
	state = {error: false};
	static getDerivedStateFromError(error) {
		return {error};
	}
	componentDidCatch(error, info) {
		console.log(error, info); // eslint-disable-line no-console
	}
	render() {
		if (this.state.error) return <h1>{this.state.error.toString()}</h1>;
		return this.props.children;
	}
}

class Input extends React.PureComponent {
	state = {}
	extraProps() {
		let {type: typeOrig, label = '', required, validate: validateOrig, compact = true, formik = true, indian} = this.props;

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
				case 'currency':
				case 'inr':
					validateFunc = v => !/^\d*$/.test(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid Amount');
					break;
				case 'mobile':
					validateFunc = v => (indian ? validateIndianMobile : validateMobile)(v, typeof validateOrig === 'string' ? validateOrig : indian ? 'Invalid Indian Mobile' : 'Invalid Mobile');
					break;
				case 'email':
					validateFunc = v => validateEmail(v, typeof validateOrig === 'string' ? validateOrig : 'Invalid Email');
					break;
			}
		}
		if (required) {
			validateReq = v => typeof v === 'undefined' && (typeof required === 'string' ? required : 'Required');
			if (compact && label) label = label.replace(/\*$/, '').trim() + ' *';
		}

		const validate = typeOrig === 'array' ? null : v => validateReq(v) || ((v === 0 || v) && validateFunc(v));
		return {
			label,
			validate,
		};
	}
	type() {
		const {type} = this.props;
		switch (type) {
			case 'array': return null;
			case 'currency':
			case 'inr':
			case 'mobile':
			case 'pincode': return 'number';
			case 'switch': return 'checkbox';
			default: return type || 'text';
		}
	}
	module() {
		let {base, type, formik = true, options} = this.props;
		let file = 'TextField';

		if (base) file = 'Base';
		else {
			switch (type) {
				case 'array':
					if (!formik) throw new Error('`array` type is only supported via formik. `formik` prop must be set to true in order to use it.');
					file = 'InputArray';
					break;
				case 'buttons':
					file = 'ButtonGroup';
					break;
				case 'checkbox':
					file = options ? 'CheckboxGroup' : 'Checkbox';
					break;
				case 'currency':
				case 'inr':
					file = 'CurrencyField';
					break;
				case 'radio':
					file = `${options ? 'RadioGroup' : 'Radio'}`;
					break;
				case 'select':
					file = 'Select';
					break;
				case 'switch':
					file = 'Switch';
					break;
			}
		}

		return formik ? require(`./formik/${file}`).default : require(`./forms/${file}`).default;
	}
	render() {
		const {type: typeOrig, container, validate, label, formik = true, base, components: {input, Field = this.module(), Loader = LinearProgress} = {}, fast = true, compact = true, ...rest} = this.props;  // eslint-disable-line no-unused-vars
		const Container = container ? require('@material-ui/core/Grid').default : Fragment;
		const containerProps = container ? {item: true, ...container} : {};

		const type = this.type();
		const extraProps = {...(formik ? {fast} : {}), ...(input ? {component: input} : {}), compact, ...this.extraProps()};

		return <ErrorBoundary>
			<Container {...containerProps}>
				{Field
					? <Field {...rest} {...(type ? {type} : {})} {...extraProps}/>
					: <Loader/>
				}
			</Container>
		</ErrorBoundary>;
	}
}

export default Input;
