function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import classNames from 'classnames';
import ReactSelect, { components as comps } from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';

var styles = function styles(theme) {
  return {
    root: {
      paddingTop: theme.spacing.unit,
      fontSize: 'inherit',
      width: '100%'
    },
    input: {
      display: 'flex',
      padding: 0
    },
    valueContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center',
      overflow: 'hidden',
      fontSize: 'inherit'
    },
    chip: {
      margin: "".concat(theme.spacing.unit / 2, "px ").concat(theme.spacing.unit / 4, "px")
    },
    chipFocused: {
      backgroundColor: emphasize(theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700], 0.08)
    },
    noOptionsMessage: {
      padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 2, "px")
    },
    singleValue: {
      fontSize: 'inherit'
    },
    placeholder: {
      position: 'absolute',
      left: 2,
      fontSize: 'inherit'
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0
    },
    divider: {
      height: theme.spacing.unit * 2
    }
  };
};

function NoOptionsMessage(props) {
  return React.createElement(Typography, _extends({
    color: "textSecondary",
    className: props.selectProps.classes.noOptionsMessage
  }, props.innerProps), props.children);
}

function inputComponent(_ref) {
  var inputRef = _ref.inputRef,
      props = _objectWithoutProperties(_ref, ["inputRef"]);

  return React.createElement("div", _extends({
    ref: inputRef
  }, props));
}

function Control(props) {
  return React.createElement(TextField, _extends({
    fullWidth: true,
    InputProps: {
      inputComponent: inputComponent,
      inputProps: _objectSpread({
        className: props.selectProps.classes.input,
        inputRef: props.innerRef,
        children: props.children
      }, props.innerProps)
    },
    InputLabelProps: {
      shrink: props.isFocused || props.hasValue
    }
  }, props.selectProps.TextFieldProps));
}

var Input = function Input(props) {
  return React.createElement(comps.Input, _extends({}, props, {
    autoComplete: "none"
  }));
};

function Option(props) {
  return React.createElement(MenuItem, _extends({
    buttonRef: props.innerRef,
    selected: props.isFocused,
    component: "div",
    style: {
      fontWeight: props.isSelected ? 500 : 400
    }
  }, props.innerProps), props.children);
}

function Placeholder(props) {
  return React.createElement(Typography, _extends({
    color: "textSecondary",
    className: props.selectProps.classes.placeholder
  }, props.innerProps), props.children);
}

function SingleValue(props) {
  return React.createElement(Typography, _extends({
    className: props.selectProps.classes.singleValue
  }, props.innerProps), props.children);
}

function ValueContainer(props) {
  return React.createElement("div", {
    className: props.selectProps.classes.valueContainer
  }, props.children);
}

function MultiValue(props) {
  return React.createElement(Chip, {
    tabIndex: -1,
    label: props.children,
    className: classNames(props.selectProps.classes.chip, _defineProperty({}, props.selectProps.classes.chipFocused, props.isFocused)),
    onDelete: props.removeProps.onClick,
    deleteIcon: React.createElement(CancelIcon, props.removeProps)
  });
}

function Menu(props) {
  return React.createElement(Paper, _extends({
    square: true,
    className: props.selectProps.classes.paper
  }, props.innerProps), props.children);
}

var components = {
  Control: Control,
  Input: Input,
  Menu: Menu,
  MultiValue: MultiValue,
  NoOptionsMessage: NoOptionsMessage,
  Option: Option,
  Placeholder: Placeholder,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};

var Select =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Select, _React$PureComponent);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, _getPrototypeOf(Select).apply(this, arguments));
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          _this$props$field = _this$props.field;
      _this$props$field = _this$props$field === void 0 ? {} : _this$props$field;
      var name = _this$props$field.name,
          _this$props$form = _this$props.form;
      _this$props$form = _this$props$form === void 0 ? {} : _this$props$form;
      var setFieldValue = _this$props$form.setFieldValue,
          defaultValue = _this$props.defaultValue;
      if (defaultValue) setFieldValue(name, defaultValue);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          theme = _this$props2.theme,
          label = _this$props2.label,
          _this$props2$options = _this$props2.options,
          options = _this$props2$options === void 0 ? [] : _this$props2$options,
          optionsAsync = _this$props2.optionsAsync,
          _this$props2$placehol = _this$props2.placeholder,
          placeholder = _this$props2$placehol === void 0 ? '' : _this$props2$placehol,
          _this$props2$field = _this$props2.field;
      _this$props2$field = _this$props2$field === void 0 ? {} : _this$props2$field;
      var value = _this$props2$field.value,
          name = _this$props2$field.name,
          _this$props2$form = _this$props2.form;
      _this$props2$form = _this$props2$form === void 0 ? {} : _this$props2$form;

      var touched = _this$props2$form.touched,
          errors = _this$props2$form.errors,
          setFieldValue = _this$props2$form.setFieldValue,
          setFieldTouched = _this$props2$form.setFieldTouched,
          helperText = _this$props2.helperText,
          defaultValue = _this$props2.defaultValue,
          creatable = _this$props2.creatable,
          _this$props2$valueWit = _this$props2.valueWithLabel,
          valueWithLabel = _this$props2$valueWit === void 0 ? Boolean(optionsAsync) : _this$props2$valueWit,
          compact = _this$props2.compact,
          props = _objectWithoutProperties(_this$props2, ["classes", "theme", "label", "options", "optionsAsync", "placeholder", "field", "form", "helperText", "defaultValue", "creatable", "valueWithLabel", "compact"]);

      var message = touched && touched[name] && errors[name];
      var selectStyles = {
        input: function input(base) {
          return _objectSpread({}, base, {
            color: theme.palette.text.primary,
            '& input': {
              font: 'inherit'
            }
          });
        },
        dropdownIndicator: function dropdownIndicator(base) {
          return _objectSpread({}, base, {
            padding: '6.5px'
          });
        }
      };
      var TextFieldProps = {
        label: label,
        placeholder: placeholder,
        error: Boolean(message),
        helperText: message || helperText
      };

      var commonProps = _objectSpread({}, props, {
        classes: classes,
        placeholder: placeholder,
        autocomplete: 'off',
        styles: selectStyles,
        components: components,
        TextFieldProps: TextFieldProps,
        name: name
      }, defaultValue ? {
        defaultValue: valueWithLabel ? defaultValue : options.find(function (o) {
          return o.value == defaultValue.value;
        })
      } : {}, value ? {
        value: valueWithLabel ? value : options.find(function (o) {
          return o.value == value;
        })
      } : {}, {
        // eslint-disable-line eqeqeq
        // ...(value ? {value: options.find(o => o.value == value)} : {}), // eslint-disable-line eqeqeq
        onChange: function onChange(v) {
          setFieldValue(name, valueWithLabel ? v : v.value);
        },
        onBlur: function onBlur() {
          setFieldTouched(name);
        }
      });

      if (optionsAsync) {
        var _ref2 = creatable ? require('react-select/lib/AsyncCreatable') : require('react-select/lib/Async'),
            AsyncSelect = _ref2.default;

        return React.createElement(AsyncSelect, _extends({
          loadOptions: optionsAsync,
          cacheOptions: true,
          defaultOptions: true
        }, commonProps));
      }

      var SyncSelect = creatable ? require('react-select/lib/Creatable').default : ReactSelect;
      return React.createElement(SyncSelect, _extends({
        options: options || []
      }, commonProps));
    }
  }]);

  return Select;
}(React.PureComponent);

export default withStyles(styles, {
  withTheme: true
})(Select);