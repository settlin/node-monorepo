import React from 'react';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

const styles = () => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		marginTop: '8px',
	},
	wrapper: {
		margin: 'auto',
		position: 'relative',
	},
	wrapperFullWidth: {
		margin: 'auto',
		position: 'relative',
		width: '100%',
	},
	buttonSuccess: {
		backgroundColor: green[500],
		'&:hover': {
			backgroundColor: green[700],
		},
		backgroundImage: 'url(https://static.financebuddha.com/assets/images/gradient-bg.png)',
		backgroundSize: 'contain',
	},
	fabProgress: {
		color: green[500],
		position: 'absolute',
		top: -6,
		left: -6,
		zIndex: 1,
	},
	buttonProgress: {
		color: green[500],
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
});

class CircularIntegration extends React.Component {
	render() {
  	const {classes, fab, processing, success, color = 'primary', variant = 'contained', children = 'Submit', fullWidth, ...rest} = this.props;
  	const buttonClassname = classNames({
  		[classes.buttonSuccess]: success,
  	});

  	return (
			<div className={classes.root} style={{width: fullWidth ? '100%' : 'auto'}}>
  			{fab
  				? (
  					<div className={classes.wrapper}>
  						<Fab color={color} className={buttonClassname} {...rest}>
  							{success ? <CheckIcon/> : <SaveIcon/>}
  						</Fab>
  						{processing && <CircularProgress size={68} className={classes.fabProgress}/>}
  					</div>
  				)
  				: (
  					<div className={fullWidth ? classes.wrapperFullWidth : classes.wrapper}>
  						<Button fullWidth={fullWidth} variant={variant} color={color} className={buttonClassname} disabled={processing} {...rest}>
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
CircularIntegration.displayName = 'FButton';

export default withStyles(styles)(CircularIntegration);
