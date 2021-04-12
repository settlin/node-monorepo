import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

// import TinyMCE from './formik/TinyMCE';
// import Otp from './formik/Otp';
// import Form from './formik/Form';
// import ChipSelect from './formik/ChipSelect';
// import Flatpickr from './formik/Flatpickr';
// import Radio from './formik/Radio';
// import Checkbox from './formik/Checkbox';
// import Button from './formik/Button';
import Fields from './react-hook-form/Fields';

// import Form2 from './form/Form';

storiesOf('React Hook Form with MUI', module)
	.add('Fields', () => <Fields onSubmit={action('clicked')}/>);

// storiesOf('Form', module)
// 	.add('Fields', () => <Form2 onChange={action('clicked')}/>);
