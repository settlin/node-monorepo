import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import withStyles from '@mui/styles/withStyles';
import CircularProgress from '@mui/material/CircularProgress';
import teal from '@mui/material/colors/teal';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const styles = ({theme}) => ({
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

function CircularIntegration({ classes, cs = {}, fab, processing, success, color = 'primary', variant = 'contained', label = 'Submit', children = label, Icon = fab ? CloudUploadIcon : null, fullWidth, IconProps, CircularProgressProps, refButton: ref, ...rest }) {
	const buttonClassname = clsx({
		[classes.buttonSuccess]: success,
	});

	const IconComp = success ? CheckIcon : Icon;
	return (
		<div className={clsx(classes.root, cs.root)} style={{ width: fullWidth ? '100%' : 'auto' }}>
			{fab
				? (
					<div className={clsx(classes.wrapper, cs.wrapper)}>
						<Fab classes={{ root: clsx(buttonClassname, cs.button) }} color={color} ref={ref} {...rest}>
							{processing
								? <CircularProgress className={classes.buttonProgress} {...CircularProgressProps} />
								: <IconComp {...IconProps} />
							}
						</Fab>
					</div>
				)
				: (
					<div className={clsx(fullWidth ? classes.wrapperFullWidth : classes.wrapper, cs.wrapper)}>
						<Button classes={{ root: clsx(buttonClassname, cs.button) }} color={color} disabled={processing} fullWidth={fullWidth} ref={ref} variant={variant} {...rest}>
							{processing
								? <CircularProgress className={clsx(classes.marginRight, classes.buttonProgress, cs.processing)} {...CircularProgressProps} />
								: IconComp && <IconComp classes={{ root: clsx(classes.marginRight, cs.icon) }} {...IconProps} />
							}
							{children}
						</Button>
					</div>
				)
			}
		</div>
	);
}

CircularIntegration.propTypes = {
	children: PropTypes.node,
	CircularProgressProps: PropTypes.object,
	classes: PropTypes.object,
	color: PropTypes.string,
	cs: PropTypes.object,
	fab: PropTypes.bool,
	fullWidth: PropTypes.bool,
	Icon: PropTypes.node,
	IconProps: PropTypes.object,
	label: PropTypes.string,
	processing: PropTypes.bool,
	refButton: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.elementType }),
	]),
	success: PropTypes.bool,
	variant: PropTypes.string,
};

const Button1 = withStyles(styles)(CircularIntegration);
// eslint-disable-next-line react/no-multi-comp
const Button2 = React.forwardRef(({ classes, ...props }, ref) => <Button1 cs={classes} refButton={ref} {...props} />);

Button2.propTypes = {
	classes: PropTypes.object,
};

Button2.displayName = 'FButton';

export default Button2;
