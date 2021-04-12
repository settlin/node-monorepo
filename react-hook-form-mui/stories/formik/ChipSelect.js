import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import {Formik, Form, setIn} from 'formik';
import {Input, currencify, Button} from '../../src';
import DayJSUtils from '@date-io/dayjs';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import FilterField from '../components/FilterField';
import {makeStyles} from '@material-ui/core/styles';
import {components} from 'react-select';
import CancelIcon from '@material-ui/icons/Cancel';
import classNames from 'clsx';

class MultiValue extends PureComponent {
	state = {}
	constructor(props) {
		super(props);
	}
	hDeleteOne(valueClicked) {
		let {selectProps: {value: [...value]}, setValue} = this.props;
		let newOptions = value.filter(i=> i.value !== valueClicked);
		setValue(newOptions);
	}
	hDeleteLast() {
		let {selectProps: {value: [...value]}, setValue} = this.props;
		value.splice(-1, 1);
		setValue(value);
	}
	render() {
		let {children, index, selectProps: {maxValuesToShow = 1, value, classes, maxCharacters = children?.length}, isFocused, removeProps} = this.props;
		const {showFull} = this.state;

		if (index < value.length - maxValuesToShow) return null;
		return (
			<React.Fragment>
				{!showFull
					? <React.Fragment>
						{maxValuesToShow !== 1 && index === value.length - maxValuesToShow && value.length > maxValuesToShow && <Chip
							label={(value.length - maxValuesToShow) + ' more'}
							className={classNames(classes.chip, {
								[classes.chipFocused]: isFocused,
							})}
							// ,  background: '#fcfcfc87', color: '#890909'
							style={{borderRadius: '10px'}}
							onDelete={this.hDeleteLast.bind(this)}
							onClick={() => this.setState({showFull: true})}
							deleteIcon={<CancelIcon {...removeProps}/>}
						/>}
						<Chip
							label={`${maxValuesToShow === 1 && value.length > maxValuesToShow ? (value.length - maxValuesToShow) + '+ ' : ''}${maxCharacters < children?.length ? children.substr(0, maxCharacters - 3) + '...' : children}`}
							className={classNames(classes.chip, {
								[classes.chipFocused]: isFocused,
							})}
							// ,  background: '#fcfcfc87', color: '#890909'
							style={{borderRadius: '10px'}}
							onDelete={this.hDeleteLast.bind(this)}
							onClick={() => this.setState({showFull: true})}
							deleteIcon={<CancelIcon {...removeProps}/>}
						/>
					</React.Fragment>
					:
					<div style={{position: 'absolute', zIndex: '100000', top: '0', background: '#f1f1f1', left: 0, boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 3px 1px -2px rgba(0,0,0,.2)', right: 0}}>
						<CancelIcon onClick={()=> this.setState({showFull: false})} style={{float: 'right', cursor: 'pointer'}} color='action'/>
						{value.map((i, ind)=>
							<Chip
								key={ind}
								label={i.label}
								className={classNames(classes.chip, {
									[classes.chipFocused]: isFocused,
								})}
								onDelete={this.hDeleteOne.bind(this, i.value)}
								deleteIcon={<CancelIcon {...removeProps}/>}
							/>
						)}
					</div>
				}
			</React.Fragment>
		);
	}
}


const useStyles = makeStyles({
	chip: {
		fontWeight: props => props.isSelected ? 500 : 400,
		zIndex: 2,
		justifyContent: 'left',
		textOverflow: 'ellipsis',
		width: 'max(150px)',
	},
	group: {
		display: 'grid',
		gridTemplateColumns: '80px auto',
		gridGap: 4,
	},
	groupOptions: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, 150px);',
		gridGap: 4,
		justifyContent: 'center',
	},
	option: {
		backgroundColor: 'transparent !important',
		padding: '0 !important',
	},
});

