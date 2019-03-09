function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import validateEmail from './utils/validate/email';
import validateMobile from './utils/validate/mobile';
import validateDob from './utils/validate/dob';

var Input = function Input(_ref) {
  var typeOrig = _ref.type,
      container = _ref.container,
      required = _ref.required,
      validateOrig = _ref.validate,
      _ref$label = _ref.label,
      labelOrig = _ref$label === void 0 ? '' : _ref$label,
      mui = _ref.mui,
      rest = _objectWithoutProperties(_ref, ["type", "container", "required", "validate", "label", "mui"]);

  var Grid = container ? require('@material-ui/core/Grid').default : function (_ref2) {
    var children = _ref2.children;
    return children;
  };

  var label = labelOrig,
      type,
      validateFunc = function validateFunc() {},
      validateReq = function validateReq() {},
      Field;

  if (typeof validateOrig === 'function') validateFunc = validateOrig; // original validate function
  else if (validateOrig) {
      switch (typeOrig) {
        case 'aadhar':
          validateFunc = function validateFunc(v) {
            return !/^\d{4}\s\d{4}\s\d{4}$/.test(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid Aadhar Number');
          };

          break;

        case 'dob':
          validateFunc = function validateFunc(v) {
            return !validateDob(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid DOB Age Limit (18 to 57)');
          };

          break;

        case 'pincode':
          validateFunc = function validateFunc(v) {
            return !/^[1-9][0-9]{5}$/.test(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid Pincode');
          };

          break;

        case 'pan':
          validateFunc = function validateFunc(v) {
            return !/[A-Za-z]{5}\d{4}[A-Za-z]{1}/.test(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid PAN Number');
          };

          break;

        case 'inr':
          validateFunc = function validateFunc(v) {
            return !/^\d*$/.test(v) && (typeof validateOrig === 'string' ? validateOrig : 'Invalid Amount');
          };

          break;

        case 'mobile':
        case 'otp':
          validateFunc = function validateFunc(v) {
            return validateMobile(v, typeof validateOrig === 'string' ? validateOrig : 'Invalid Indian Mobile');
          };

          break;

        case 'email':
          validateFunc = function validateFunc(v) {
            return validateEmail(v, typeof validateOrig === 'string' ? validateOrig : 'Invalid Email');
          };

          break;
      }
    }

  if (required) {
    validateReq = function validateReq(v) {
      return typeof v === 'undefined' && (typeof required === 'string' ? required : 'Required');
    };

    label += ' *';
  }

  switch (typeOrig) {
    case 'array':
      Field = require('./formik/InputArray').default;
      break;

    case 'buttons':
      type = 'buttons';
      Field = require('./formik/ButtonGroup').default;
      break;

    case 'checkbox':
      type = 'checkbox';
      Field = rest.options ? require('./formik/CheckboxGroup').default : require('./formik/Checkbox').default;
      break;

    case 'inr':
      type = 'number';
      Field = require('./formik/CurrencyField').default;
      break;

    case 'mobile':
      type = 'number';
      Field = require('./formik/TextField').default;
      break;

    case 'otp':
      Field = require('./formik/OtpField').default;
      break;

    case 'pincode':
      type = 'number';
      Field = require('./formik/TextField').default;
      break;

    case 'radio':
      type = 'radio';
      Field = require('./formik/Radio').default;
      break;

    case 'select':
      Field = mui ? require('./formik/Select').default : require('./formik/FilterField').default;
      break;

    case 'switch':
      type = 'checkbox';
      Field = require('./formik/Switch').default;
      break;

    default:
      type = typeOrig || 'text';
      Field = require('./formik/TextField').default;
      break;
  }

  var validate = function validate(v) {
    return validateReq(v) || validateFunc(v);
  };

  return React.createElement(Grid, _extends({
    item: true
  }, container), React.createElement(Field, _extends({
    validate: validate,
    label: label,
    type: type,
    compact: true
  }, rest)));
};

export default Input;