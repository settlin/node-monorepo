import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Fab from '@material-ui/core/Fab';
import FormHelperText from '@material-ui/core/FormHelperText';
import grey from '@material-ui/core/colors/grey';
import LinearProgress from '@material-ui/core/LinearProgress';
import isImage from '../../utils/isImage';
import clsx from 'clsx';

const styles = () => ({
	allPreviewsContainer: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	onePreviewContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'stretch',
		width: 100,
		padding: 8,
		wordBreak: 'break-all',
		position: 'relative',
		'&:hover $smallPreviewImg': {
			opacity: 0.3,
		},
		'&:hover $removeBtn': {
			opacity: 1,
		},
	},
	progress: {
		width: '100%',
	},
	progressColor: {
		backgroundColor: grey[300],
	},
	progressBarColor: {
		backgroundColor: grey[500],
		color: grey[100],
	},
	removeBtn: {
		transition: '.5s ease',
		position: 'absolute',
		opacity: 0,
		top: -5,
		right: -5,
		width: 40,
		height: 40,
		zIndex: 1,
	},
	smallPreviewImg: {
		height: 100,
		width: 'initial',
		maxWidth: '100%',
		color: 'rgba(0, 0, 0, 0.87)',
		transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
		boxSizing: 'border-box',
		boxShadow: 'rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px',
		borderRadius: 2,
	},
	center: {
		textAlign: 'center',
	},
});

const opacity = file => ({opacity: file.processing ? 0.5 : file.error ? 0.1 : 1});
const Previews = ({files = [], handleDelete, showFileNames, FormHelperTextProps = {}, classes, children, ...props}) => {
	const onClick = i => e => { e.preventDefault(); e.stopPropagation(); handleDelete(i); };
	if (!files.length) return null;

	FormHelperTextProps.classes = {...FormHelperTextProps.classes, root: clsx(classes.center, (FormHelperTextProps.classes || {}).root)};
	return (
		<div className={classes.allPreviewsContainer}>
			{
				files.map((file, i) => (
					<div key={i} className={classes.onePreviewContainer}>
						<Grid item xs={12}>
							{(isImage(file) ?
								<img className={classes.smallPreviewImg} role='presentation' src={file.preview} style={opacity(file)}/>
								:
								<AttachFileIcon className={classes.smallPreviewImg} style={opacity(file)}/>
							)}
						</Grid>
						{file.processing && <LinearProgress classes={{root: classes.progress, colorPrimary: classes.progressColor, barColorPrimary: classes.progressBarColor}}/>}
						{(file.error || showFileNames) && <Grid item xs={12}>
							<FormHelperText {...FormHelperTextProps} error={Boolean(file.error)}>{file.error || file.name}</FormHelperText>
						</Grid>}
						{file.uploaded && <Grid item xs={12}>
							{React.Children.map(children, child => React.cloneElement(child, {...props, key: i, file, index: i}))}
						</Grid>}
						<Fab onClick={onClick(i)}
							aria-label='Delete'
							className={classes.removeBtn}>
							<DeleteIcon/>
						</Fab>
					</div>
				))
			}
		</div>
	);
};

export default withStyles(styles)(Previews);