// const options = [{'value': 'aavalahalli', 'label': 'Aavalahalli'}, {'value': 'adugodi', 'label': 'Adugodi'}, {'value': 'akshayanagar', 'label': 'Akshayanagar'}, {'value': 'ambalipura', 'label': 'Ambalipura'}, {'value': 'anajanapura', 'label': 'Anajanapura'}, {'value': 'arekere', 'label': 'Arekere'}, {'value': 'banashankari', 'label': 'Banashankari'}, {'value': 'banaswadi', 'label': 'Banaswadi'}, {'value': 'bangaloreCityMunicipalCorporationLayout', 'label': 'Bangalore City Municipal Corporation Layout'}, {'value': 'bannerghatta', 'label': 'Bannerghatta'}, {'value': 'basapura', 'label': 'Basapura'}, {'value': 'basavanagudi', 'label': 'Basavanagudi'}, {'value': 'battarahalli', 'label': 'Battarahalli'}, {'value': 'begur', 'label': 'Begur'}, {'value': 'bellahalli', 'label': 'Bellahalli'}, {'value': 'bellandur', 'label': 'Bellandur'}, {'value': 'bendreNagar', 'label': 'Bendre Nagar'}, {'value': 'benniganaHalli', 'label': 'Bennigana Halli'}, {'value': 'bidareAgraha', 'label': 'Bidare Agraha'}, {'value': 'bikasipura', 'label': 'Bikasipura'}, {'value': 'bilekahalli', 'label': 'Bilekahalli'}, {'value': 'boganhalli', 'label': 'Boganhalli'}, {'value': 'bommanahalli', 'label': 'Bommanahalli'}, {'value': 'bommasandra', 'label': 'Bommasandra'}, {'value': 'brookefield', 'label': 'Brookefield'}, {'value': 'bTMLayout', 'label': 'Btm Layout'}, {'value': 'budigere', 'label': 'Budigere'}, {'value': 'carmelaram', 'label': 'Carmelaram'}, {'value': 'challaghatta', 'label': 'Challaghatta'}, {'value': 'channasandra', 'label': 'Channasandra'}, {'value': 'chikkabanaHalli', 'label': 'Chikkabana Halli'}, {'value': 'chikkabellandur', 'label': 'Chikkabellandur'}, {'value': 'chikkakannalli', 'label': 'Chikkakannalli'}, {'value': 'chikkanagamangala', 'label': 'Chikkanagamangala'}, {'value': 'chokkasandra', 'label': 'Chokkasandra'}, {'value': 'choodasandra', 'label': 'Choodasandra'}, {'value': 'cVRamanNagar', 'label': 'Cv Raman Nagar'}, {'value': 'devarachikkanaHalli', 'label': 'Devarachikkanahalli'}, {'value': 'doddakannelli', 'label': 'Doddakannelli'}, {'value': 'doddanekkundi', 'label': 'Doddanekkundi'}, {'value': 'domlur', 'label': 'Domlur'}, {'value': 'dommasandra', 'label': 'Dommasandra'}, {'value': 'dooravaniNagar', 'label': 'Dooravani Nagar'}, {'value': 'ejipura', 'label': 'Ejipura'}, {'value': 'electronicsCity', 'label': 'Electronics City'}, {'value': 'gBPalya', 'label': 'Garebhavipalya'}, {'value': 'gattahalli', 'label': 'Gattahalli'}, {'value': 'gottigere', 'label': 'Gottigere'}, {'value': 'gunjur', 'label': 'Gunjur'}, {'value': 'halanayakanahalli', 'label': 'Halanayakanahalli'}, {'value': 'hallehalli', 'label': 'Hallehalli'}, {'value': 'harlur', 'label': 'Harlur'}, {'value': 'hBRLayout', 'label': 'Hbr Layout'}, {'value': 'hebbal', 'label': 'Hebbal'}, {'value': 'hennur', 'label': 'Hennur'}, {'value': 'hongasandra', 'label': 'Hongasandra'}, {'value': 'hoodi', 'label': 'Hoodi'}, {'value': 'horamavu', 'label': 'Horamavu'}, {'value': 'hsrLayout', 'label': 'Hsr Layout'}, {'value': 'hulimavu', 'label': 'Hulimavu'}, {'value': 'indiraNagar', 'label': 'Indira Nagar'}, {'value': 'jayanagar', 'label': 'Jayanagar'}, {'value': 'jeevanBimaNagar', 'label': 'Jeevan Bima Nagar'}, {'value': 'jPNagar', 'label': 'Jp Nagar'}, {'value': 'junnasandra', 'label': 'Junnasandra'}, {'value': 'jyothiNagar', 'label': 'Jyothinagar'}, {'value': 'kRPuram', 'label': 'K R Puram'}, {'value': 'kacharakanahalli', 'label': 'Kacharakanahalli'}, {'value': 'kadubeesanahalli', 'label': 'Kadubeesanahalli'}, {'value': 'kadugodi', 'label': 'Kadugodi'}, {'value': 'kadugondanahalli', 'label': 'Kadugondanahalli'}, {'value': 'kaggadasapura', 'label': 'Kaggadasapura'}, {'value': 'kaikondrahalli', 'label': 'Kaikondrahalli'}, {'value': 'kalenaAgrahara', 'label': 'Kalena Agrahara'}, {'value': 'kalkere', 'label': 'Kalkere'}, {'value': 'kalyanNagar', 'label': 'Kalyan Nagar'}, {'value': 'kammanahalli', 'label': 'Kammanahalli'}, {'value': 'kannamangala', 'label': 'Kannamangala'}, {'value': 'karthikNagar', 'label': 'Karthik Nagar'}, {'value': 'kasavanahalli', 'label': 'Kasavanahalli'}, {'value': 'kasturiNagar', 'label': 'Kasturi Nagar'}, {'value': 'kattamanallur', 'label': 'Kattamanallur'}, {'value': 'kodathi', 'label': 'Kodathi'}, {'value': 'kodihalli', 'label': 'Kodihalli'}, {'value': 'kommasandra', 'label': 'Kommasandra'}, {'value': 'konanakunte', 'label': 'Konanakunte'}, {'value': 'koramangala', 'label': 'Koramangala'}, {'value': 'kudlu', 'label': 'Kudlu'}, {'value': 'kumaraswamyLayout', 'label': 'Kumaraswamy Layout'}, {'value': 'lingarajapuram', 'label': 'Lingarajapuram'}, {'value': 'mahadevpura', 'label': 'Mahadevpura'}, {'value': 'mangammanapalya', 'label': 'Mangammanapalya'}, {'value': 'marathahalli', 'label': 'Marathahalli'}, {'value': 'maruthiSevanagar', 'label': 'Maruthi Sevanagar'}, {'value': 'medahalli', 'label': 'Medahalli'}, {'value': 'mullur', 'label': 'Mullur'}, {'value': 'munnekollal', 'label': 'Munnekollal'}, {'value': 'murgeshpalya', 'label': 'Murgesh Palya'}, {'value': 'nagondanhalli', 'label': 'Nagondanhalli'}, {'value': 'newThippasandra', 'label': 'New Thippasandra'}, {'value': 'nRILayout', 'label': 'Nri Layout'}, {'value': 'padmanabhanagar', 'label': 'Padmanabhanagar'}, {'value': 'panathur', 'label': 'Panathur'}, {'value': 'parappanaAgrahara', 'label': 'Parappana Agrahara'}, {'value': 'ramamurthyNagar', 'label': 'Ramamurthy Nagar'}, {'value': 'rayasandra', 'label': 'Rayasandra'}, {'value': 'rustamBaghlayout', 'label': 'Rustam Bagh layout'}, {'value': 'sarjapur', 'label': 'Sarjapur'}, {'value': 'seegehalli', 'label': 'Seegehalli'}, {'value': 'singasandra', 'label': 'Singasandra'}, {'value': 'somasundarapalya', 'label': 'Somasundarapalya'}, {'value': 'subashNagar', 'label': 'Subash Nagar'}, {'value': 'subramanyapura', 'label': 'Subramanyapura'}, {'value': 'suddaguntePalya', 'label': 'Suddagunte Palya'}, {'value': 'tejaswiniNagar', 'label': 'Tejaswini Nagar'}, {'value': 'unknownDealing', 'label': 'Unknown - Dealing'}, {'value': 'unknownNotDealing', 'label': 'Unknown - Not Dealing'}, {'value': 'varanasi', 'label': 'Varanasi'}, {'value': 'varthur', 'label': 'Varthur'}, {'value': 'vibhutipura', 'label': 'Vibhutipura'}, {'value': 'vimanapura', 'label': 'Vimanapura'}, {'value': 'vivekNagar', 'label': 'Vivek Nagar'}, {'value': 'whitefield', 'label': 'Whitefield'}, {'value': 'wilsonGarden', 'label': 'Wilson Garden'}];
const options = [{'_id': 'notDealingYet', 'options': [{'value': 'bellahalli', 'label': 'Bellahalli'}, {'value': 'unknownNotDealing', 'label': 'Unknown - Not Dealing'}, {'value': 'anajanapura', 'label': 'Anajanapura'}, {'value': 'subashNagar', 'label': 'Subash Nagar'}, {'value': 'devarachikkanaHalli', 'label': 'Devarachikkanahalli'}, {'value': 'nagondanhalli', 'label': 'Nagondanhalli'}, {'value': 'bangaloreCityMunicipalCorporationLayout', 'label': 'Bangalore City Municipal Corporation Layout'}, {'value': 'basapura', 'label': 'Basapura'}, {'value': 'konanakunte', 'label': 'Konanakunte'}, {'value': 'akshayanagar', 'label': 'Akshayanagar'}, {'value': 'nRILayout', 'label': 'Nri Layout'}, {'value': 'dommasandra', 'label': 'Dommasandra'}, {'value': 'jyothiNagar', 'label': 'Jyothinagar'}, {'value': 'junnasandra', 'label': 'Junnasandra'}, {'value': 'hebbal', 'label': 'Hebbal'}, {'value': 'kattamanallur', 'label': 'Kattamanallur'}, {'value': 'bannerghatta', 'label': 'Bannerghatta'}, {'value': 'subramanyapura', 'label': 'Subramanyapura'}, {'value': 'padmanabhanagar', 'label': 'Padmanabhanagar'}, {'value': 'bikasipura', 'label': 'Bikasipura'}, {'value': 'kommasandra', 'label': 'Kommasandra'}, {'value': 'chokkasandra', 'label': 'Chokkasandra'}, {'value': 'gattahalli', 'label': 'Gattahalli'}, {'value': 'kadugondanahalli', 'label': 'Kadugondanahalli'}, {'value': 'ramamurthyNagar', 'label': 'Ramamurthy Nagar'}], 'label': 'notDealingYet'}, {'_id': 'dealing', 'options': [{'value': 'vibhutipura', 'label': 'Vibhutipura'}, {'value': 'maruthiSevanagar', 'label': 'Maruthi Sevanagar'}, {'value': 'harlur', 'label': 'Harlur'}, {'value': 'channasandra', 'label': 'Channasandra'}, {'value': 'hongasandra', 'label': 'Hongasandra'}, {'value': 'mangammanapalya', 'label': 'Mangammanapalya'}, {'value': 'koramangala', 'label': 'Koramangala'}, {'value': 'halanayakanahalli', 'label': 'Halanayakanahalli'}, {'value': 'gBPalya', 'label': 'Garebhavipalya'}, {'value': 'parappanaAgrahara', 'label': 'Parappana Agrahara'}, {'value': 'domlur', 'label': 'Domlur'}, {'value': 'sarjapur', 'label': 'Sarjapur'}, {'value': 'horamavu', 'label': 'Horamavu'}, {'value': 'chikkabellandur', 'label': 'Chikkabellandur'}, {'value': 'mahadevpura', 'label': 'Mahadevpura'}, {'value': 'adugodi', 'label': 'Adugodi'}, {'value': 'kalenaAgrahara', 'label': 'Kalena Agrahara'}, {'value': 'bTMLayout', 'label': 'Btm Layout'}, {'value': 'somasundarapalya', 'label': 'Somasundarapalya'}, {'value': 'kammanahalli', 'label': 'Kammanahalli'}, {'value': 'arekere', 'label': 'Arekere'}, {'value': 'boganhalli', 'label': 'Boganhalli'}, {'value': 'carmelaram', 'label': 'Carmelaram'}, {'value': 'newThippasandra', 'label': 'New Thippasandra'}, {'value': 'hsrLayout', 'label': 'Hsr Layout'}, {'value': 'benniganaHalli', 'label': 'Bennigana Halli'}, {'value': 'bommanahalli', 'label': 'Bommanahalli'}, {'value': 'seegehalli', 'label': 'Seegehalli'}, {'value': 'aavalahalli', 'label': 'Aavalahalli'}, {'value': 'karthikNagar', 'label': 'Karthik Nagar'}, {'value': 'ambalipura', 'label': 'Ambalipura'}, {'value': 'whitefield', 'label': 'Whitefield'}, {'value': 'brookefield', 'label': 'Brookefield'}, {'value': 'bidareAgraha', 'label': 'Bidare Agraha'}, {'value': 'murgeshpalya', 'label': 'Murgesh Palya'}, {'value': 'bellandur', 'label': 'Bellandur'}, {'value': 'kaggadasapura', 'label': 'Kaggadasapura'}, {'value': 'mullur', 'label': 'Mullur'}, {'value': 'chikkabanaHalli', 'label': 'Chikkabana Halli'}, {'value': 'kodihalli', 'label': 'Kodihalli'}, {'value': 'jeevanBimaNagar', 'label': 'Jeevan Bima Nagar'}, {'value': 'begur', 'label': 'Begur'}, {'value': 'singasandra', 'label': 'Singasandra'}, {'value': 'munnekollal', 'label': 'Munnekollal'}, {'value': 'banaswadi', 'label': 'Banaswadi'}, {'value': 'kudlu', 'label': 'Kudlu'}, {'value': 'suddaguntePalya', 'label': 'Suddagunte Palya'}, {'value': 'rustamBaghlayout', 'label': 'Rustam Bagh layout'}, {'value': 'kadubeesanahalli', 'label': 'Kadubeesanahalli'}, {'value': 'kasturiNagar', 'label': 'Kasturi Nagar'}, {'value': 'kaikondrahalli', 'label': 'Kaikondrahalli'}, {'value': 'doddakannelli', 'label': 'Doddakannelli'}, {'value': 'jPNagar', 'label': 'Jp Nagar'}, {'value': 'doddanekkundi', 'label': 'Doddanekkundi'}, {'value': 'panathur', 'label': 'Panathur'}, {'value': 'kasavanahalli', 'label': 'Kasavanahalli'}, {'value': 'chikkakannalli', 'label': 'Chikkakannalli'}, {'value': 'ejipura', 'label': 'Ejipura'}, {'value': 'indiraNagar', 'label': 'Indira Nagar'}, {'value': 'vivekNagar', 'label': 'Vivek Nagar'}, {'value': 'wilsonGarden', 'label': 'Wilson Garden'}, {'value': 'kadugodi', 'label': 'Kadugodi'}, {'value': 'jayanagar', 'label': 'Jayanagar'}, {'value': 'hoodi', 'label': 'Hoodi'}, {'value': 'vimanapura', 'label': 'Vimanapura'}, {'value': 'cVRamanNagar', 'label': 'Cv Raman Nagar'}, {'value': 'hulimavu', 'label': 'Hulimavu'}, {'value': 'bilekahalli', 'label': 'Bilekahalli'}, {'value': 'varthur', 'label': 'Varthur'}, {'value': 'kRPuram', 'label': 'K R Puram'}, {'value': 'choodasandra', 'label': 'Choodasandra'}, {'value': 'kalyanNagar', 'label': 'Kalyan Nagar'}, {'value': 'marathahalli', 'label': 'Marathahalli'}, {'value': 'challaghatta', 'label': 'Challaghatta'}, {'value': 'medahalli', 'label': 'Medahalli'}, {'value': 'battarahalli', 'label': 'Battarahalli'}, {'value': 'dooravaniNagar', 'label': 'Dooravani Nagar'}], 'label': 'dealing'}, {'_id': 'partiallyDealing', 'options': [{'value': 'gottigere', 'label': 'Gottigere'}, {'value': 'tejaswiniNagar', 'label': 'Tejaswini Nagar'}, {'value': 'kodathi', 'label': 'Kodathi'}, {'value': 'kannamangala', 'label': 'Kannamangala'}, {'value': 'banashankari', 'label': 'Banashankari'}, {'value': 'hennur', 'label': 'Hennur'}, {'value': 'electronicsCity', 'label': 'Electronics City'}, {'value': 'lingarajapuram', 'label': 'Lingarajapuram'}, {'value': 'gunjur', 'label': 'Gunjur'}, {'value': 'kalkere', 'label': 'Kalkere'}, {'value': 'unknownDealing', 'label': 'Unknown - Dealing'}, {'value': 'varanasi', 'label': 'Varanasi'}, {'value': 'kacharakanahalli', 'label': 'Kacharakanahalli'}, {'value': 'hBRLayout', 'label': 'Hbr Layout'}, {'value': 'budigere', 'label': 'Budigere'}, {'value': 'bendreNagar', 'label': 'Bendre Nagar'}, {'value': 'kumaraswamyLayout', 'label': 'Kumaraswamy Layout'}, {'value': 'basavanagudi', 'label': 'Basavanagudi'}, {'value': 'chikkanagamangala', 'label': 'Chikkanagamangala'}, {'value': 'rayasandra', 'label': 'Rayasandra'}, {'value': 'bommasandra', 'label': 'Bommasandra'}, {'value': 'hallehalli', 'label': 'Hallehalli'}], 'label': 'partiallyDealing'}];

const MenuList = props => {
	const classes = useStyles({});
	const cls = props.options.find(o => o.options) ? '' : classes.groupOptions;

	return (
		<components.MenuList {...props} className={cls}>
			{props.children}
		</components.MenuList>
	);
};

const Group = ({children, ...props}) => {
	const classes = useStyles(props);

	return <components.Group {...props} className={classes.group}>
		<div className={classes.groupOptions}>{children}</div>
	</components.Group>;
};


const Option = ({children, ...props}) => {
	const classes = useStyles(props);

	return <components.Option {...props} className={classes.option}>
		<Chip
			buttonRef={props.innerRef}
			selected={props.isFocused}
			size='small'
			variant={props.isSelected ? 'default' : 'outlined'}
			avatar={<Avatar>{children[0].toUpperCase()}</Avatar>}
			className={classes.chip}
			{...props.innerProps}
			label={children}
			title={children}
		/>
	</components.Option>;
};

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
								selectComponents={{MenuList, MultiValue, Group, Option}}
								multiple
								hideSelectedOptions={false}
								maxValuesToShow={1}
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
