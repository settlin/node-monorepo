import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import CircularProgress from '@mui/material/CircularProgress';
import { teal } from '@mui/material/colors'; // ✅ Correct import for colors
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from '@mui/material/styles/styled';
const PREFIX = 'FButton';
const classes = {
	root: `${PREFIX}-root`,
	wrapper: `${PREFIX}-wrapper`,
	marginRight: `${PREFIX}-marginRight`,
	wrapperFullWidth: `${PREFIX}-wrapperFullWidth`,
	buttonSuccess: `${PREFIX}-buttonSuccess`,
	buttonProgress: `${PREFIX}-buttonProgress`,
}
const StyledButton = styled('div')(({theme}) => ({
	[`&.${classes.root}`]: {
		display: 'flex',
		alignItems: 'center',
		marginTop: '8px',
	},
	[`& .${classes.wrapper}`]: {
		margin: 'auto',
		position: 'relative',
	},
	[`& .${classes.marginRight}`]: {
		marginRight: theme.spacing(1), // ✅ Now works correctly
	},
	[`& .${classes.wrapperFullWidth}`]: {
		margin: 'auto',
		position: 'relative',
		width: '100%',
	},
	[`& .${classes.buttonSuccess}`]: {
		backgroundColor: teal[500],
		'&:hover': {
			backgroundColor: teal[700],
		},
		backgroundSize: 'contain',
	},
	[`& .${classes.buttonProgress}`]: {
		color: teal[500],
	},
}));

function CircularIntegration({ classes: cs = {}, fab, processing, success, color = 'primary', variant = 'contained', label = 'Submit', children = label, Icon = fab ? CloudUploadIcon : null, fullWidth, IconProps, CircularProgressProps, refButton: ref, ...rest }) {
	const buttonClassname = clsx({
		[classes.buttonSuccess]: success,
	});

	const IconComp = success ? CheckIcon : Icon;
	return (
		<StyledButton className={clsx(classes.root, cs.root)} style={{ width: fullWidth ? '100%' : 'auto' }}>
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
		</StyledButton>
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

// ✅ Correct usage of forwardRef
const Button2 = CircularIntegration;

Button2.propTypes = {
	classes: PropTypes.object,
};

Button2.displayName = 'FButton';

export default Button2;
