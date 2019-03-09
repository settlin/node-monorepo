"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _formik = require("formik");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _default(_ref, type) {
  var _ref$field = _ref.field,
      field = _ref$field === void 0 ? {} : _ref$field,
      _ref$form = _ref.form,
      form = _ref$form === void 0 ? {} : _ref$form,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      error = _ref.error,
      multiple = _ref.multiple,
      checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ["field", "form", "disabled", "error", "multiple", "checked"]);

  var name = field.name,
      onChange = field.onChange;
  var _form$errors = form.errors,
      errors = _form$errors === void 0 ? {} : _form$errors,
      _form$touched = form.touched,
      touched = _form$touched === void 0 ? {} : _form$touched,
      isSubmitting = form.isSubmitting,
      dirty = form.dirty;
  var fErr = (0, _formik.getIn)(errors, name);
  var fieldError = (dirty || (0, _formik.getIn)(touched, name)) && typeof fErr === 'string' ? fErr : null;
  var extraProps = {};

  if (onChange) {
    switch (type || props.type) {
      case 'select':
        multiple && typeof field.value === 'undefined' ? [] : typeof field.value === 'undefined' ? '' : field.value;
        break;

      case 'radio':
        field.value = field.value || '';
        extraProps.checked = checked || (field.value ? 'checked' : '');
        break;

      case 'checkbox':
        field.value = typeof field.value === 'undefined' ? '' : field.value === true ? 'checked' : field.value || '';
        extraProps.checked = typeof checked !== 'undefined' ? checked : field.value ? 'checked' : '';
        break;

      default:
        typeof field.value === 'undefined' ? '' : field.value;
    }
  }

  return _objectSpread({
    disabled: isSubmitting || disabled
  }, props, field, extraProps, {
    error: error || Boolean(fieldError),
    helperText: fieldError || props.helperText
  });
}