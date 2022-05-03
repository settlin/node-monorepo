import PropTypes from 'prop-types';
import React, {Fragment} from 'react';
import Grid from '@mui/material/Grid';
import Input from '../Input';
import Delete from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import formLabel from '../styles/formLabel';
import {makeStyles} from '@mui/styles';
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
	return <>
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
        <Grid container justifyContent='center' spacing={3}>
            <Button aria-label='Add' onClick={() => append({})} size='small' style={{margin: '8px 0'}}>
                Add Item
            </Button>
        </Grid>
    </>;
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
