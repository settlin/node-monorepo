function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import cx from 'classnames';
import Radio from '@material-ui/core/Radio';
import MuiRadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import formikToMuiProps from '../forms/formikToMuiProps';
import { withStyles } from '@material-ui/core/styles';

var styles = function styles() {
  return {
    formControl: {
      'flex-direction': 'row'
    },
    formLabel: {
      display: 'flex',
      'flex-direction': 'row',
      'align-items': 'center',
      'margin-right': '20px'
    }
  };
};

var RadioGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  function RadioGroup(p) {
    var _this;

    _classCallCheck(this, RadioGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioGroup).call(this, p));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      dirty: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      if (_this.props.field) _this.props.field.onChange(event);
      if (_this.props.onChange) _this.props.onChange(event.target.value);
      if (!_this.state.dirty) _this.setState({
        dirty: true
      });
    });

    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(RadioGroup, [{
    key: "handleBlur",
    value: function handleBlur() {
      // take care of touched
      if (this.props.field) this.props.form.setFieldTouched(this.props.field.name, true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          FormControlProps = _this$props.FormControlProps,
          FormLabelProps = _this$props.FormLabelProps,
          FormHelperTextProps = _this$props.FormHelperTextProps,
          FormControlLabelProps = _this$props.FormControlLabelProps,
          RadioProps = _this$props.RadioProps,
          RadioGroupProps = _this$props.RadioGroupProps,
          compact = _this$props.compact,
          classes = _this$props.classes,
          options = _this$props.options,
          props = _objectWithoutProperties(_this$props, ["label", "FormControlProps", "FormLabelProps", "FormHelperTextProps", "FormControlLabelProps", "RadioProps", "RadioGroupProps", "compact", "classes", "options"]);

      var _formikToMuiProps = formikToMuiProps(props),
          error = _formikToMuiProps.error,
          helperText = _formikToMuiProps.helperText,
          fp = _objectWithoutProperties(_formikToMuiProps, ["error", "helperText"]);

      return React.createElement(FormControl, _extends({
        error: error
      }, FormControlProps, {
        classes: _objectSpread({}, (FormControlProps || {}).classes, compact ? {
          root: classes.formControl
        } : {})
      }), label && React.createElement(FormLabel, _extends({}, FormLabelProps, {
        classes: _objectSpread({}, (FormLabelProps || {}).classes, compact ? {
          root: classes.formLabel
        } : {})
      }), label), React.createElement(MuiRadioGroup, _extends({}, RadioGroupProps, {
        row: (RadioGroupProps || {}).row || compact
      }, fp, {
        onChange: this.handleChange,
        onBlur: this.handleBlur
      }), options.map(function (option) {
        return React.createElement(FormControlLabel, _extends({
          key: option.value,
          control: React.createElement(Radio, RadioProps)
        }, FormControlLabelProps, {
          value: option.value,
          label: option.label
        }));
      })), helperText && React.createElement(FormHelperText, _extends({}, FormHelperTextProps, {
        className: cx(_defineProperty({}, classes.rowHelperText, row === 'all'), FormHelperTextProps && FormHelperTextProps.className)
      }), helperText));
    }
  }]);

  return RadioGroup;
}(React.Component);

export default withStyles(styles)(RadioGroup);