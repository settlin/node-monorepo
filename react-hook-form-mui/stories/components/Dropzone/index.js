/* eslint-disable react/no-multi-comp */
import React, {Fragment, useState} from 'react';
import {rhfToMuiProps} from '../../../src/react-hook-form/rhfToMuiProps';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Dropzone from 'react-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid';
import convertBytesToMbsOrKbs from '../../../src/utils/convertBytesToMbsOrKbs';
import Previews from './Previews';
import clsx from 'clsx';
import acceptable from 'attr-accept';

const styles = makeStyles({
	'@keyframes progress': {
		'0%': {
			backgroundPosition: '0 0',
		},
		'100%': {
			backgroundPosition: '-70px 0',
		},
	},
	formLabel: {
		margin: '16px 0 8px 0',
	},
	dropzoneContainer: {
		position: 'relative',
		width: '100%',
		minHeight: '100px',
		border: 'dashed',
		borderColor: '#F0F0F0',
		cursor: 'pointer',
		boxSizing: 'border-box',
	},
	stripes: {
		border: 'solid',
		backgroundImage: 'repeating-linear-gradient(-45deg, #F0F0F0, #F0F0F0 25px, #C8C8C8 25px, #C8C8C8 50px)',
		animation: 'progress 2s linear infinite !important',
		backgroundSize: '150% 100%',
	},
	rejectStripes: {
		border: 'solid',
		backgroundImage: 'repeating-linear-gradient(-45deg, #fc8785, #fc8785 25px, #f4231f 25px, #f4231f 50px)',
		animation: 'progress 2s linear infinite !important',
		backgroundSize: '150% 100%',
	},
	helperTextStyle: {
		textAlign: 'center',
	},
	uploadIconSize: {
		width: 51,
		height: 51,
		color: '#909090',
	},
	previewsContainer: {
		padding: 8,
	},
});

const callbackOnFile = function(file, cb) {
	return function(e) {
		const f = new File([file], file.name, {type: file.type});
		if (e) f.error = f.name + ' - ' + e.message;
		else f.uploaded = true;
		return cb(f);
	};
};

function DropzoneArea(props) {
	// state = {}
	const {name, maxSize, cs = {}, state, FormHelperTextProps, error, helperText, value, showPreviews = true, PreviewsComponentProps, components: {PreviewsComponent = Previews, onDelete, PreviewsChildren} = {}, prefixFunction = () => '', previewFunction = f => f.name, acceptedFiles, DropzoneProps} = props;
	const classesStyle = styles();
	const [errors, setErrors] = useState({});


	const onDrop = (acceptedFiles, rejectedFiles) => {
		const {limit, onError, onAdd, onDrop, accept} = props;
		let errors = [];
		if (value.length + acceptedFiles.length > limit && onError) errors.push(`Only ${limit} files can be uploaded at max`);
		rejectedFiles.map(f => {
			let message = `Rejected ${f.name}`;
			if (!acceptable(f, accept)) message += ': file type not supported';
			else if (f.size > maxSize) message += `: file too big. Limit: ${convertBytesToMbsOrKbs(maxSize)}`;
			errors.push(message);
		});
		setErrors({errors});
		acceptedFiles.slice(0, Math.max(limit - value.length, 0)).forEach((f) => {
			f.preview = URL.createObjectURL(f);
			f.processing = true;
			if (onAdd) onAdd(f);
			if (onDrop) onDrop(f, callbackOnFile(f, onAdd));
		});
	};
	// if (!Array.isArray(value)) return 'Received value is not an array' + value; // eslint-disable-line no-console
	const files = value?.map(f => {
		// if (f.new) {
		// 	return {
		// 		...f,
		// 		preview: f.preview || previewFunction(f),
		// 		uploaded: true,
		// 	};
		// }
		return {
			...f,
			path: prefixFunction(f) + f.name,
			preview: f.preview || previewFunction(f),
			uploaded: true,
		};
	});

	return (
		<Grid className={clsx(classesStyle.dropzoneContainer, cs.dropzoneContainer)} container direction='column'>
			<Grid item>
				<Dropzone
					accept={acceptedFiles.join(',')}
					acceptClassName={classesStyle.stripes}
					onDrop={onDrop}
					rejectClassName={classesStyle.rejectStripes}
					{...DropzoneProps}
					maxSize={maxSize} // to overwrite DropzoneProps.maxSize
				>
					{({getRootProps, getInputProps}) => (
						<Grid container {...getRootProps()} className={clsx(cs.dropzone, classesStyle.helperTextStyle)}>
							<input {...getInputProps({className: 'dropzone'})}/>
							{/* <Grid item xs={12}>
								{helperText && (
									<FormHelperText style={{textAlign: 'inherit'}} {...FormHelperTextProps} error={error}>
										{helperText}
									</FormHelperText>
								)}
								{errors?.map(e => (
									<FormHelperText key={e} style={{textAlign: 'inherit'}} {...FormHelperTextProps} error>
										{e}
									</FormHelperText>
								))}
							</Grid> */}
							<Grid item xs={12}>
								<CloudUploadIcon className={classesStyle.uploadIconSize}/>
							</Grid>
							<Grid className={clsx(classesStyle.previewsContainer, cs.previewsContainer)} item onClick={e => e.stopPropagation()}>
								{showPreviews && (
									<>
										<PreviewsComponent
											files={files}
											handleDelete={onDelete}
											name={name}
											showFileNames={props.showFileNamesInPreview}
											{...PreviewsComponentProps}
										>
											{PreviewsChildren && <PreviewsChildren/>}
										</PreviewsComponent>
									</>
								)
								}
							</Grid>
						</Grid>
					)}
				</Dropzone>
			</Grid>
		</Grid>
	);
}

