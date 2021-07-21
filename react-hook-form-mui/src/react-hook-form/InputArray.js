import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '../Input';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import formLabel from '../../../formik-mui/src/styles/formLabel';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import {useFieldArray, useFormContext} from 'react-hook-form';

const useStyles = makeStyles({formLabel});

function Item({prefix, index, remove, commonProps, metaList}) {
	return (
		<>
			{metaList.map(({name, container, ...p}) => <Input key={name} name={`${prefix}${name ? '.' + name : ''}`} {...{...commonProps, ...p, container}}/>)}
			<IconButton aria-label='Delete' onClick={() => remove(index)} size='small' style={{margin: '8px 0'}}>
				<Delete fontSize='small'/>
			</IconButton>
		</>
	);
}

Item.propTypes = {
	index: PropTypes.number.isRequired,
	metaList: PropTypes.array.isRequired,
	remove: PropTypes.func.isRequired,
	commonProps: PropTypes.object,
	prefix: PropTypes.string,
};

// eslint-disable-next-line react/no-multi-comp
function InputArray({name, label, helperText, metaList, FormHelperTextProps = {}, compact = true, FormLabelProps, validate, ...props} = {}) { // eslint-disable-line no-unused-vars
	const classes = useStyles();

	const {control, watch} = useFormContext();
	const {fields: fs, append, remove} = useFieldArray({
		control,
		name,
	});
	const watchFieldArray = watch(name);
	const fields = fs.map((field, index) => {
		return {
			...field,
			...watchFieldArray[index],
		};
	});

	if (!metaList) return null;
	return (
		<>
			{label && (
				<FormLabel
					{...FormLabelProps}
					classes={{...(FormLabelProps || {}).classes, ...(compact ? {root: clsx(classes.formLabel, ((FormLabelProps || {}).classes || {}).root)} : {})}}
				>
					{label}
					{helperText && (
						<FormHelperText
							{...FormHelperTextProps}
							className={FormHelperTextProps.className}
							error={error}
						>
							{helperText}
						</FormHelperText>
					)}
				</FormLabel>
			)}
			{fields.map((field, index) => (
				<Grid container key={field.id} spacing={3}>
					<Item prefix={`${name}.${index}`} {...{...props, metaList, remove, index, control}}/>
				</Grid>
			))}
			<Grid container justify='center' spacing={3}>
				<Button aria-label='Add' onClick={() => append({})} size='small' style={{margin: '8px 0'}}>
					Add Item
				</Button>
			</Grid>
		</>
	);
}

InputArray.propTypes = {
	compact: PropTypes.bool,
	control: PropTypes.object,
	FormHelperTextProps: PropTypes.object,
	FormLabelProps: PropTypes.object,
	helperText: PropTypes.node,
	label: PropTypes.node,
	metaList: PropTypes.array,
	name: PropTypes.string,
	validate: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

export default InputArray;
