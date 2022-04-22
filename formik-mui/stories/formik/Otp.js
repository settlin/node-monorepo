import React, {PureComponent} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Formik, Form, setIn} from 'formik';
import {Input, Button, currencify} from '../../src';
import Otp from '../components/OtpField';

class DemoForm extends PureComponent {
	constructor(props) {
		super(props);
		this.hSubmit = this.hSubmit.bind(this);
	}
	hSubmit(values, {setSubmitting}) {
		this.props.onSubmit(values);
		setTimeout(() => {
			setSubmitting(false);
		}, 1000);
	}
	render() {
		const initialValues = {mobile: '80808080'};

		return (
            <Grid container item spacing={1} style={{padding: '2rem'}}>
				<Formik initialValues={initialValues} enableReinitialize={true} isInitialValid={false} onSubmit={this.hSubmit}>
					{({isSubmitting, values, errors, isValid}) => <Form autoComplete='off' style={{width: '100%'}}>
						<Grid item xs={12}>
							<Typography variant='h5'>Compact: true (default)</Typography>
							<Grid container>
								<Input name='mobile' base container={{xs: 4}} label='Mobile' components={{input: Otp}}/>
							</Grid>
							<Grid container item xs={12} justifyContent='center'>
								<Button type='submit' variant='contained' size='small' disabled={!isValid || isSubmitting} processing={isSubmitting} label='Submit'/>
							</Grid>
							<Grid container item xs={12} justifyContent='center'>
								Values: {JSON.stringify(values)}
							</Grid>
							<Grid container item xs={12} justifyContent='center'>
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
