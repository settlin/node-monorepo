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
		marginRight: theme.spacing(1),
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
		backgroundSize: 'contain',
	},
	buttonProgress: {
		color: teal[500],
	},
});

class CircularIntegration extends React.Component {
	render() {
  	const {classes, cs = {}, fab, processing, success, color = 'primary', variant = 'contained', label = 'Submit', children = label, Icon = fab ? CloudUploadIcon : null, fullWidth, IconProps, CircularProgressProps, refButton: ref, ...rest} = this.props;
  	const buttonClassname = clsx({
  		[classes.buttonSuccess]: success,
		});

		const IconComp = success ? CheckIcon : Icon;
  	return (
			<div className={clsx(classes.root, cs.root)} style={{width: fullWidth ? '100%' : 'auto'}}>
  			{fab
  				? (
  					<div className={clsx(classes.wrapper, cs.wrapper)}>
  						<Fab ref={ref} color={color} classes={{root: clsx(buttonClassname, cs.button)}} {...rest}>
								{processing
									? <CircularProgress className={classes.buttonProgress} {...CircularProgressProps}/>
									: <IconComp {...IconProps}/>
								}
  						</Fab>
  					</div>
  				)
  				: (
  					<div className={clsx(fullWidth ? classes.wrapperFullWidth : classes.wrapper, cs.wrapper)}>
  						<Button ref={ref} fullWidth={fullWidth} variant={variant} color={color} classes={{root: clsx(buttonClassname, cs.button)}} disabled={processing} {...rest}>
								{processing
									? <CircularProgress className={clsx(classes.marginRight, classes.buttonProgress, cs.processing)} {...CircularProgressProps}/>
									: IconComp && <IconComp classes={{root: clsx(classes.marginRight, cs.icon)}} {...IconProps}/>
								}
								{children}
  						</Button>
  					</div>
  				)
  			}
  		</div>
  	);
	}
}

const Button1 = withStyles(styles)(CircularIntegration);
const Button2 = React.forwardRef(({classes, ...props}, ref) => <Button1 refButton={ref} cs={classes} {...props}/>);

Button2.displayName = 'FButton';

export default Button2;
