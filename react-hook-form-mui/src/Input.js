import PropTypes from 'prop-types';
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
		if (this.state.error) {
			return (
				<h1>
					{this.state.error.toString()}
				</h1>
			);
		}
		return this.props.children;
	}
}

const getExtraProps = function({type, label, required, validate: validateOrig, compact, rhf, indian}) {
	if (required && compact && label) label = label.replace(/\*$/, '').trim() + ' *';
	if (!rhf) return {label};

	let validateFunc = () => { }, validateReq = () => { };
	if (typeof validateOrig === 'function') validateFunc = validateOrig; // original validate function
	else if (validateOrig) {
		switch (type) {
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
	}

	const validate = type === 'array' ? null : v => validateReq(v) || ((v === 0 || v) && validateFunc(v));
	return {
		label,
		validate,
	};
};
const getType = function({type}) {
	switch (type) {
		case 'array': return null;
		case 'currency':
		case 'inr':
		case 'mobile':
		case 'pincode': return 'number';
		case 'switch': return 'checkbox';
		default: return type || 'text';
	}
};

const module = function({base, type, rhf, options, components}) {
	// if (base) {
	// 	return rhf ? require('./react-hook-form/Base').default : input || require('./forms/Base').default;
	// }

	// switch (type) {
	// 	case 'array':
	// 		if (!rhf) throw new Error('`array` type is only supported via rhf. `rhf` prop must be set to true in order to use it.');
	// 		return require('./react-hook-form/InputArray').default;
	// 	case 'buttons':
	// 		return rhf ? require('./react-hook-form/ButtonGroup').default : input || require('./forms/ButtonGroup').default;
	// 	case 'checkbox':
	// 		return options
	// 			? rhf ? require('./react-hook-form/CheckboxGroup').default : input || require('./forms/CheckboxGroup').default
	// 			: rhf ? require('./react-hook-form/Checkbox').default : input || require('./forms/Checkbox').default;
	// 	case 'currency':
	// 	case 'inr':
	// 		return rhf ? require('./react-hook-form/CurrencyField').default : input || require('./forms/CurrencyField').default;
	// 	case 'radio':
	// 		return options
	// 			? rhf ? require('./react-hook-form/RadioGroup').default : input || require('./forms/RadioGroup').default
	// 			: rhf ? require('./react-hook-form/Radio').default : input || require('./forms/Radio').default;
	// 	case 'select':
	// 		return rhf ? require('./react-hook-form/Select').default : input || require('./forms/Select').default;
	// 	case 'switch':
	// 		return rhf ? require('./react-hook-form/Switch').default : input || require('./forms/Switch').default;
	// }
	return rhf ? require('./react-hook-form/TextField').default : input || require('./forms/TextField').default;
};

// eslint-disable-next-line react/no-multi-comp
function Input({type, container, validate, label, rhf = true, base, components: {input, Field, Loader = LinearProgress, ...components} = {}, fast = true, compact = true, ...rest}) { // eslint-disable-line no-unused-vars
	const Container = container ? require('@material-ui/core/Grid').default : Fragment;
	const containerProps = container ? {item: true, ...container} : {};
	Field = Field || module({base, type, rhf});

	const newType = getType({type});
	const extraProps = {...(rhf ? {fast, ...(input ? {component: input} : {})} : {}), compact, components, ...getExtraProps({type, label, required: rest.required, validate, compact, rhf, indian: rest.indian})};

	return (
		<ErrorBoundary>
			<Container {...containerProps}>
				{Field
					? <Field {...rest} {...(newType ? {type: newType} : {})} {...extraProps}/>
					: <Loader/>
				}
			</Container>
		</ErrorBoundary>
	);
}

Input.propTypes = {
	base: PropTypes.bool,
	compact: PropTypes.bool,
	components: PropTypes.object,
	container: PropTypes.object,
	fast: PropTypes.bool,
	rhf: PropTypes.bool,
	label: PropTypes.string,
	type: PropTypes.string,
	validate: PropTypes.func,
};

export default Input;
