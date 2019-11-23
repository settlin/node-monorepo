import React, {Fragment} from 'react';
import {FieldArray, getIn} from 'formik';
import Grid from '@material-ui/core/Grid';
import Input from '../Input';
import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import formLabel from '../styles/formLabel';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({formLabel});

const Item = ({prefix, index, remove, commonProps, metaList}) => {
	return <Fragment>
		{metaList.map(({name, container, ...p}, i) => <Input key={i} name={`${prefix}${name ? '.' + name : ''}`} {...{...commonProps, ...p, container}}/>)}
		{Boolean(index) && <IconButton size='small' aria-label='Delete' style={{margin: '8px 0'}} onClick={() => remove(index)}><Delete fontSize='small'/></IconButton>}
	</Fragment>;
};

const ItemList = ({name, metaList, commonProps, faProps: {remove, push, form}}) => {
	let values = getIn(form.values, name) || [''];
	if (!values.length) values = [''];

	return <div>
		{values.map((v, index) => <Grid key={index} container spacing={3}>
			<Item prefix={`${name}.${index}`} {...{metaList, commonProps, remove, index}}/>
			{(index >= values.length - 1) && Boolean(v) && <IconButton size='small' aria-label='Add' onClick={() => push('')} style={{margin: '8px 0'}}><Add fontSize='small'/></IconButton>}
		</Grid>)}
	</div>;
};

const InputArray = ({name, label, helperText, error, metaList, FormHelperTextProps = {}, compact = true, FormLabelProps, validate, ...props}) => { // eslint-disable-line no-unused-vars
	const classes = useStyles();

	if (!metaList) return null;
	return <FieldArray name={name}
		render={p => <Fragment>
			{label && (
				<FormLabel
					{...FormLabelProps}
					classes={{...(FormLabelProps || {}).classes, ...(compact ? {root: clsx(classes.formLabel, ((FormLabelProps || {}).classes || {}).root)} : {})}}
				>
					{label}
					{helperText && (
						<FormHelperText
							{...FormHelperTextProps}
							error={error}
							className={FormHelperTextProps.className}
						>
							{helperText}
						</FormHelperText>
					)}
				</FormLabel>
			)}
			<ItemList name={name} metaList={metaList} commonProps={{...props}} faProps={p}/>
		</Fragment>}
	/>;
};

export default InputArray;
