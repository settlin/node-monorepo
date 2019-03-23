import React from 'react';
import clsx from 'clsx';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import teal from '@material-ui/core/colors/teal';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const styles = (theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		marginTop: '8px',
	},
	wrapper: {
		margin: 'auto',
		position: 'relative',
	},
	marginRight: {
		marginRight: theme.spacing,
	},
	wrapperFullWidth: {
		margin: 'auto',
		position: 'relative',
		width: '100%',
	},
	buttonSuccess: {
		backgroundColor: teal[500],
		'&:hover': {
			backgroundColor: teal[700],
		},
		backgroundImage: 'url(https://static.financebuddha.com/assets/images/gradient-bg.png)',
		backgroundSize: 'contain',
	},
	fabProgress: {
		color: teal[500],
		position: 'absolute',
		top: -6,
		left: -6,
		zIndex: 1,
	},
	buttonProgress: {
		color: teal[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
});

class CircularIntegration extends React.Component {
	render() {
  	const {classes, cs = {}, fab, processing, success, label = '', color = 'primary', variant = 'contained', children = 'Submit', Icon, fullWidth, ...rest} = this.props;
  	const buttonClassname = clsx({
  		[classes.buttonSuccess]: success,
		});

		const IconComp = success ? CheckIcon : Icon;

  	return (
			<div className={classes.root} style={{width: fullWidth ? '100%' : 'auto'}}>
  			{fab
  				? (
  					<div className={classes.wrapper}>
  						<Fab color={color} classes={{root: clsx(buttonClassname, cs.button)}} {...rest}>
  							{success ? <CheckIcon/> : <CloudUploadIcon/>}
  						</Fab>
  						{processing && <CircularProgress size={68} className={classes.fabProgress}/>}
  					</div>
  				)
  				: (
  					<div className={fullWidth ? classes.wrapperFullWidth : classes.wrapper}>
  						<Button fullWidth={fullWidth} variant={variant} color={color} classes={{root: clsx(buttonClassname, cs.button)}} disabled={processing} {...rest}>
								{IconComp && <IconComp classes={{root: clsx(classes.marginRight, cs.icon)}}/>}
								{label}
								{children}
  						</Button>
  						{processing && <CircularProgress size={24} className={classes.buttonProgress}/>}
  					</div>
  				)
  			}
  		</div>
  	);
	}
}

const Button1 = withStyles(styles)(CircularIntegration);
const Button2 = ({classes, ...props}) => <Button1 cs={classes} {...props}/>;

Button2.displayName = 'FButton';

export default Button2;
