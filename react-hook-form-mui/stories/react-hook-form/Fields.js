import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import {Formik, Form, setIn} from 'formik';
import {Input, Button, currencify} from '../../src';
import DayJSUtils from '@date-io/dayjs';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
// import Dropzone from '../components/Dropzone';
// import FilterField from '../components/FilterField';
// import DateTimePicker from '../components/DateTimePicker';
import {useWatch, useForm} from 'react-hook-form';
// import ButtonGroup from '../../src/forms/ButtonGroup';
import MultiButtonGroup from '../../src/react-hook-form/MultiButtonGroup';
// import CurrencyField from '../../src/react-hook-form/CurrencyField';

const eee = errors => Object.entries(errors).reduce((a, [k, {message, type}]) => ({...a, [k]: {message, type}}), {});

const arrayMeta = [
	{name: 'type', label: 'Type', required: true, type: 'select', container: {xs: 4}, options: [
		{value: 'p', label: 'Personal'},
		{value: 'w', label: 'Work'},
	]},
	{name: 'mobile', label: 'Mobile', required: true, type: 'mobile', container: {xs: 7}, validate: true},
];

const options = [
	{value: 'a-', label: 'Apartment', options: [
		{value: 'a', label: 'Any Apartment', finalValue: {type: 'apartment', gated: true, project: true}},
		{value: 'a:n', label: 'Only Apartment', finalValue: {type: 'apartment', gated: true, project: true, penthouse: false, villament: false}},
		{value: 'a:p', label: 'Penthouse', finalValue: {type: 'apartment', gated: true, project: true, penthouse: true, villament: false}},
		{value: 'a:v', label: 'Villament', finalValue: {type: 'apartment', gated: true, project: true, villament: true, penthouse: false}},
	]},
	{
		value: 'h-', label: 'House', options: [
			// gated, project, single, villa, villaType mandatory
			{value: 'h', label: 'Any House', finalValue: {type: 'house', villa: false}},
			{
				value: 'h:g-', label: 'House in Gated Community', options: [
					{value: 'h:g', label: 'Any Gated Community House', finalValue: {type: 'house', gated: true, project: false, villa: false}},
					{value: 'h:g:s', label: 'Single Family House (GC)', finalValue: {type: 'house', gated: true, project: false, single: true, villa: false, villaType: null}},
					{value: 'h:g:m', label: 'Multi Family House (GC)', finalValue: {type: 'house', gated: true, project: false, single: false, villa: false, villaType: null}},
				],
			},
			{value: 'h:p-', label: 'House in a Project', options: [
				{value: 'h:p', label: 'Any House in a Project', finalValue: {type: 'house', gated: true, project: true, villa: false}},
				{value: 'h:p:s', label: 'Single Family House in Project', finalValue: {type: 'house', gated: true, project: true, single: true, villa: false, villaType: null}},
				{value: 'h:p:m', label: 'Multi Family House in Project', finalValue: {type: 'house', gated: true, project: true, single: false, villa: false, villaType: null}},
			]},
			{
				value: 'h:i-', label: 'Independent House', options: [
					{value: 'h:i', label: 'Any Independent House', finalValue: {type: 'house', gated: false, project: false, villa: false}},
					{value: 'h:i:s', label: 'Single Family House (I)', finalValue: {type: 'house', gated: false, project: false, single: true, villa: false, villaType: null}},
					{value: 'h:i:m', label: 'Multi Family House (I)', finalValue: {type: 'house', gated: false, project: false, single: false, villa: false, villaType: null}},
				],
			},
		],
	},
	{
		value: 'v-', label: 'Villa', options: [
			// gated, project, single, villa, villaType mandatory
			{value: 'v', label: 'Any Villa', finalValue: {type: 'house', gated: true, project: true, villa: true, single: true}},
			{value: 'v:s', label: 'Standalone (Villa)', finalValue: {type: 'house', gated: true, project: true, villa: true, single: true, villaType: 'standalone'}},
			{value: 'v:1', label: '1-2 (Villa)', finalValue: {type: 'house', gated: true, project: true, villa: true, single: true, villaType: '1-2'}},
			{value: 'v:r', label: 'Row (Villa)', finalValue: {type: 'house', gated: true, project: true, villa: true, single: true, villaType: 'row'}},
		],
	},
	{
		value: 'p-', label: 'Plot', options: [
			// gated, project mandatory
			{value: 'p', label: 'Any Plot', finalValue: {type: 'plot'}},
			{value: 'p:p', label: 'Gated Builder Plot', finalValue: {type: 'plot', gated: true, project: true}},
			{value: 'p:g', label: 'Gated Community Plot', finalValue: {type: 'plot', gated: true, project: false}},
			{value: 'p:i', label: 'Independent Plot', finalValue: {type: 'plot', gated: false, project: false}},
		],
	},
];

function IsolateReRender({control, name}) {
	const values = useWatch({
		control,
		name, // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
	});

	return (
		<div style={{marginTop: '7%'}}>
			{JSON.stringify(values)}
		</div>
	); // only re-render at the component level
}

IsolateReRender.propTypes = {
	control: PropTypes.object,
	name: PropTypes.PropTypes.oneOfType([
		PropTypes.string, PropTypes.arrayOf(PropTypes.string),
	]),
};

