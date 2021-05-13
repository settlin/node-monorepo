import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import validateEmail from './utils/validate/email';
import validateMobile from './utils/validate/mobile';
import validateIndianMobile from './utils/validate/indianMobile';
import validateDob from './utils/validate/dob';
import LinearProgress from '@material-ui/core/LinearProgress';
import {TextField} from './index';

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

const getExtraProps = function({type, label, required, compact, rhf, validate: validateOrig, indian}) {
	if (!rhf) return {label};

	let validateFunc = () => { }, validateReq = () => { };
	if (typeof validateOrig === 'function') validateFunc = validateOrig; // original validate function
	else if (validateOrig) {
		switch (type) {
			case 'mobile':
				validateFunc = v => (indian ? validateIndianMobile : validateMobile)(v, typeof validateOrig === 'string' ? validateOrig : indian ? 'Invalid Indian Mobile' : 'Invalid Mobile');
				break;
			case 'email':
				validateFunc = v => validateEmail(v, typeof validateOrig === 'string' ? validateOrig : 'Invalid Email');
				break;
		}
	}
};

const module = function({type, rhf, components: {input} = {}}) {
	switch (type) {
		case 'select':
			return rhf ? require('./react-hook-form/Select').default : input || require('./forms/Select').default;
	}
	return rhf ?  require('./react-hook-form/TextField').default : input || require('./forms/TextField').default;
};


// eslint-disable-next-line react/no-multi-comp
function Input({type, container, validate, label, rhf = true, components: {input, Field, Loader = LinearProgress, ...components} = {}, compact = true, ...rest}) { // eslint-disable-line no-unused-vars
	const Container = container ? require('@material-ui/core/Grid').default : Fragment;
	const containerProps = container ? {item: true, ...container} : {};
	Field = Field || module({type, rhf});
	const extraProps = {...(rhf ? {...(input ? {component: input} : {})} : {}), compact, label, components, ...getExtraProps({type, label, required: rest.required, validate, compact, rhf, indian: rest.indian})};
	return (
		<ErrorBoundary>
			<Container {...containerProps}>
				{Field
					? <Field {...rest} {...type} {...extraProps}/>
					: <Loader/>
				}
			</Container>
		</ErrorBoundary>
	);
}

Input.propTypes = {
	compact: PropTypes.bool,
	components: PropTypes.object,
	container: PropTypes.object,
	rhf: PropTypes.bool,
	label: PropTypes.string,
	type: PropTypes.string,
	validate: PropTypes.func,
};

export default Input;
