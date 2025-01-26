import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import teal from '@mui/material/colors/teal';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Root = styled('div')(({ theme, fullWidth }) => ({
	display: 'flex',
	alignItems: 'center',
	marginTop: '8px',
	width: fullWidth ? '100%' : 'auto'
}));

const Wrapper = styled('div')(({ theme, fullWidth }) => ({
	margin: 'auto',
	position: 'relative',
	...(fullWidth && {
		width: '100%'
	})
}));

const StyledButton = styled(Button)(({ theme, success }) => ({
	...(success && {
		backgroundColor: teal[500],
		'&:hover': {
			backgroundColor: teal[700],
		},
		backgroundSize: 'contain',
	})
}));

const StyledFab = styled(Fab)(({ theme, success }) => ({
	...(success && {
		backgroundColor: teal[500],
		'&:hover': {
			backgroundColor: teal[700],
		},
		backgroundSize: 'contain',
	})
}));

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
	color: teal[500]
}));

const IconWrapper = styled('span')(({ theme }) => ({
	marginRight: theme.spacing(1)
}));

function CircularIntegration({
	cs = {},
	fab,
	processing,
	success,
	color = 'primary',
	variant = 'contained',
	label = 'Submit',
	children = label,
	Icon = fab ? CloudUploadIcon : null,
	fullWidth,
	IconProps,
	CircularProgressProps,
	refButton: ref,
	...rest
}) {
	const IconComp = success ? CheckIcon : Icon;
	return (
		<Root className={cs.root} fullWidth={fullWidth}>
			{fab ? (
				<Wrapper className={cs.wrapper}>
					<StyledFab success={success} className={cs.button} color={color} ref={ref} {...rest}>
						{processing ? (
							<StyledCircularProgress {...CircularProgressProps} />
						) : (
							<IconComp {...IconProps} />
						)}
					</StyledFab>
				</Wrapper>
			) : (
				<Wrapper className={cs.wrapper} fullWidth={fullWidth}>
					<StyledButton
						success={success}
						className={cs.button}
						color={color}
						disabled={processing}
						fullWidth={fullWidth}
						ref={ref}
						variant={variant}
						{...rest}
					>
						{processing ? (
							<StyledCircularProgress className={cs.processing} {...CircularProgressProps} />
						) : (
							IconComp && (
								<IconWrapper className={cs.icon}>
									<IconComp {...IconProps} />
								</IconWrapper>
							)
						)}
						{children}
					</StyledButton>
				</Wrapper>
			)}
		</Root>
	);
}

CircularIntegration.propTypes = {
	children: PropTypes.node,
	CircularProgressProps: PropTypes.object,
	color: PropTypes.string,
	cs: PropTypes.object,
	fab: PropTypes.bool,
	fullWidth: PropTypes.bool,
	Icon: PropTypes.elementType,
	IconProps: PropTypes.object,
	label: PropTypes.string,
	processing: PropTypes.bool,
	refButton: PropTypes.object,
	success: PropTypes.bool,
	variant: PropTypes.string,
};

// eslint-disable-next-line react/no-multi-comp, react/prop-types
const Button2 = React.forwardRef(function Button1({classes, ...props}, ref) {
	return <CircularIntegration cs={classes} refButton={ref} {...props}/>;
});

Button2.displayName = 'FButton';

export default Button2;
