import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Fab from '@material-ui/core/Fab';
import FormHelperText from '@material-ui/core/FormHelperText';
import grey from '@material-ui/core/colors/grey';
import LinearProgress from '@material-ui/core/LinearProgress';
import isImage from '../../../src/utils/isImage';
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
		width: 200,
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
		top: 0,
		right: 10,
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
	selfCenter: {
		textAlign: 'center',
	},
});

const opacity = file => ({opacity: file.processing ? 0.5 : file.error ? 0.1 : 1});
const Previews = ({files = [], handleDelete, showFileNames, FormHelperTextProps = {}, classes, children, cs = {}, ...props}) => {
	const onClick = i => e => { e.preventDefault(); e.stopPropagation(); handleDelete(i); };
	if (!files.length) return null;

	FormHelperTextProps.classes = {...FormHelperTextProps.classes, root: clsx(classes.center, (FormHelperTextProps.classes || {}).root)};
	return (
		<div className={clsx(classes.allPreviewsContainer, cs.allPreviewsContainer)}>
			{
				files.map((file, i) => (
					<div key={i} className={clsx(classes.onePreviewContainer, cs.onePreviewContainer)}>
						<Grid item xs={12} className={classes.selfCenter}>
							<a target='_blank' aria-label={file.name} href={file.path}>
								{(isImage(file) ?
									<img className={clsx(classes.smallPreviewImg, cs.smallPreviewImg)} role='presentation' src={file.preview} style={opacity(file)}/>
									:
									<AttachFileIcon className={clsx(classes.smallPreviewImg, cs.smallPreviewImg)} style={opacity(file)}/>
								)}
							</a>
						</Grid>
						{file.processing && <LinearProgress classes={{root: classes.progress, colorPrimary: classes.progressColor, barColorPrimary: classes.progressBarColor}}/>}
						{(file.error || showFileNames) && <Grid item xs={12}>
							<a target='_blank' aria-label={file.name} href={file.path}>
								<FormHelperText {...FormHelperTextProps} error={Boolean(file.error)}>{file.error || file.name}</FormHelperText>
							</a>
						</Grid>}
						{file.uploaded && <Grid item xs={12}>
							{React.Children.map(children, (child, j) => React.cloneElement(child, {...props, key: i + '' + j, file, index: i}))}
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

const Previews1 = withStyles(styles)(Previews);
export default ({classes, ...props}) => <Previews1 cs={classes} {...props}/>;

