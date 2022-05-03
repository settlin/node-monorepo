import React, {PureComponent} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
					<Typography variant='h5'>
						Compact: true (default)
					</Typography>
					<Grid container>
						<Input checked={ro} container={{xs: 3}} formik={false} label='On' name='radio.optional' onChange={e => this.setState({'radio.optional': e.currentTarget.checked}) || onChange} type='radio'/>
						<Input checked={ro} container={{xs: 3}} formik={false} label='On' name='radio.optional' onChange={e => this.setState({'radio.optional': e.currentTarget.checked}) || onChange} type='radio'/>
						<Input checked={co} container={{xs: 3}} formik={false} label='On' name='checkbox.optional' onChange={e => this.setState({'checkbox.optional': e.currentTarget.checked}) || onChange} type='checkbox'/>
						<Input checked={so} container={{xs: 3}} formik={false} label='On' name='switch.optional' offLabel='Off' onChange={e => this.setState({'switch.optional': e.currentTarget.checked}) || onChange} type='switch'/>
						<Input checked={so} container={{xs: 3}} formik={false} name='buttons' onChange={e => this.setState({'buttons': e}) || onChange} options={options} type='buttons'/>
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
