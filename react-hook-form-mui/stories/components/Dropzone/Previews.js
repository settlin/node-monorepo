import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Fab from '@mui/material/Fab';
import FormHelperText from '@mui/material/FormHelperText';
import { grey } from '@mui/material/colors';
import LinearProgress from '@mui/material/LinearProgress';
import isImage from '../../../src/utils/isImage';
import clsx from 'clsx';

const PreviewsContainer = styled('div')({
	display: 'flex',
	flexWrap: 'wrap',
});

const PreviewContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'stretch',
	width: 200,
	padding: 8,
	wordBreak: 'break-all',
	position: 'relative',
	'&:hover .previewImg': {
		opacity: 0.3,
	},
	'&:hover .removeBtn': {
		opacity: 1,
	},
});

const StyledProgress = styled(LinearProgress)({
	width: '100%',
	'& .MuiLinearProgress-colorPrimary': {
		backgroundColor: grey[300],
	},
	'& .MuiLinearProgress-barColorPrimary': {
		backgroundColor: grey[500],
		color: grey[100],
	},
});

const RemoveButton = styled(Fab)({
	transition: '.5s ease',
	position: 'absolute',
	// opacity: 0,
	top: 0,
	right: 10,
	width: 40,
	height: 40,
	zIndex: 1,
});

const PreviewImage = styled('img')({
	height: 100,
	width: 'initial',
	maxWidth: '100%',
	color: 'rgba(0, 0, 0, 0.87)',
	transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
	boxSizing: 'border-box',
	boxShadow: 'rgba(0, 0, 0, 0.12) 0 1px 6px, rgba(0, 0, 0, 0.12) 0 1px 4px',
	borderRadius: 2,
});

const StyledAttachFileIcon = styled(AttachFileIcon)(PreviewImage);

const CenterText = styled('div')({
	textAlign: 'center',
});

const opacity = file => ({ opacity: file.processing ? 0.5 : file.error ? 0.1 : 1 });

function Previews({ files = [], handleDelete, showFileNames, FormHelperTextProps = {}, classes: cs = {}, children, name, ...props }) {
	const onClick = i => e => { e.preventDefault(); e.stopPropagation(); handleDelete(i); };
	if (!files.length) return null;
	console.log('files are in preview', files, children);
	FormHelperTextProps.classes = { ...FormHelperTextProps.classes, root: clsx(CenterText, (FormHelperTextProps.classes || {}).root) };
	return (
		<PreviewsContainer className={cs.allPreviewsContainer}>
			{files?.map((file, i) => (
				<PreviewContainer className={cs.onePreviewContainer} key={i}>
					<Grid className={CenterText} item xs={12}>
						<a aria-label={file.name} href={file.path} rel='noreferrer' target='_blank'>
							{(isImage(file) ?
								<PreviewImage className={clsx('previewImg', cs.smallPreviewImg)} role='presentation' src={file.preview} style={opacity(file)} />
								:
								<StyledAttachFileIcon className={clsx('previewImg', cs.smallPreviewImg)} style={opacity(file)} />
							)}
						</a>
					</Grid>
					{file.processing && <StyledProgress />}
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
							{children && children({ ...props, name, file, index: i })}
						</Grid>
					)}
					<RemoveButton
						aria-label='Delete'
						className='removeBtn'
						onClick={onClick(i)}
					>
						<DeleteIcon />
					</RemoveButton>
				</PreviewContainer>
			))}
		</PreviewsContainer>
	);
}

export default Previews;
