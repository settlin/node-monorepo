import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import {Formik, Form, setIn} from 'formik';
import {Input, currencify, Button} from '../../src';
import DayJSUtils from '@date-io/dayjs';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import FilterField from '../components/FilterField';
import {makeStyles} from '@material-ui/core';

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

const options = [{'value': 'aavalahalli', 'label': 'Aavalahalli'}, {'value': 'adugodi', 'label': 'Adugodi'}, {'value': 'akshayanagar', 'label': 'Akshayanagar'}, {'value': 'ambalipura', 'label': 'Ambalipura'}, {'value': 'anajanapura', 'label': 'Anajanapura'}, {'value': 'arekere', 'label': 'Arekere'}, {'value': 'banashankari', 'label': 'Banashankari'}, {'value': 'banaswadi', 'label': 'Banaswadi'}, {'value': 'bangaloreCityMunicipalCorporationLayout', 'label': 'Bangalore City Municipal Corporation Layout'}, {'value': 'bannerghatta', 'label': 'Bannerghatta'}, {'value': 'basapura', 'label': 'Basapura'}, {'value': 'basavanagudi', 'label': 'Basavanagudi'}, {'value': 'battarahalli', 'label': 'Battarahalli'}, {'value': 'begur', 'label': 'Begur'}, {'value': 'bellahalli', 'label': 'Bellahalli'}, {'value': 'bellandur', 'label': 'Bellandur'}, {'value': 'bendreNagar', 'label': 'Bendre Nagar'}, {'value': 'benniganaHalli', 'label': 'Bennigana Halli'}, {'value': 'bidareAgraha', 'label': 'Bidare Agraha'}, {'value': 'bikasipura', 'label': 'Bikasipura'}, {'value': 'bilekahalli', 'label': 'Bilekahalli'}, {'value': 'boganhalli', 'label': 'Boganhalli'}, {'value': 'bommanahalli', 'label': 'Bommanahalli'}, {'value': 'bommasandra', 'label': 'Bommasandra'}, {'value': 'brookefield', 'label': 'Brookefield'}, {'value': 'bTMLayout', 'label': 'Btm Layout'}, {'value': 'budigere', 'label': 'Budigere'}, {'value': 'carmelaram', 'label': 'Carmelaram'}, {'value': 'challaghatta', 'label': 'Challaghatta'}, {'value': 'channasandra', 'label': 'Channasandra'}, {'value': 'chikkabanaHalli', 'label': 'Chikkabana Halli'}, {'value': 'chikkabellandur', 'label': 'Chikkabellandur'}, {'value': 'chikkakannalli', 'label': 'Chikkakannalli'}, {'value': 'chikkanagamangala', 'label': 'Chikkanagamangala'}, {'value': 'chokkasandra', 'label': 'Chokkasandra'}, {'value': 'choodasandra', 'label': 'Choodasandra'}, {'value': 'cVRamanNagar', 'label': 'Cv Raman Nagar'}, {'value': 'devarachikkanaHalli', 'label': 'Devarachikkanahalli'}, {'value': 'doddakannelli', 'label': 'Doddakannelli'}, {'value': 'doddanekkundi', 'label': 'Doddanekkundi'}, {'value': 'domlur', 'label': 'Domlur'}, {'value': 'dommasandra', 'label': 'Dommasandra'}, {'value': 'dooravaniNagar', 'label': 'Dooravani Nagar'}, {'value': 'ejipura', 'label': 'Ejipura'}, {'value': 'electronicsCity', 'label': 'Electronics City'}, {'value': 'gBPalya', 'label': 'Garebhavipalya'}, {'value': 'gattahalli', 'label': 'Gattahalli'}, {'value': 'gottigere', 'label': 'Gottigere'}, {'value': 'gunjur', 'label': 'Gunjur'}, {'value': 'halanayakanahalli', 'label': 'Halanayakanahalli'}, {'value': 'hallehalli', 'label': 'Hallehalli'}, {'value': 'harlur', 'label': 'Harlur'}, {'value': 'hBRLayout', 'label': 'Hbr Layout'}, {'value': 'hebbal', 'label': 'Hebbal'}, {'value': 'hennur', 'label': 'Hennur'}, {'value': 'hongasandra', 'label': 'Hongasandra'}, {'value': 'hoodi', 'label': 'Hoodi'}, {'value': 'horamavu', 'label': 'Horamavu'}, {'value': 'hsrLayout', 'label': 'Hsr Layout'}, {'value': 'hulimavu', 'label': 'Hulimavu'}, {'value': 'indiraNagar', 'label': 'Indira Nagar'}, {'value': 'jayanagar', 'label': 'Jayanagar'}, {'value': 'jeevanBimaNagar', 'label': 'Jeevan Bima Nagar'}, {'value': 'jPNagar', 'label': 'Jp Nagar'}, {'value': 'junnasandra', 'label': 'Junnasandra'}, {'value': 'jyothiNagar', 'label': 'Jyothinagar'}, {'value': 'kRPuram', 'label': 'K R Puram'}, {'value': 'kacharakanahalli', 'label': 'Kacharakanahalli'}, {'value': 'kadubeesanahalli', 'label': 'Kadubeesanahalli'}, {'value': 'kadugodi', 'label': 'Kadugodi'}, {'value': 'kadugondanahalli', 'label': 'Kadugondanahalli'}, {'value': 'kaggadasapura', 'label': 'Kaggadasapura'}, {'value': 'kaikondrahalli', 'label': 'Kaikondrahalli'}, {'value': 'kalenaAgrahara', 'label': 'Kalena Agrahara'}, {'value': 'kalkere', 'label': 'Kalkere'}, {'value': 'kalyanNagar', 'label': 'Kalyan Nagar'}, {'value': 'kammanahalli', 'label': 'Kammanahalli'}, {'value': 'kannamangala', 'label': 'Kannamangala'}, {'value': 'karthikNagar', 'label': 'Karthik Nagar'}, {'value': 'kasavanahalli', 'label': 'Kasavanahalli'}, {'value': 'kasturiNagar', 'label': 'Kasturi Nagar'}, {'value': 'kattamanallur', 'label': 'Kattamanallur'}, {'value': 'kodathi', 'label': 'Kodathi'}, {'value': 'kodihalli', 'label': 'Kodihalli'}, {'value': 'kommasandra', 'label': 'Kommasandra'}, {'value': 'konanakunte', 'label': 'Konanakunte'}, {'value': 'koramangala', 'label': 'Koramangala'}, {'value': 'kudlu', 'label': 'Kudlu'}, {'value': 'kumaraswamyLayout', 'label': 'Kumaraswamy Layout'}, {'value': 'lingarajapuram', 'label': 'Lingarajapuram'}, {'value': 'mahadevpura', 'label': 'Mahadevpura'}, {'value': 'mangammanapalya', 'label': 'Mangammanapalya'}, {'value': 'marathahalli', 'label': 'Marathahalli'}, {'value': 'maruthiSevanagar', 'label': 'Maruthi Sevanagar'}, {'value': 'medahalli', 'label': 'Medahalli'}, {'value': 'mullur', 'label': 'Mullur'}, {'value': 'munnekollal', 'label': 'Munnekollal'}, {'value': 'murgeshpalya', 'label': 'Murgesh Palya'}, {'value': 'nagondanhalli', 'label': 'Nagondanhalli'}, {'value': 'newThippasandra', 'label': 'New Thippasandra'}, {'value': 'nRILayout', 'label': 'Nri Layout'}, {'value': 'padmanabhanagar', 'label': 'Padmanabhanagar'}, {'value': 'panathur', 'label': 'Panathur'}, {'value': 'parappanaAgrahara', 'label': 'Parappana Agrahara'}, {'value': 'ramamurthyNagar', 'label': 'Ramamurthy Nagar'}, {'value': 'rayasandra', 'label': 'Rayasandra'}, {'value': 'rustamBaghlayout', 'label': 'Rustam Bagh layout'}, {'value': 'sarjapur', 'label': 'Sarjapur'}, {'value': 'seegehalli', 'label': 'Seegehalli'}, {'value': 'singasandra', 'label': 'Singasandra'}, {'value': 'somasundarapalya', 'label': 'Somasundarapalya'}, {'value': 'subashNagar', 'label': 'Subash Nagar'}, {'value': 'subramanyapura', 'label': 'Subramanyapura'}, {'value': 'suddaguntePalya', 'label': 'Suddagunte Palya'}, {'value': 'tejaswiniNagar', 'label': 'Tejaswini Nagar'}, {'value': 'unknownDealing', 'label': 'Unknown - Dealing'}, {'value': 'unknownNotDealing', 'label': 'Unknown - Not Dealing'}, {'value': 'varanasi', 'label': 'Varanasi'}, {'value': 'varthur', 'label': 'Varthur'}, {'value': 'vibhutipura', 'label': 'Vibhutipura'}, {'value': 'vimanapura', 'label': 'Vimanapura'}, {'value': 'vivekNagar', 'label': 'Vivek Nagar'}, {'value': 'whitefield', 'label': 'Whitefield'}, {'value': 'wilsonGarden', 'label': 'Wilson Garden'}];

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

		return <MuiPickersUtilsProvider utils={DayJSUtils}>
			<Grid container item spacing={1} style={{padding: '2rem'}}>
				<Formik initialValues={initialValues} enableReinitialize={true} isInitialValid={false} onSubmit={this.hSubmit} validate={this.validate}>
					{({isSubmitting, values, errors, isValid}) => <Form  autoComplete='off' style={{width: '100%'}}>
						<Grid container item spacing={1} xs={12}>
							<Input name='choice' base
								components={{input: FilterField}}
								menuIsOpen={true}
								options={options}
								type='select'
								label='Select Locations'
								container={{xs: 12}}
								selectStyles={{menuList: base => ({
									...base,
									display: 'grid',
									gridTemplateColumns: '150px 150px 150px 150px 150px 150px 150px 150px 150px 150px',
									gridGap: 4,
									justifyContent: 'center',
								})}}
								selectComponents={{Menu, Option}}
								multiple
								hideSelectedOptions={false}
							/>
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
					</Form>}
				</Formik>
			</Grid>
		</MuiPickersUtilsProvider>;
	}
}

export default DemoForm;
