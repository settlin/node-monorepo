import React, {PureComponent} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Formik, Form, setIn} from 'formik';
import {Input, Button, currencify} from '../../src';

class DemoForm extends PureComponent {
	constructor(props) {
		super(props);
		this.hSubmit = this.hSubmit.bind(this);
		this.validate = this.validate.bind(this);
	}
	static arrayMeta = [
		{
			name: 'type', label: 'Type', required: true, type: 'select', container: {xs: 4}, options: [
				{value: 'p', label: 'Personal'},
				{value: 'w', label: 'Work'},
			],
		},
		{name: 'mobile', label: 'Mobile', required: true, type: 'mobile', container: {xs: 7}},
	]
	validate(values) {
		let errors = {};
		if ((values.negotiable || {}).no || !(values.negotiable || {}).upto) return errors;
		let diff = (values.current.value - values.negotiable.upto) * 100 / values.current.value;
		let minDiff = values.current.value > 20000000 ? 7 : values.current.value > 10000000 ? 5 : 3, maxDiff = 10;
		if (diff < minDiff || diff > maxDiff) {
			errors = setIn(errors, 'negotiable.upto', diff > maxDiff
				? `The difference must be less than ${maxDiff}%. Negotiable Upto must be more than ${currencify({amount: Math.round((100 - maxDiff) * values.current.value / 100), abbreviated: true})}`
				: `The difference must be more than ${minDiff}%. Negotiable Upto must be less than ${currencify({amount: Math.round((100 - minDiff) * values.current.value / 100), abbreviated: true})}`
			);
		}
		return errors;
	}
	hSubmit(values, {setSubmitting}) {
		this.props.onSubmit(values);
		setTimeout(() => {
			setSubmitting(false);
		}, 1000);
	}
	render() {
		const initialValues = {phones: [{mobile: '80808080'}], currency: 900000};

		return (
			<Grid container item spacing={1} style={{padding: '2rem'}}>
				<Formik initialValues={initialValues} enableReinitialize={true} isInitialValid={false} onSubmit={this.hSubmit} validate={this.validate}>
					{({isSubmitting, values, errors, isValid}) => <Form autoComplete='off' style={{width: '100%'}}>
						<Grid item xs={12}>
							<Typography variant='h5'>Compact: true (default)</Typography>
							<Grid container>
								<Input name='checkboxGroup.optional' type='checkbox' container={{xs: 4}} label='Checkbox Group' options={[
									{value: 'me', label: 'Me'},
									{value: 'you', label: 'You'},
									{value: 'me', label: 'Me'},
									{value: 'you', label: 'You1234'},
									{value: 'me', label: 'Me'},
									{value: 'you', label: 'You11W'},
									{value: 'me', label: 'Me'},
									{value: 'you', label: 'You'},
								]} FormGroupProps={{style: {display: 'grid', gridTemplateColumns: 'auto auto auto auto'}}}/>
								<Input name='checkbox.optional' type='checkbox' container={{xs: 2}} label='Checkbox'/>
								<Input name='switch.optional' type='switch' container={{xs: 3}} label='On' offLabel='Off'/>
							</Grid>
							<Grid container>
								<Input required name='checkboxGroup.required' type='checkbox' container={{xs: 4}} label='Checkbox Group' options={[
									{value: 'me', label: 'Me'},
									{value: 'you', label: 'You'},
								]}/>
								<Input required name='checkbox.required' type='checkbox' container={{xs: 2}} label='Checkbox'/>
								<Input required name='switch.required' type='switch' container={{xs: 3}} label='Switch'/>
							</Grid>
							<Typography variant='h5' style={{marginTop: '16px'}}>Compact: false</Typography>
							<Grid container>
								<Input compact={false} name='checkboxGroup.optional' type='checkbox' container={{xs: 4}} label='Checkbox Group' options={[
									{value: 'me', label: 'Me'},
									{value: 'you', label: 'You'},
								]}/>
								<Input compact={false} name='checkbox.optional' type='checkbox' container={{xs: 2}} label='Checkbox'/>
								<Input compact={false} name='switch.optional' type='switch' container={{xs: 3}} label='Switch'/>
							</Grid>
							<Grid container>
								<Input required compact={false} name='checkboxGroup.required' type='checkbox' container={{xs: 4}} label='Checkbox Group' options={[
									{value: 'me', label: 'Me'},
									{value: 'you', label: 'You'},
								]}/>
								<Input required compact={false} name='checkbox.required' type='checkbox' container={{xs: 2}} label='Checkbox'/>
								<Input required compact={false} name='switch.required' type='switch' container={{xs: 3}} label='Switch'/>
							</Grid>
							<Grid container item xs={12} justify='center'>
								<Button type='submit' variant='contained' size='small' disabled={!isValid || isSubmitting} processing={isSubmitting} label='Submit'/>
							</Grid>
							<Grid container item xs={12} justify='center'>
								Values: {JSON.stringify(values)}
							</Grid>
							<Grid container item xs={12} justify='center'>
								Errors: {JSON.stringify(errors)}
							</Grid>
						</Grid>
					</Form>}
				</Formik>
			</Grid>
		);
	}
}

export default DemoForm;
