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

const top100Films = [
	{label: 'The Shawshank Redemption', value: 1994},
	{label: 'The Godfather', value: 1972},
	{label: 'The Godfather: Part II', value: 1974},
	{label: 'The Dark Knight', value: 2008},
	{label: '12 Angry Men', value: 1957},
	{label: "Schindler's List", value: 1993},
	{label: 'Pulp Fiction', value: 1994},
	{label: 'The Lord of the Rings: The Return of the King', value: 2003},
	{label: 'The Good, the Bad and the Ugly', value: 1966},
	{label: 'Fight Club', value: 1999},
	{label: 'The Lord of the Rings: The Fellowship of the Ring', value: 2001},
	{label: 'Star Wars: Episode V - The Empire Strikes Back', value: 1980},
	{label: 'Forrest Gump', value: 1994},
	{label: 'Inception', value: 2010},
	{label: 'The Lord of the Rings: The Two Towers', value: 2002},
	{label: "One Flew Over the Cuckoo's Nest", value: 1975},
	{label: 'Goodfellas', value: 1990},
	{label: 'The Matrix', value: 1999},
	{label: 'Seven Samurai', value: 1954},
	{label: 'Star Wars: Episode IV - A New Hope', value: 1977},
	{label: 'City of God', value: 2002},
	{label: 'Se7en', value: 1995},
	{label: 'The Silence of the Lambs', value: 1991},
	{label: "It's a Wonderful Life", value: 1946},
	{label: 'Life Is Beautiful', value: 1997},
	{label: 'The Usual Suspects', value: 1995},
	{label: 'Léon: The Professional', value: 1994},
	{label: 'Spirited Away', value: 2001},
	{label: 'Saving Private Ryan', value: 1998},
	{label: 'Once Upon a Time in the West', value: 1968},
	{label: 'American History X', value: 1998},
	{label: 'Interstellar', value: 2014},
	{label: 'Casablanca', value: 1942},
	{label: 'City Lights', value: 1931},
	{label: 'Psycho', value: 1960},
	{label: 'The Green Mile', value: 1999},
	{label: 'The Intouchables', value: 2011},
	{label: 'Modern Times', value: 1936},
	{label: 'Raiders of the Lost Ark', value: 1981},
	{label: 'Rear Window', value: 1954},
	{label: 'The Pianist', value: 2002},
	{label: 'The Departed', value: 2006},
	{label: 'Terminator 2: Judgment Day', value: 1991},
	{label: 'Back to the Future', value: 1985},
	{label: 'Whiplash', value: 2014},
	{label: 'Gladiator', value: 2000},
	{label: 'Memento', value: 2000},
	{label: 'The Prestige', value: 2006},
	{label: 'The Lion King', value: 1994},
	{label: 'Apocalypse Now', value: 1979},
	{label: 'Alien', value: 1979},
	{label: 'Sunset Boulevard', value: 1950},
	{
		label:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
		value: 1964,
	},
	{label: 'The Great Dictator', value: 1940},
	{label: 'Cinema Paradiso', value: 1988},
	{label: 'The Lives of Others', value: 2006},
	{label: 'Grave of the Fireflies', value: 1988},
	{label: 'Paths of Glory', value: 1957},
	{label: 'Django Unchained', value: 2012},
	{label: 'The Shining', value: 1980},
	{label: 'WALL·E', value: 2008},
	{label: 'American Beauty', value: 1999},
	{label: 'The Dark Knight Rises', value: 2012},
	{label: 'Princess Mononoke', value: 1997},
	{label: 'Aliens', value: 1986},
	{label: 'Oldboy', value: 2003},
	{label: 'Once Upon a Time in America', value: 1984},
	{label: 'Witness for the Prosecution', value: 1957},
	{label: 'Das Boot', value: 1981},
	{label: 'Citizen Kane', value: 1941},
	{label: 'North by Northwest', value: 1959},
	{label: 'Vertigo', value: 1958},
	{label: 'Star Wars: Episode VI - Return of the Jedi', value: 1983},
	{label: 'Reservoir Dogs', value: 1992},
	{label: 'Braveheart', value: 1995},
	{label: 'M', value: 1931},
	{label: 'Requiem for a Dream', value: 2000},
	{label: 'Amélie', value: 2001},
	{label: 'A Clockwork Orange', value: 1971},
	{label: 'Like Stars on Earth', value: 2007},
	{label: 'Taxi Driver', value: 1976},
	{label: 'Lawrence of Arabia', value: 1962},
	{label: 'Double Indemnity', value: 1944},
	{label: 'Eternal Sunshine of the Spotless Mind', value: 2004},
	{label: 'Amadeus', value: 1984},
	{label: 'To Kill a Mockingbird', value: 1962},
	{label: 'Toy Story 3', value: 2010},
	{label: 'Logan', value: 2017},
	{label: 'Full Metal Jacket', value: 1987},
	{label: 'Dangal', value: 2016},
	{label: 'The Sting', value: 1973},
	{label: '2001: A Space Odyssey', value: 1968},
	{label: "Singin' in the Rain", value: 1952},
	{label: 'Toy Story', value: 1995},
	{label: 'Bicycle Thieves', value: 1948},
	{label: 'The Kid', value: 1921},
	{label: 'Inglourious Basterds', value: 2009},
	{label: 'Snatch', value: 2000},
	{label: '3 Idiots', value: 2009},
	{label: 'Monty Python and the Holy Grail', value: 1975},
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
							<Input
								container={{xs: 12}}
								control={control}
								getOptionLabel={(option) => (typeof option === 'string' ? option : option.label)}
								label='Autocomplete'
								name='auto'
								optionsAsync={(inputValue, setOptions) => setOptions(top100Films.filter(o => o.label.includes(inputValue)))}
								type='autocomplete'
							/>
							<Input
								base
								components={{input: Dropzone}}
								container={{xs: 12}}
								control={control}
								filesLimit={10}
								formik={false}
								handleDelete={(file, cb) => setTimeout(cb, 1000)}
								handleUpload={(file, cb) => setTimeout(cb, 1000)}
								label='File Drop'
								name='files'
							/>
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
