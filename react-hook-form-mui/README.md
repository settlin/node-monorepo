# @settlin/react-hook-form-mui

v1.x.x - MUI v5
v0.x.x - MUI v4

A set of material style fields for [formik](https://github.com/jaredpalmer/formik) using [material-ui](https://github.com/mui-org/material-ui)

This library provides the following components:

- `Input` - a generic input field with all types eg: text, radio, checkbox, buttons (button group), switch, select, hidden, date.... Some extra fields like filter are also available.
- Formik-ed Components from MUI eg `Select` `TextField` `RadioGroup` etc...

## Documentation

- TODO
- Please see the code for now
- All components in formik directory are the actual formik `Field`s which are used by the generic `Input`
- All components in forms directory are wrappers over mui fields, which convert the formik and other props to relevant props using a hook called `useRMController`

## Installation

Using `npm`:

```bash
npm install --save @settlin/react-hook-form-mui
```

## Usage

```js
import React, { Component } from 'react';
import {useForm} from 'react-hook-form';
import {Input} from '@settlin/react-hook-form-mui';

const defaultValues = {username: 'name'};
const {handleSubmit} = useForm({defaultValues, mode: 'onChange'});


class MyForm extends Component {
  render() {
    return (
      <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
        <Input
          name="username"
          label="Username"
          margin="normal"
          fullWidth
        />
      </form>
    );
  }
}

```

## Exposed Fields

```js
export {default as Input} from './Input';

export {default as ButtonGroup} from './react-hook-form/ButtonGroup';
export {default as Checkbox} from './react-hook-form/Checkbox';
export {default as CheckboxGroup} from './react-hook-form/CheckboxGroup';
export {default as CurrencyField} from './react-hook-form/CurrencyField';
export {default as InputArra} from './react-hook-form/InputArray';
export {default as Persist} from './react-hook-form/Persist';
export {default as Radio} from './react-hook-form/Radio';
export {default as Select} from './react-hook-form/Select';
export {default as Switch} from './react-hook-form/Switch';
export {default as TextField} from './react-hook-form/TextField';
export {useRMController} from './react-hook-form/useRMController';

export {default as Button} from './forms/Button';

export {default as currencify} from './utils/currencify';
export {default as validateDob} from './utils/validate/dob';
export {default as validateEmail} from './utils/validate/email';
export {default as validateMobile} from './utils/validate/mobile';
```

## License

**@settlin/react-hook-form-mui** is released under the MIT License.
