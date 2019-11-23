import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import {Formik, Form} from 'formik';
import {Button} from '../../src';
import DoneAllIcon from '@material-ui/icons/DoneAll';

class DemoForm extends PureComponent {
	constructor(props) {
		super(props);
		this.hSubmit = this.hSubmit.bind(this);
	}
	hSubmit(values, {setSubmitting}) {
		this.props.onSubmit(values);
		setTimeout(() => {
			setSubmitting(false);
		}, 100000000);
	}
	render() {
		return (
			<Grid container item spacing={1} style={{padding: '2rem'}}>
				<Formik onSubmit={this.hSubmit}>
					{({isSubmitting}) => <Form autoComplete='off' style={{width: '100%'}}>
						<Grid item xs={12}>
							<Button fab size='small' title='Mark this unit as great priced' type='submit' disabled={isSubmitting} processing={isSubmitting} CircularProgressProps={{size: 20}} Icon={DoneAllIcon}/>
							<Button fab size='large' title='Mark this unit as great priced' type='submit' disabled={isSubmitting} processing={isSubmitting} CircularProgressProps={{size: 20}} Icon={DoneAllIcon}/>
							<Button fab title='Mark this unit as great priced' type='submit' disabled={isSubmitting} processing={isSubmitting} CircularProgressProps={{size: 20}}/>

							<Button size='small' title='Mark this unit as great priced' type='submit' disabled={isSubmitting} processing={isSubmitting} CircularProgressProps={{size: 20}} Icon={DoneAllIcon}/>
							<Button size='large' title='Mark this unit as great priced' type='submit' disabled={isSubmitting} processing={isSubmitting} CircularProgressProps={{size: 20}}/>
							<Button title='Mark this unit as great priced' type='submit' disabled={isSubmitting} success={true} processing={isSubmitting} CircularProgressProps={{size: 20}} Icon={DoneAllIcon}/>
						</Grid>
					</Form>}
				</Formik>
			</Grid>
		);
	}
}

export default DemoForm;
