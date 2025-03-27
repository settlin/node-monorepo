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
const RootDiv = styled('div')(({ theme, fullWidth }) => ({
	display: 'flex',
	alignItems: 'center',
	marginTop: '8px',
	width: fullWidth ? '100%' : 'auto'
}));

const WrapperDiv = styled('div')({
	margin: 'auto',
	position: 'relative',
});

const FullWidthWrapperDiv = styled('div')({
	margin: 'auto',
	position: 'relative',
	width: '100%',
});

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

const ProgressIcon = styled(CircularProgress)({
	color: teal[500],
});

const MarginRightIcon = styled('span')(({ theme }) => ({
	marginRight: theme.spacing(1),
}));
const CircularIntegration = React.forwardRef((props, ref) => {
	const {cs = {}, fab, processing, success, color = 'primary', variant = 'contained', label = 'Submit', children = label, Icon = fab ? CloudUploadIcon : null, fullWidth, IconProps, CircularProgressProps, ...rest} = props;
	
	const IconComp = success ? CheckIcon : Icon;
	
	return (
		<RootDiv className={cs.root} fullWidth={fullWidth}>
			{fab
				? (
					<WrapperDiv className={cs.wrapper}>
						<StyledFab ref={ref} color={color} success={success} className={cs.button} {...rest}>
							{processing
								? <ProgressIcon {...CircularProgressProps}/>
								: <IconComp {...IconProps}/>
							}
						</StyledFab>
					</WrapperDiv>
				)
				: (
					fullWidth ? (
						<FullWidthWrapperDiv className={cs.wrapper}>
							<StyledButton 
								ref={ref} 
								fullWidth={fullWidth} 
								variant={variant} 
								color={color} 
								success={success}
								className={cs.button} 
								disabled={processing} 
								{...rest}
							>
								{processing
									? <ProgressIcon component={MarginRightIcon} className={cs.processing} {...CircularProgressProps}/>
									: IconComp && (
										<MarginRightIcon className={cs.icon}>
											<IconComp {...IconProps}/>
										</MarginRightIcon>
									)
								}
								{children}
							</StyledButton>
						</FullWidthWrapperDiv>
					) : (
						<WrapperDiv className={cs.wrapper}>
							<StyledButton 
								ref={ref} 
								fullWidth={fullWidth} 
								variant={variant} 
								color={color} 
								success={success}
								className={cs.button} 
								disabled={processing} 
								{...rest}
							>
								{processing
									? <ProgressIcon component={MarginRightIcon} className={cs.processing} {...CircularProgressProps}/>
									: IconComp && (
										<MarginRightIcon className={cs.icon}>
											<IconComp {...IconProps}/>
										</MarginRightIcon>
									)
								}
								{children}
							</StyledButton>
						</WrapperDiv>
					)
				)
			}
		</RootDiv>
	);
});
CircularIntegration.displayName = 'FButton';

export default CircularIntegration;
