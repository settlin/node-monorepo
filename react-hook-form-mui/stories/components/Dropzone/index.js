import React, {useState, useEffect} from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Dropzone from 'react-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid';
import Previews from './Previews';
import clsx from 'clsx';
import convertBytesToMbsOrKbs from '../../../src/utils/convertBytesToMbsOrKbs';
import acceptable from 'attr-accept';
import {useFieldArray, useFormContext} from 'react-hook-form';
import {rhfToMuiProps} from '../../../src/react-hook-form/rhfToMuiProps';

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
		textAlign: 'center',
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
		display: 'flex',
		flexWrap: 'wrap',
	},
});

const callbackOnFile = function(file, cb) {
	return function(e) {
		const f = new File([file], file.name, {type: file.type});
		if (e) f.error = f.name + ' - ' + e.message;
		else f.uploaded = true;
		f.preview = file.preview;
		return cb(f);
	};
};

function DropzoneArea(props) {
	// state = {}
	const {name, maxSize, cs = {}, FormHelperTextProps, error, helperText, value, showPreviews = true, PreviewsComponentProps, components: {PreviewsComponent = Previews} = {}, prefixFunction = () => '', previewFunction = f => f.name, acceptedFiles, PreviewsChildren, DropzoneProps} = props;
	const classesStyle = styles();
	const [errors, setErrors] = useState();
	// return (
	//   {fields.map((field, index) => (
	//     <input
	//       key={field.id} // important to include key with field's id
	//       {...register(`test.${index}.value`)}
	//       defaultValue={field.value} // make sure to include defaultValue
	//     />
	//   ))}
	// );

	console.log('val ', value, PreviewsChildren);
	const onDrop = (acceptedFiles, rejectedFiles) => {
		const {limit, onError, onAdd, onDrop, accept} = props;
		let errors = [];
		if (value?.length + acceptedFiles.length > limit && onError) errors.push(`Only ${limit} files can be uploaded at max`);
		rejectedFiles.map(f => {
			let message = `Rejected ${f.name}`;
			if (!acceptable(f, accept)) message += ': file type not supported';
			else if (f.size > maxSize) message += `: file too big. Limit: ${convertBytesToMbsOrKbs(maxSize)}`;
			errors.push(message);
		});
		setErrors(errors);
		acceptedFiles.slice(0, Math.max(limit - value?.length, 0)).forEach((f) => {
			f.preview = URL.createObjectURL(f);
			f.processing = false;
			if (onAdd) onAdd(f);
			if (onDrop) onDrop(f, callbackOnFile(f, onAdd));
		});
	};
	if (!Array.isArray(value)) return 'Received value is not an array' + value; // eslint-disable-line no-console

	let files = value?.map(f => {
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
							<Grid item xs={12}>
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
							</Grid>
							<Grid item xs={12}>
								<CloudUploadIcon className={classesStyle.uploadIconSize}/>
							</Grid>
							<Grid className={clsx(classesStyle.previewsContainer, cs.previewsContainer)} item onClick={e => e.stopPropagation()}>
								{showPreviews && (
									<PreviewsComponent
										files={files}
										handleDelete={props.onDelete}
										name={name}
										showFileNames={props.showFileNamesInPreview}
										{...PreviewsComponentProps}
									>
										{PreviewsChildren}
									</PreviewsComponent>
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
	accept: PropTypes.string,
	acceptedFiles: PropTypes.array,
	classes: PropTypes.object,
	clearOnUnmount: PropTypes.bool,
	components: PropTypes.object,
	cs: PropTypes.object,
	DropzoneProps: PropTypes.object,
	error: PropTypes.bool,
	FormHelperTextProps: PropTypes.object,
	helperText: PropTypes.string,
	limit: PropTypes.number,
	maxSize: PropTypes.number,
	name: PropTypes.string,
	onAdd: PropTypes.func,
	onDelete: PropTypes.func,
	onDrop: PropTypes.func,
	onDropRejected: PropTypes.func,
	onError: PropTypes.func,
	prefixFunction: PropTypes.func,
	previewFunction: PropTypes.func,
	PreviewsComponentProps: PropTypes.object,
	showFileNamesInPreview: PropTypes.bool,
	showPreviews: PropTypes.bool,
	value: PropTypes.array,
};

// eslint-disable-next-line react/no-multi-comp
function RHFMaterialUIDropzone({
	label,
	compact, // eslint-disable-line no-unused-vars
	FormControlProps,
	FormLabelProps: {classes: fClasses, ...FormLabelProps} = {},
	handleUpload,
	name,
	onChange,
	handleDelete, // eslint-disable-line no-unused-vars
	...p
}) {
	const classesStyles = styles();

	const {control, watch, formState} = useFormContext();
	const {error} = rhfToMuiProps({formState});
	const {fields: fs, append, update, remove} = useFieldArray({
		control,
		name,
		// keyName: "id", default to "id", you can change the key name
	});
	const watchFieldArray = watch(name);
	const fields = fs.map((field, index) => {
		return {
			...field,
			...watchFieldArray[index],
		};
	});
	console.log('files', fields);

	const handleAdd = (fileOrig) => {
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
		if (fields.map(p => p.name).includes(file.name)) return;
		append(file);
		if (onChange) onChange([...fields, file]);
	};

	const postDelete = (file) => {
		const ind = fields.findIndex(f => f.name === file.name);
		remove(ind);
		if (onChange) onChange(fields.filter(f => f.name !== file.name));
	};

	const handleDeleted = (index) => {
		const file = new File([fields[index]], fields[index].name, {type: fields[index].type});
		file.processing = true;
		if (handleDelete) handleDelete(file, callbackOnFile(file, postDelete));
		postDelete(file);
	};

	const handleError = (msg) => {
		const {onError} = props;
		if (onError) onError(values);
	};

	return (
		<FormControl component='fieldset' error={error} fullWidth {...FormControlProps}>
			<FormLabel
				{...FormLabelProps}
				classes={{...fClasses, ...(compact ? {root: classesStyles.formLabel} : {})}}
			>
				{label}
			</FormLabel>
			<DropzoneArea
				{...p}
				name={name}
				onAdd={handleAdd}
				onDelete={handleDeleted}
				onDrop={handleUpload}
				onError={handleError}
				value={fields}
			/>
		</FormControl>
	);
}

RHFMaterialUIDropzone.propTypes = {
	classes: PropTypes.object,
	compact: PropTypes.bool,
	field: PropTypes.object,
	form: PropTypes.object,
	FormControlProps: PropTypes.object,
	FormLabelProps: PropTypes.object,
	handleDelete: PropTypes.func,
	handleUpload: PropTypes.func,
	label: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	onError: PropTypes.func,
};

RHFMaterialUIDropzone.displayName = 'RHFMaterialUIDropzone';
export default RHFMaterialUIDropzone;
