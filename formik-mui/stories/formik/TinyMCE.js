import React, {PureComponent} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {Formik, Form, setIn} from 'formik';
import {Input, Button, currencify} from '../../src';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {LocalizationProvider} from '@mui/lab';
import TM from '../components/TinyMCE';

class DemoForm extends PureComponent {
	constructor(props) {
		super(props);
		this.hSubmit = this.hSubmit.bind(this);
		this.validate = this.validate.bind(this);
	}
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
		const initialValues = {tinymce: '<p>new one</p>'};

		return (
             <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container item spacing={1} style={{padding: '2rem'}}>
                    <Formik initialValues={initialValues} enableReinitialize={true} isInitialValid={false} onSubmit={this.hSubmit} validate={this.validate}>
                        {({isSubmitting, values, errors, isValid}) => <Form  autoComplete='off' style={{width: '100%'}}>
                            <Grid container item spacing={1} xs={12}>
                                <Grid item xs={6}>
                                    <Typography>Tiny MCE</Typography>
                                    <Input base components={{input: TM}} name='tinymce' className='tinymce' label='Text Area' container={{xs: 12}}/>
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
            </LocalizationProvider>
        );
	}
}

export default DemoForm;
