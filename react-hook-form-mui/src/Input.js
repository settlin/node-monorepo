import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

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

const module = function({type, rhf}) {
	switch (type) {
		case 'select':
			return rhf ? require('./react-hook-form/Select').default : require('./forms/Select').default;
		case 'buttons':
			return rhf ? require('./react-hook-form/ButtonGroup').default : require('./forms/ButtonGroup').default;
		case 'inr':
			return rhf ? require('./react-hook-form/CurrencyField').default : require('./forms/CurrencyField').default;
	}
	return rhf ?  require('./react-hook-form/TextField').default : require('./forms/TextField').default;
};


// eslint-disable-next-line react/no-multi-comp
function Input({type, container, validate, label, rhf = true, components: {input, Field = input, Loader = LinearProgress, ...components} = {}, compact = true, ...rest}) { // eslint-disable-line no-unused-vars
	const Container = container ? require('@material-ui/core/Grid').default : Fragment;
	const containerProps = container ? {item: true, ...container} : {};
	Field = Field || module({type, rhf});
	const extraProps = {...{compact, type, label, components}};
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
	label: PropTypes.string,
	rhf: PropTypes.bool,
	type: PropTypes.string,
	validate: PropTypes.func,
};

export default Input;