DropzoneArea.defaultProps = {
	acceptedFiles: ['image/*', 'video/*', 'application/*'],
	limit: 20,
	maxSize: 50000000,
	helperText: 'Drag and drop a file here or click',
	showPreviews: true,
	showFileNamesInPreview: true,
	clearOnUnmount: true,
};
DropzoneArea.propTypes = {
	acceptedFiles: PropTypes.array,
	components: PropTypes.object,
	limit: PropTypes.number,
	maxSize: PropTypes.number,
	helperText: PropTypes.string,
	showPreviews: PropTypes.bool,
	showFileNamesInPreview: PropTypes.bool,
	clearOnUnmount: PropTypes.bool,
	onAdd: PropTypes.func,
	onDelete: PropTypes.func,
	onDrop: PropTypes.func,
	onDropRejected: PropTypes.func,
};

function RHFMaterialUIDropzone(props) {
	const classesStyle = styles();
	const handleAdd = (fileOrig) => {
		const {onChange, value, setValue, state, name, watch} = props;
		let files = value || field.value || [];
		const file = { // need this because File Object was causing some problems
			lastModified: fileOrig.lastModified,
			lastModifiedDate: fileOrig.lastModifiedDate,
			name: fileOrig.name,
			size: fileOrig.size,
			type: fileOrig.type,
			preview: fileOrig.preview,
			processing: fileOrig.processing,
			// new: true,
		};
		files = files.find(f => f.name === file.name) ? files.map(f => f.name === file.name ? file : f) : [...files, file];
		state(files);
		if (files) setValue(name, files);
		if (onChange) onChange(files);
	};
	const postDelete = (file) => {
		if (file.error) {
			handleAdd(file); // to update error
			return;
		}
		const {field = {}, form, onChange, value} = props;
		let files = value || field.value || [];
		files = files.filter(f => f.name !== file.name);
		if (form) form.setFieldValue(field.name, files, false); // third argument is to skip validate form
		if (onChange) onChange(files);
	};
	const handleDeleted = (index) => {
		const {field = {}, value, handleDelete} = props;
		let files = value || field.value || [];
		const file = new File([files[index]], files[index].name, {type: files[index].type});
		file.processing = true;
		handleAdd(file); // to update processing
		if (handleDelete) handleDeleted(file, callbackOnFile(file, postDelete));
		else postDelete(file);
	};
	const handleFileUpload = (file, cb) => {
		const reader = new FileReader();
		reader.onload = () => {
			const binary = reader.result;
			uploadFunc({name: file.name, binary, cb});
		};
		reader.readAsBinaryString(file);
	};
	const handleUpload = (file, cb) => {
		const {onUploadDdp, ddpUploadInfo, createVersions} = props;
		if (onUploadDdp && typeof onUploadDdp === 'function' && ddpUploadInfo) onUploadDdp(file, createVersions ? delayedCb(`${Meteor.settings.public.s3Prefix}/application/${ddpUploadInfo.name}`, cb) : cb);
		// else if (createVersions) handleImageUpload(file, cb);
		// else handleFileUpload(file, cb);
		handleFileUpload(file, cb);
	};
	const handleError = (msg) => {
		const {value, field, form, onError} = props;
		if (form) {
			form.setFieldTouched(field.name, true, false); // third argument is to skip validate form
			form.setFieldError(field.name, msg);
		}
		if (onError) onError(value || field.value);
	};
	let {
		label,
		compact, // eslint-disable-line no-unused-vars
		FormControlProps,
		FormLabelProps: {classes: fClasses, ...FormLabelProps} = {},
		handleDelete, // eslint-disable-line no-unused-vars
		// classes: {formLabel, ...classes},
	} = props;
	const fp = rhfToMuiProps(props);
	return (
		<FormControl error={props.error} fullWidth {...FormControlProps}>
			<FormLabel
				{...FormLabelProps}
				classes={{...fClasses, ...(compact ? {root: classesStyle.formLabel} : {})}}
			>
				{label}

			</FormLabel>
			<DropzoneArea
				{...fp}
				onAdd={handleAdd}
				onDelete={handleDeleted}
				onDrop={handleUpload}
				onError={handleError}
				type='text'
			/>
		</FormControl>
	);
}

const RHFMaterialUIDropzone1 = RHFMaterialUIDropzone;
RHFMaterialUIDropzone = function({classes, ...props}) {
	return <RHFMaterialUIDropzone1 cs={classes} {...props}/>;
};

RHFMaterialUIDropzone1.displayName = 'RHFMaterialUIDropzone';
export default RHFMaterialUIDropzone;
