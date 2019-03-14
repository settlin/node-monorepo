import React, {Fragment} from 'react';
import formikToMuiProps from '../formikToMuiProps';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Dropzone from 'react-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid';
import convertBytesToMbsOrKbs from '../../utils/convertBytesToMbsOrKbs';
import Previews from './Previews';
import classNames from 'classnames';

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
	dropzone: {
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
};

const callbackOnFile = function(file, cb) {
	return function(e) {
		const f = new File([file], file.name, {type: file.type});
		if (e) f.error = f.name + ' - ' + e.message;
		return cb(f);
	};
};

class DropzoneArea extends React.PureComponent {
	state = {
		fileObjects: [],
	};
	constructor(props) {
		super(props);
	}
	componentWillUnmount() {
		if (this.props.clearOnUnmount) {
			this.setState({
				fileObjects: [],
			});
		}
	}
	onDrop(files) {
		const {filesLimit, value, onError, onAdd, onDrop} = this.props;
		if (value.length + files.length > filesLimit && onError) onError(`Maximum allowed number of files exceeded. Only ${this.props.filesLimit} allowed`);
		files.slice(0, Math.max(filesLimit - value.length, 0)).forEach((file) => {
			file.preview = URL.createObjectURL(file);
			file.processing = true;
			if (onAdd) onAdd(file);
			if (onDrop) onDrop(file, callbackOnFile(file, onAdd));
		});
	}
	handleDropRejected(rejectedFiles) {
		let errors = [];

		rejectedFiles.forEach((rejectedFile) => {
			let message = `File ${rejectedFile.name} was rejected. `;
			if (!this.props.acceptedFiles.includes(rejectedFile.type)) {
				message += 'File type not supported. ';
			}
			if (rejectedFile.size > this.props.fileSizeLimit) {
				message += 'File is too big. Size limit is ' + convertBytesToMbsOrKbs(this.props.fileSizeLimit) + '. ';
			}
			errors.push(message);
		});
		this.setState({errors});
	}
	render() {
		const {classes, cs = {}, FormHelperTextProps, error, helperText, value, showPreviews, components: {PreviewsComponent = Previews} = {}} = this.props;
		const {errors = []} = this.state;
		return (
			<Fragment>
				<Dropzone
					accept={this.props.acceptedFiles.join(',')}
					onDrop={this.onDrop.bind(this)}
					onDropRejected={this.handleDropRejected.bind(this)}
					acceptClassName={classes.stripes}
					rejectClassName={classes.rejectStripes}
					maxSize={this.props.maxFileSize}
				>
					{({getRootProps, getInputProps}) => (
						<Fragment>
							<Grid container {...getRootProps()} className={classNames(classes.dropzone, cs.dropzone, classes.helperTextStyle)}>
								<input {...getInputProps()}/>
								<Grid item xs={12}>
									{helperText && <FormHelperText style={{textAlign: 'inherit'}} {...FormHelperTextProps} error={error}>{helperText}</FormHelperText>}
									{errors.map(e => <FormHelperText key={e} style={{textAlign: 'inherit'}} {...FormHelperTextProps} error={true}>{e}</FormHelperText>)}
								</Grid>
								<Grid item xs={12}>
									<CloudUploadIcon className={classes.uploadIconSize}/>
								</Grid>
								<Grid item xs={12}>
									{showPreviews &&
										<PreviewsComponent
											files={value}
											handleDelete={this.props.onDelete}
											showFileNames={this.props.showFileNamesInPreview}
										/>
									}
								</Grid>
							</Grid>
						</Fragment>
					)}
				</Dropzone>
			</Fragment>
		);
	}
}

DropzoneArea.defaultProps = {
	acceptedFiles: ['image/*', 'video/*', 'application/*'],
	filesLimit: 3,
	maxFileSize: 3000000,
	helperText: 'Drag and drop an image file here or click',
	showPreviews: true,
	showFileNamesInPreview: true,
	showAlerts: true,
	clearOnUnmount: true,
};
DropzoneArea.propTypes = {
	acceptedFiles: PropTypes.array,
	filesLimit: PropTypes.number,
	maxFileSize: PropTypes.number,
	helperText: PropTypes.string,
	showPreviews: PropTypes.bool,
	showFileNamesInPreview: PropTypes.bool,
	showAlerts: PropTypes.bool,
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
	handleAdd(file) {
		const {field = {}, form, onChange, value} = this.props;
		let files = value || field.value;
		files = files.find(f => f.name === file.name) ? files.map(f => f.name === file.name ? file : f) : [...files, file];
		if (field) form.setFieldValue(field.name, files, false); // third argument is to skip validate form
		if (onChange) onChange(files);
	}
	postDelete(file) {
		if (file.error) {
			this.handleAdd(file);
			return;
		}
		const {field = {}, form, onChange, value} = this.props;
		let files = value || field.value;
		files = files.filter(f => f.name !== file.name);
		if (field) form.setFieldValue(field.name, files, false); // third argument is to skip validate form
		if (onChange) onChange(files);
	}
	handleDelete(index) {
		const {field = {}, value, handleDelete} = this.props;
		let files = value || field.value;
		const file = new File([files[index]], files[index].name, {type: files[index].type});
		file.processing = true;
		this.handleAdd(file);
		if (handleDelete) handleDelete(file, callbackOnFile(file, this.postDelete));
		else this.postDelete(file);
	}
	handleError(msg) {
		const {field, form, onError} = this.props;
		if (field) {
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
