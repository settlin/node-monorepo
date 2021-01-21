import React, {PureComponent} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Input} from '../../src';

const options = [
	{value: 'call', label: 'Call'},
	{value: 'email', label: 'Email'},
	{value: 'whatsapp', label: 'Whatsapp'},
];
class DemoForm extends PureComponent {
	state = {'switch.optional': true}
	render() {
		const {onChange} = this.props;
		const {'switch.optional': so, 'checkbox.optional': co, 'radio.optional': ro} = this.state;
		return (
			<Grid container item spacing={1} style={{padding: '2rem'}}>
				<Grid item xs={12}>
					<Typography variant='h5'>Compact: true (default)</Typography>
					<Grid container>
						<Input formik={false} checked={ro} name='radio.optional' type='radio' container={{xs: 3}} label='On' onChange={e => this.setState({'radio.optional': e.currentTarget.checked}) || onChange}/>
						<Input formik={false} checked={co} name='checkbox.optional' type='checkbox' container={{xs: 3}} label='On' onChange={e => this.setState({'checkbox.optional': e.currentTarget.checked}) || onChange}/>
						<Input formik={false} checked={so} name='switch.optional' type='switch' container={{xs: 3}} label='On' offLabel='Off' onChange={e => this.setState({'switch.optional': e.currentTarget.checked}) || onChange}/>
						<Input formik={false} checked={so} name='buttons' type='buttons' container={{xs: 3}} options={options} onChange={e => this.setState({'buttons': e}) || onChange}/>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					{JSON.stringify(this.state)}
				</Grid>
			</Grid>
		);
	}
}

export default DemoForm;
