import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import LinearProgress from '@mui/material/LinearProgress';

class ErrorBoundary extends React.Component {
	state = {error: false};
	static getDerivedStateFromError(error) {
		return {error};
	}
	componentDidCatch(error, info) {
		this.setState({error});
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

ErrorBoundary.propTypes = {
	children: PropTypes.node,
};

const typeValue = (type) => {
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

const module = function({type, rhf}) {
	switch (type) {
		case 'array':
			if (!rhf) throw new Error('`array` type is only supported via rhf. `rhf` prop must be set to true in order to use it.');
			return require('./react-hook-form/InputArray').default;
		case 'autocomplete':
			return rhf ? require('./react-hook-form/Autocomplete').default : require('./forms/Autocomplete').default;
		case 'select':
			return rhf ? require('./react-hook-form/Select').default : require('./forms/Select').default;
		case 'buttons':
			return rhf ? require('./react-hook-form/ButtonGroup').default : require('./forms/ButtonGroup').default;
		case 'multiLevelButtons':
			return rhf ? require('./react-hook-form/MultiButtonGroup').default : require('./forms/ButtonGroup').default;
		case 'inr':
			return rhf ? require('./react-hook-form/CurrencyField').default : require('./forms/CurrencyField').default;
		case 'checkbox':
			return rhf ? require('./react-hook-form/CheckboxGroup').default : require('./forms/CheckboxGroup').default;
		case 'selectchip':
			return rhf ? require('./react-hook-form/SelectWithChip').default : require('./forms/SelectWithChip');
		case 'slider':
			return rhf ? require('./react-hook-form/Slider').default : require('./forms/Slider');
	}
	return rhf ?  require('./react-hook-form/TextField').default : require('./forms/TextField').default;
};
// eslint-disable-next-line react/no-multi-comp
function Input({type, container, validate, label, rhf = true, components: {input, Field = input, Loader = LinearProgress, ...components} = {}, compact, ...rest}) {// eslint-disable-lineno-unused-varsno-unused-vars
	const Container = container ? require('@mui/material/Grid').default : Fragment;
	const containerProps = container ? {item: true, ...container} : {};

	Field = Field || module({type, rhf});
	type = typeValue(type)
	const extraProps = {...{compact, type, label, components}};
	return (
		<ErrorBoundary>
			<Container {...containerProps}>
				{Field
					? <Field {...rest} {...extraProps} variant="standard"/>
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
	label: PropTypes.string,
	rhf: PropTypes.bool,
	type: PropTypes.string,
	validate: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

export default Input;
