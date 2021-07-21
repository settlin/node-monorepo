import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Fab from '@material-ui/core/Fab';
import FormHelperText from '@material-ui/core/FormHelperText';
import {grey} from '@material-ui/core/colors';
import LinearProgress from '@material-ui/core/LinearProgress';
import isImage from '../../../src/utils/isImage';
import clsx from 'clsx';
import {useFieldArray} from 'react-hook-form';


const styles = makeStyles({
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
		// opacity: 0,
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
function Previews({files = [], handleDelete, showFileNames, FormHelperTextProps = {}, classes: cs = {}, children, name, ...props}) {
	const classesStyle = styles();

	const onClick = i => e => { e.preventDefault(); e.stopPropagation(); handleDelete(i); };
	if (!files.length) return null;
	console.log('files are in preview', files, children);
	FormHelperTextProps.classes = {...FormHelperTextProps.classes, root: clsx(classesStyle.center, (FormHelperTextProps.classes || {}).root)};
	return (
		<div className={clsx(classesStyle.allPreviewsContainer, cs.allPreviewsContainer)}>
			{
				files?.map((file, i) => (
					<div className={clsx(classesStyle.onePreviewContainer, cs.onePreviewContainer)} key={i}>
						<Grid className={classesStyle.selfCenter} item xs={12}>
							<a aria-label={file.name} href={file.path} rel='noreferrer' target='_blank'>
								{(isImage(file) ?
									<img className={clsx(classesStyle.smallPreviewImg, cs.smallPreviewImg)} role='presentation' src={file.preview} style={opacity(file)}/>
									:
									<AttachFileIcon className={clsx(classesStyle.smallPreviewImg, cs.smallPreviewImg)} style={opacity(file)}/>
								)}
							</a>
						</Grid>
						{file.processing && <LinearProgress classesStyle={{root: classesStyle.progress, colorPrimary: classesStyle.progressColor, barColorPrimary: classesStyle.progressBarColor}}/>}
						{(file.error || showFileNames) && (
							<Grid item xs={12}>
								<a aria-label={file.name} href={file.path} rel='noreferrer' target='_blank'>
									<FormHelperText {...FormHelperTextProps} error={Boolean(file.error)}>
										{file.error || file.name}
									</FormHelperText>
								</a>
							</Grid>
						)}
						{file.uploaded && (
							<Grid item xs={12}>
								{children && children({...props, name, file, index: i})}
							</Grid>
						)}
						<Fab
							aria-label='Delete'
							className={classesStyle.removeBtn}
							onClick={onClick(i)}
						>
							<DeleteIcon/>
						</Fab>
					</div>
				))
			}
		</div>
	);
}

export default Previews;