// eslint-disable-next-line react/no-multi-comp
function DemoForm({onSubmit}) {
	const hSubmit = function(values, {setSubmitting}) {
		onSubmit(values);
		setTimeout(() => {
			setSubmitting(false);
		}, 1000);
	};

	const defaultValues = {text: 'name'};
	const {handleSubmit, formState: {errors, isSubmitting, isDirty, isValid}, control} = useForm({
		defaultValues,
		mode: 'onChange',
	});
	// console.log(watch('textArea')); // watch input value by passing the name of it


	return (
		<MuiPickersUtilsProvider utils={DayJSUtils}>
			<Grid container item spacing={1} style={{padding: '2rem'}}>
				<form onSubmit={handleSubmit(hSubmit)} style={{width: '100%'}}>
					<Grid container item spacing={1} xs={12}>
						<Grid item xs={6}>
							<Typography>
								Phones (Array of Inputs)
							</Typography>
							<Input container={{xs: 12}} control={control} label='Phones' metaList={arrayMeta} name='phones' type='array'/>
							{/* <Input formik={false} base name='files' label='File Drop' container={{xs: 12}} filesLimit={10}
									handleUpload={(file, cb) => setTimeout(cb, 1000)}
									handleDelete={(file, cb) => setTimeout(cb, 1000)}
									components={{PreviewsChildren: this.PreviewsChildren, input: Dropzone}}
								/> */}
						</Grid>
						<Grid item xs={6}>
							<Grid container direction='column'>
								{/* <Grid container item style={{marginTop: '16px'}} xs={12} spacing={1}>
										<Input formik={false} name='month' type='month' label='Month' container={{xs: 4}}/>
										<Input formik={false} name='date' fast={false} type='date' label='Date' container={{xs: 4}}/>
										<Input formik={false} name='date1' base components={{input: DateTimePicker}} fast={false} type='date' label='Date 1' container={{xs: 4}} defaultValue={new Date('1 nov 2019')} maxDate={new Date('1 feb 2020')}/>
										<Input formik={false} name='date2' base components={{input: DateTimePicker}} fast={false} type='datetime' label='Date Time' container={{xs: 4}} defaultValue={new Date('1 nov 2019')}/>
										<Input formik={false} name='currency' type='inr' label='Currency' container={{xs: 4}}/>
									</Grid>
									<Grid container item style={{marginTop: '16px'}} xs={12} spacing={1}>
										<Input formik={false} required name='mui' type='select' label='Select (Material UI)' container={{xs: 6}} options={[
											{value: '1', label: 'Reason 1'},
											{value: '2', label: 'Reason 2'},
										]}/>
										<Input formik={false} multiple name='mui.multi' type='select' label='Select (MUI)' compact={false} container={{xs: 6}} options={[
											{value: '', label: 'Multiple Mui'},
											{value: '2', label: 'Reason 2'},
										]}/>
										<Input formik={false} required components={{input: FilterField}} base name='react.select' label='Select (React Select)' helperText='Default select is react-select' container={{xs: 6}}
											optionsAsync={function(v, cb) {
												cb([
													{value: '1', label: '1'},
													{value: '2', label: '2'},
												].filter(({value}) => !v || value === v));
											}}
										/>
										<Input formik={false} required components={{input: FilterField}} base name='react.select' compact={false} label='Select (React Select)' helperText='React select without compact' container={{xs: 6}}
											options={[
												{value: '1', label: '1'},
												{value: '2', label: '2'},
											]}
										/>
										<Input formik={false} required components={{input: FilterField}} base name='react.select' compact={false} InputLabelProps={{shrink: true}} label='Select (React Select)' helperText='React select with fixed label' container={{xs: 6}}
											options={[
												{value: '1', label: '1'},
												{value: '2', label: '2'},
											]}
										/>
									</Grid>
									<Grid container item style={{marginTop: '16px'}} xs={12} spacing={1}>
										<Input formik={false} required disabled components={{input: FilterField}} base name='react.select' label='Select (React Select)' helperText='disabled react-select' container={{xs: 6}} optionsAsync={function(v, cb) {
											cb([
												{value: '1', label: '1'},
												{value: '2', label: '2'},
											].filter(({value}) => !v || value === v));
										}}/>
										<Input formik={false} required readOnly components={{input: FilterField}} base name='react.select' label='Select (React Select)' helperText='readOnly react-select' container={{xs: 6}} optionsAsync={function(v, cb) {
											cb([
												{value: '1', label: '1'},
												{value: '2', label: '2'},
											].filter(({value}) => !v || value === v));
										}}/>
									</Grid> */}
								<Grid container item spacing={1} style={{marginTop: '16px'}} xs={12}>
									<Input compact container={{xs: 6}} control={control} label='Text' name='text' type='text'/>
									<Input container={{xs: 6}} control={control} label='Text Area' multiline name='textArea' required type='textarea'/>
									{/* <Input components={{input: CurrencyField}} control={control} name='currency' type='inr'/> */}
								</Grid>
								<Grid container item spacing={1} style={{marginTop: '16px'}} xs={12}>
									<Input
										components={{input: MultiButtonGroup}}
										container={{xs: 6}}
										control={control}
										label='Button Groups'
										name='propertyType'
										options={options} // or components={{Field: ButtonGroup}} or components={{input: ButtonGroup}}
										required
										type='buttons'
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid container item justify='center' xs={12}>
							<Button disabled={(isDirty && !isValid) || isSubmitting} label='Submit' processing={isSubmitting} size='small' type='submit' variant='contained'/>
						</Grid>
					</Grid>
				</form>
				<IsolateReRender control={control}/>
				<Grid container item justify='center' xs={12}>
					Errors:
					{' '}
					{JSON.stringify(eee(errors))}
				</Grid>
			</Grid>
		</MuiPickersUtilsProvider>
	);
}

DemoForm.propTypes = {
	onSubmit: PropTypes.func,
};

export default DemoForm;
