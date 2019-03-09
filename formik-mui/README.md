# @settlin/formik-mui

Inspired from
https://github.com/stackworx/formik-material-ui
https://github.com/daixianceng/formik-material-fields

A set of material style fields for [formik](https://github.com/jaredpalmer/formik) using [material-ui](https://github.com/mui-org/material-ui)

This library provides the following components:

- `Input` - a generic input field with all types eg: text, radio, checkbox, buttons (button group), switch, select, hidden, date.... Some extra fields like otp and filter are also available.
- Formik-ed Components from MUI eg `Select` `TextField` `RadioGroup` etc...

## Documentation

- TODO
- Please see the code for now
- All components in formik directory are the actual formik `Field`s which are used by the generic `Input`
- All components in forms directory are wrappers over mui fields, which convert the formik and other props to relevant props using a function called `formikToMuiProps` 

## Installation

Using `npm`:

```
$ npm install --save @settlin/formik-mui
```

## Usage

```js
import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { Input } from '@settlin/formik-mui';

const initialValues = {
  username: '',
};

class MyForm extends Component {
  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.props.onSubmit}
      >
        {({ isValid }) => (
          <Form autoComplete="off">
            <Input
              name="username"
              label="Username"
              margin="normal"
              fullWidth
            />
          </Form>
        )}
      </Formik>
    );
  }
}

```

## License

**@settlin/formik-mui** is released under the MIT License.
