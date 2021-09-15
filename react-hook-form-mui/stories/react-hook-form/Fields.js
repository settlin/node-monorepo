import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import {Formik, Form, setIn} from 'formik';
import {Input, Button, currencify} from '../../src';
import DayJSUtils from '@date-io/dayjs';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import Dropzone from '../components/Dropzone';
// import FilterField from '../components/FilterField';
// import DateTimePicker from '../components/DateTimePicker';
import {useWatch, useForm, FormProvider} from 'react-hook-form';
// import ButtonGroup from '../../src/forms/ButtonGroup';
import MultiButtonGroup from '../../src/react-hook-form/MultiButtonGroup';
// import CurrencyField from '../../src/react-hook-form/CurrencyField';
import {top100Films} from './top100Films';
import {propertyOptions as options} from './propertyOptions';
const eee = errors => Object.entries(errors).reduce((a, [k, {message, type}]) => ({...a, [k]: {message, type}}), {});

const arrayMeta = [
	{name: 'type', label: 'Type', required: true, type: 'select', container: {xs: 4}, options: [
		{value: 'p', label: 'Personal'},
		{value: 'w', label: 'Work'},
	]},
	{name: 'mobile', label: 'Mobile', required: true, type: 'mobile', container: {xs: 7}, validate: true},
];

const option = [
	{value: 'backYards',   label: 'Back Yard'},
	{value: 'balconies',  label: 'Balcony'},
	{value: 'bathrooms',  label: 'Bathroom'},
];


function IsolateReRender({control, name, children}) {
	const values = useWatch({
		control,
		name, // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
	});

	return (
		<div style={{marginTop: '7%'}}>
			{children(values)}
		</div>
	); // only re-render at the component level
}

IsolateReRender.propTypes = {
	children: PropTypes.func,
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

	const defaultValues = {text: 'name', auto: []};
	const form = useForm({
		defaultValues,
		mode: 'onChange',
	});
	const {handleSubmit, setValue, formState: {errors, isSubmitting, isDirty, isValid}, control} = form;
	// console.log(watch('textArea')); // watch input value by passing the name of it

	// const hChange = (e, newValue) => {
	// 	setValue('slider', newValue);
	// };

	return (
		<MuiPickersUtilsProvider utils={DayJSUtils}>
			<Grid container item spacing={1} style={{padding: '2rem'}}>
				<FormProvider {...form}>
					<form onSubmit={handleSubmit(hSubmit)} style={{width: '100%'}}>
						<Grid container item spacing={1} xs={12}>
							<Grid item xs={6}>
								<Input
									color='secondary'
									displayValue
									label='Slider'
									maxValue={100}
									minValue={0}
									name='slider'
									range
									style={{width: '20rem'}}
									// step={10}
									type='slider'
								/>
								{/* <Typography>
									Phones (Array of Inputs)
								</Typography>
								<Input container={{xs: 12}} label='Phones' metaList={arrayMeta} name='phones' type='array'/> */}
								{/* <Input
									container={{xs: 12}}
									// getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
									label='Autocomplete'
									name='auto'
									optionsAsync={(inputValue, setOptions) =>setOptions(top100Films.filter(o => o.label.includes(inputValue)))}
									type='autocomplete'
								// renderInput={p => <Input rhf={false} {...p}/>}
								/> */}
								{/* <Input formik={false} base name='files' label='File Drop' container={{xs: 12}} filesLimit={10}
									handleUpload={(file, cb) => setTimeout(cb, 1000)}
									handleDelete={(file, cb) => setTimeout(cb, 1000)}
									components={{PreviewsChildren: this.PreviewsChildren, input: Dropzone}}
								/> */}
								{/* <Input
									PreviewsChildren={({name, index, ...p}) => <Input control={control} multiple name={`${name}.${index}.tags`} options={option} placeholder='Tags' type='select'/>}
									base
									components={{input: Dropzone}}
									container={{xs: 12}}
									defaultValue={[]}
									filesLimit={10}
									// handleUpload={(file, cb) => setTimeout(cb, 1000)}
									// handleDelete={(file, cb) => setTimeout(cb, 1000)}
									label='File Drop'
									name='files'
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
										<Input compact container={{xs: 6}} label='Text' name='text' type='text'/>
										<Input container={{xs: 6}} label='Text Area' multiline name='textArea' required type='textarea'/>
										{/* <Input components={{input: CurrencyField}} name='currency' type='inr'/> */}
									</Grid>
									<Grid container item spacing={1} style={{marginTop: '16px'}} xs={12}>
										<Input
											components={{input: MultiButtonGroup}}
											container={{xs: 6}}
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
				</FormProvider>
				<IsolateReRender control={control}>
					{JSON.stringify}
				</IsolateReRender>
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
