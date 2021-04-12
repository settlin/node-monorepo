import React from 'react';
import FButton from '../../src/forms/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '../../src/Input';
import Clear from '@material-ui/icons/Clear';
import TextField from '../../src/formik/TextField';
import Select from './FilterField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import green from '@material-ui/core/colors/green';
import DoneAll from '@material-ui/icons/DoneAll';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = () => ({
	doneAll: {
		color: green[500],
	},
});

class ResendButton extends React.PureComponent {
	state = {remainingSecs: 30}
	tick() {
		let {remainingSecs} = this.state;
		if (remainingSecs === 1) clearInterval(this.timer);
		this.setState({remainingSecs: remainingSecs - 1});
	}
	checkTick() {
		const {tick} = this.props;
		if (tick === 'start') {
			this.setState({remainingSecs: 30});
			this.timer = setInterval(this.tick, 1000);
		}
		if (tick === 'clear') {
			this.setState({remainingSecs: 0});
			clearInterval(this.timer);
		}
	}
	componentDidMount() {
		this.checkTick();
	}
	componentDidUpdate(pp) {
		if (pp.tick !== this.props.tick) this.checkTick();
	}
	render() {
		const {onClick, processing, startCounterAgain} = this.props;
		const {remainingSecs} = this.state;
		remainingSecs === 0 && startCounterAgain();
		return <FButton size='small' variant='text' disabled={Boolean(remainingSecs)} onClick={onClick} processing={processing}>
			Resend {remainingSecs > 0 ? `in ${remainingSecs}s` : ''}
		</FButton>;
	}
}

