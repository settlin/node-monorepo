import React, {Fragment} from 'react';
import formikToMuiProps from '../../../src/forms/formikToMuiProps';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Dropzone from 'react-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid';
import convertBytesToMbsOrKbs from '../../../src/utils/convertBytesToMbsOrKbs';
import Previews from './Previews';
import clsx from 'clsx';
import acceptable from 'attr-accept';

const styles = {
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
};

const callbackOnFile = function(file, cb) {
	return function(e) {
		const f = new File([file], file.name, {type: file.type});
		if (e) f.error = f.name + ' - ' + e.message;
		else f.uploaded = true;
		return cb(f);
	};
};

class DropzoneArea extends React.PureComponent {
	state = {}
	onDrop(acceptedFiles, rejectedFiles) {
		const {limit, value = [], onError, onAdd, onDrop, accept, maxSize} = this.props;

		let errors = [];
		if (value.length + acceptedFiles.length > limit && onError) errors.push(`Only ${limit} files can be uploaded at max`);
		rejectedFiles.map(f => {
			let message = `Rejected ${f.name}`;
			if (!acceptable(f, accept)) message += ': file type not supported';
			else if (f.size > maxSize) message += `: file too big. Limit: ${convertBytesToMbsOrKbs(maxSize)}`;
			errors.push(message);
		});
		this.setState({errors});

		acceptedFiles.slice(0, Math.max(limit - value.length, 0)).forEach((f) => {
			f.preview = URL.createObjectURL(f);
			f.processing = true;
			if (onAdd) onAdd(f);
			if (onDrop) onDrop(f, callbackOnFile(f, onAdd));
		});
	}
	render() {
		const {name, classes, cs = {}, FormHelperTextProps, error, helperText, value = [], showPreviews, PreviewsComponentProps, components: {PreviewsComponent = Previews, PreviewsChildren} = {}, prefixFunction = () => '', previewFunction = f => f.name, acceptedFiles, DropzoneProps} = this.props;
		const {errors = []} = this.state;
		if (!Array.isArray(value)) console.error('Received value is not an array', value); // eslint-disable-line no-console
		const files = value.map(f => {
			if (f.new) {
				f.preview = f.preview || previewFunction(f);
				return f;
			}
			return {
				...f,
				path: prefixFunction(f) + f.name,
				preview: previewFunction(f),
				uploaded: true,
			};
		});

		return (
			<Grid container direction='column' className={clsx(classes.dropzoneContainer, cs.dropzoneContainer)}>
				<Grid item>
					<Dropzone
						accept={acceptedFiles.join(',')}
						onDrop={this.onDrop.bind(this)}
						acceptClassName={classes.stripes}
						rejectClassName={classes.rejectStripes}
						{...DropzoneProps}
						maxSize={this.props.maxSize} // to overwrite DropzoneProps.maxSize
					>
						{({getRootProps, getInputProps}) => (
							<Fragment>
								<Grid container {...getRootProps()} className={clsx(cs.dropzone, classes.helperTextStyle)}>
									<input {...getInputProps()}/>
									<Grid item xs={12}>
										{helperText && <FormHelperText style={{textAlign: 'inherit'}} {...FormHelperTextProps} error={error}>{helperText}</FormHelperText>}
										{errors.map(e => <FormHelperText key={e} style={{textAlign: 'inherit'}} {...FormHelperTextProps} error={true}>{e}</FormHelperText>)}
									</Grid>
									<Grid item xs={12}>
										<CloudUploadIcon className={classes.uploadIconSize}/>
									</Grid>
								</Grid>
							</Fragment>
						)}
					</Dropzone>
				</Grid>
				<Grid item className={clsx(classes.previewsContainer, cs.previewsContainer)}>
					{showPreviews &&
						<PreviewsComponent
							name={name}
							files={files}
							handleDelete={this.props.onDelete}
							showFileNames={this.props.showFileNamesInPreview}
							{...PreviewsComponentProps}
						>
							{PreviewsChildren && <PreviewsChildren/>}
						</PreviewsComponent>
					}
				</Grid>
			</Grid>
		);
	}
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

class FormikMaterialUIDropzone extends React.PureComponent {
	constructor(props) {
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleError = this.handleError.bind(this);
		this.postDelete = this.postDelete.bind(this);
	}
	handleAdd(fileOrig) {
		const {field = {}, form, onChange, value} = this.props;
		let files = value || field.value || [];
		const file = { // need this because File Object was causing some problems
			lastModified: fileOrig.lastModified,
			lastModifiedDate: fileOrig.lastModifiedDate,
			name: fileOrig.name,
			size: fileOrig.size,
			type: fileOrig.type,
			preview: fileOrig.preview,
			processing: fileOrig.processing,
			new: true,
		};
		files = files.find(f => f.name === file.name) ? files.map(f => f.name === file.name ? file : f) : [...files, file];
		if (form) form.setFieldValue(field.name, files, false); // third argument is to skip validate form
		if (onChange) onChange(files);
	}
	postDelete(file) {
		if (file.error) {
			this.handleAdd(file); // to update error
			return;
		}
		const {field = {}, form, onChange, value} = this.props;
		let files = value || field.value || [];
		files = files.filter(f => f.name !== file.name);
		if (form) form.setFieldValue(field.name, files, false); // third argument is to skip validate form
		if (onChange) onChange(files);
	}
	handleDelete(index) {
		const {field = {}, value, handleDelete} = this.props;
		let files = value || field.value || [];
		const file = new File([files[index]], files[index].name, {type: files[index].type});
		file.processing = true;
		this.handleAdd(file); // to update processing
		if (handleDelete) handleDelete(file, callbackOnFile(file, this.postDelete));
		else this.postDelete(file);
	}
	handleError(msg) {
		const {field, form, onError} = this.props;
		if (form) {
			form.setFieldTouched(field.name, true, false); // third argument is to skip validate form
			form.setFieldError(field.name, msg);
		}
		if (onError) onError(files);
	}
	render() {
		let {
			label,
			compact, // eslint-disable-line no-unused-vars
			FormControlProps,
			FormLabelProps: {classes: fClasses, ...FormLabelProps} = {},
			handleUpload,
			handleDelete, // eslint-disable-line no-unused-vars
			classes: {formLabel, ...classes},
			...props
		} = this.props;

		const fp = formikToMuiProps(props);
		return (
			<FormControl component='fieldset' error={props.error} {...FormControlProps}>
				<FormLabel
					{...FormLabelProps}
					classes={{...fClasses, ...(compact ? {root: formLabel} : {})}}
				>{label}</FormLabel>
				<DropzoneArea
					{...fp}
					classes={classes}
					onAdd={this.handleAdd}
					onDelete={this.handleDelete}
					onError={this.handleError}
					onDrop={handleUpload}
				/>
			</FormControl>
		);
	}
}

const FormikMaterialUIDropzone1 = withStyles(styles)(FormikMaterialUIDropzone);
FormikMaterialUIDropzone = ({classes, ...props}) => <FormikMaterialUIDropzone1 cs={classes} {...props}/>;

FormikMaterialUIDropzone1.displayName = 'FormikMaterialUIDropzone';
export default FormikMaterialUIDropzone;
