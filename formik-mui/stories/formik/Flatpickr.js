import React, {PureComponent} from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import {Formik, Form, setIn} from 'formik';
import {Input, currencify, Button} from '../../src';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {LocalizationProvider} from '@mui/lab';
import FlatpickrField from '../components/FlatpickrField';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'relative',
		zIndex: 1,
		marginTop: theme.spacing(1),
		left: 0,
		right: 0,
	},
	chip: {
		fontWeight: props => props.isSelected ? 500 : 400,
		zIndex: 2,
		justifyContent: 'left',
		textOverflow: 'ellipsis',
	},
}));

function Menu(props) {
	const classes = useStyles({});
	return (
		<Paper square className={classes.paper} {...props.innerProps}>
			{props.children}
		</Paper>
	);
}

function Option(props) {
	const classes = useStyles(props);

	return (
		<Chip
			buttonRef={props.innerRef}
			selected={props.isFocused}
			size='small'
			variant={props.isSelected ? 'default' : 'outlined'}
			avatar={<Avatar>{props.children[0].toUpperCase()}</Avatar>}
			className={classes.chip}
			{...props.innerProps}
			label={props.children}
			title={props.children}
		/>
	);
}

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
		const initialValues = {};

		return (
             <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container item spacing={1} style={{padding: '2rem'}}>
                    <Formik initialValues={initialValues} enableReinitialize={true} isInitialValid={false} onSubmit={this.hSubmit} validate={this.validate}>
                        {({isSubmitting, values, errors, isValid}) => <Form  autoComplete='off' style={{width: '100%'}}>
                            <Grid container item spacing={1} xs={12}>
                                <Input name='dateRange' base
                                    components={{input: FlatpickrField}}
                                    options={{}}
                                    range
                                    label='Date Range'
                                    container={{xs: 12}}
                                />
                            </Grid>
                            <Grid container item spacing={1} xs={12}>
                                <Input name='date' base
                                    components={{input: FlatpickrField}}
                                    options={{}}
                                    label='Date'
                                    container={{xs: 12}}
                                />
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
                        </Form>}
                    </Formik>
                </Grid>
            </LocalizationProvider>
        );
	}
}

export default DemoForm;
