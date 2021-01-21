import * as React from 'react';
import {connect} from 'formik';
import debounce from 'lodash.debounce';
import isEqual from 'react-fast-compare';

class Persist extends React.Component {
	static defaultProps = {
		debounce: 300,
	}
	constructor(props) {
		super(props);
		this.saveForm = debounce(this.saveForm, props.debounce).bind(this);
	}
	saveForm(data) {
		const {name, genericKeys = []} = this.props;
		if (!window.formStore) {
			Log.fatal('Please define the infoStore');
			return;
		}
		formStore.setItem(name, data);
		const genericData = {};
		genericKeys.forEach(k => {genericData[k] = data[k];});
		formStore.setItem('generic', genericData);
	}
	componentDidUpdate(prevProps) {
		if (!isEqual((prevProps.formik || {}).values, (this.context.formik || {}).values)) this.saveForm(prevProps.formik.values);
	}
	componentDidMount() {
		const {formik, name} = this.props;
		if (!window.formStore) {
			Log.fatal('Please define the infoStore');
			return;
		}
		formStore.getItem('generic').then(genericData => {
			genericData && formik.setValues({...formik.values, ...genericData});
			formStore.getItem(name).then(formData => formData && formik.setValues({...formik.values, ...formData}));
		});
	}
	render() {
		return null;
	}
}

export default connect(Persist);