class UserPhoneOtp extends React.PureComponent {
	state = {otp: ''}
	constructor(props) {
		super(props);
		this.hSend = this.hSend.bind(this);
		this.hVerify = this.hVerify.bind(this);
		this.hSetOtp = this.hSetOtp.bind(this);
		this.hCancelOtp = this.hCancelOtp.bind(this);
		this.hEnterOnMobile = this.hEnterOnMobile.bind(this);
		this.hEnterOnOtp = this.hEnterOnOtp.bind(this);
	}
	hSend({resend} = {}) {
		let {otpPurpose = 'verification', onOtpSend, field: {name, value} = {}, form: {errors = {}, setFieldError} = {}} = this.props;
		if (!value || errors[name]) return;

		const mobile = value.toString();
		this.setState({isSending: true});
		Meteor.call('otp.create', {phone: mobile, purpose: otpPurpose, resend}, (err)=> {
			if (onOtpSend) onOtpSend({error: err, mobile});
			if (err) {
				if (setFieldError) setFieldError(name, err.reason);
				this.setState({isSending: false});
				return;
			}
			this.setState({sent: true, tick: 'start', isSending: false});
		});
	}
	hVerify() {
		const {otpPurpose = 'verification', onOtpSubmitCallback, user, expectedUserId, field: {value} = {}, form} = this.props;
		const {otp} = this.state;
		const mobile = value.toString();

		const otpError = this.otpError(otp);
		if (otpError) {
			this.setState({otpError});
			return;
		}
		this.setState({isVerifying: true});
		let cb = (obj) => {
			if (obj.verified && form) form.setFieldValue('userId', Meteor.userId());
			this.setState({isVerifying: false, ...obj});
			form.setFieldError('otp', obj.otpError);
		};
		if ((user || {})._id) {
			Meteor.call('user.verify', {expectedUserId, phone: mobile, otp, purpose: otpPurpose !== 'login' ? otpPurpose : ''}, (err) => {
				if (err) {
					switch (err.error) {
						case 'phone-already-associated':
							cb({phoneAssociatedData: err.details, tick: 'clear'});
							break;
						case 'incorrect-otp':
							cb({otp: '', otpError: err.reason});
							break;
						default:
							Log.fatal(err.reason, err, {expectedUserId, phone: mobile, otp, purpose: otpPurpose !== 'login' ? otpPurpose : ''});
							cb({otpError: err.reason, tick: 'clear'});
							break;
					}
					return;
				}
				if (onOtpSubmitCallback) onOtpSubmitCallback({cb: cb({verified: true, tick: 'clear'})});
				else cb({verified: true, tick: 'clear'});
			});
		}
		else {
			let options = {phone: mobile, otp, purpose: otpPurpose !== 'login' ? otpPurpose : '', expectedUserId};
			Meteor.loginWithPhone(options, (err) => {
				if (err) {
					switch (err.error) {
						case 'incorrect-otp':
							cb({otp: '', otpError: err.reason});
							break;
						case 'unexpected-user':
							cb({phoneAssociatedData: err.details, tick: 'clear'});
							return;
						default:
							Log.fatal('loginWithPhone 1: ' + err.reason, err, options);
							cb({otpError: err.reason, tick: 'clear'});
							break;
					}
				}
				else {
					Meteor.call('logs.addLogin');
					if (onOtpSubmitCallback) onOtpSubmitCallback({cb: cb({verified: true, tick: 'clear'})});
					else cb({verified: true, tick: 'clear'});
				}
			});
		}
	}
	hCancelOtp() {
		this.setState({tick: 'clear', otp: '', otpError: false, sent: false});
		if (this.props.onOtpCancel) this.props.onOtpCancel();
	}
	otpError(otp) {
		return !/^\d{5}$/.test(otp) && '5 digits';
	}
	hSetOtp(e) {
		const otp = e.currentTarget.value;
		this.setState({otpError: this.otpError(otp), otp});
	}
	hEnterOnOtp(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			this.hVerify();
		}
	}
	hEnterOnMobile(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			this.hSend();
		}
	}
	phones({verified = false} = {}) {
		const {user} = this.props;
		if (!((user || {}).phones || []).length) return [];
		return user.phones.filter(p => (p.number || '').startsWith('+91') && (verified ? p.verified : true)).map(p => ({value: p.number.substr(3), label: p.number}));
	}
	checkVerified(phoneNumber) {
		const {user} = this.props;
		!user && this.setState({verified: false});
		const parent = this;
		const phones = user && user.phones;
		phoneNumber && phones && phones.map(e=>{
			e.number && e.number.replace(e.code || '+91', '') === (phoneNumber && phoneNumber.toString().replace('+91', '')) && e.verified && e.verified === true && parent.setState({verified: true});
		});
	}
	render() {
		let {onOtpSubmitCallback, user, dispatch, classes, ...props} = this.props;  // eslint-disable-line no-unused-vars
		const {sent, otp, otpError, isSending, isVerifying, verified, tick} = this.state;
		const {hSend, hVerify, hSetOtp, hEnterOnMobile, hEnterOnOtp, hCancelOtp} = this;
		const phones = this.phones();
		// const verifiedPhones = this.phones({verified: true});

		const {field, form, ...pureProps} = props; // eslint-disable-line no-unused-vars
		const value = props.value || (props.field || {}).value;
		// this.checkVerified(value);
		const mobile = (value || '').toString();
		return (
			<Grid container justify='center'>
				{/* {phoneAssociatedData && <Dialog {...other}>
				  <DialogTitle>Phone number already associated with another user.</DialogTitle>
					<EmailOrPhoneAssociatedModal data={phoneAssociatedData} resetData={() => this.setState({phoneAssociatedData: null})} onOtpSubmitCallback={onOtpSubmitCallback}/>
				</Dialog>} */}
				<Grid item xs={12}>
					{verified
						? (
							<React.Fragment>
								<TextField {...props} type='number' inputProps={{readOnly: true}} InputProps={{
									endAdornment: <InputAdornment><Icon classes={{root: classes.doneAll}} aria-label='Verified'><DoneAll/></Icon></InputAdornment>,
								}}/>
								{(user || {})._id && <Input value={user._id} name='userId' label='' type='hidden'/>}
							</React.Fragment>
						)
						: sent
							? (
								<TextField name='otp' label='OTP' type='number' value={otp} error={Boolean(otpError)} helperText={otpError} onChange={hSetOtp} onKeyDown={hEnterOnOtp} InputProps={{
									endAdornment: <InputAdornment><IconButton aria-label='Cancel Otp' onClick={hCancelOtp}><Clear/></IconButton></InputAdornment>,
								}}/>
							)
							: phones.length
								? <Select {...props} defaultValue={phones[0].value} options={phones}/>
								: <TextField {...props} type='number' onKeyDown={hEnterOnMobile}/>
					}
				</Grid>
				{!verified && <Grid container item xs={12} justify={sent ? 'space-between' : 'flex-end'}>
					{sent
						? (
							<React.Fragment>
								<ResendButton tick={tick} onClick={() => hSend({resend: true})} startCounterAgain={()=>this.setState({tick: 'end'})} processing={isSending}/>
								<FButton size='small' variant='outlined' color='primary' onClick={hVerify} processing={isVerifying}>Verify {mobile}</FButton>
							</React.Fragment>
						)
						: <FButton size='small' variant='outlined' color='primary' onClick={hSend} processing={isSending} success={sent}>Send OTP</FButton>
					}
				</Grid>}
			</Grid>
		);
	}
}

export default withStyles(styles)(UserPhoneOtp);
