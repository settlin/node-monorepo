"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _formikToMuiProps2 = _interopRequireDefault(require("../forms/formikToMuiProps"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Radio =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Radio, _React$PureComponent);

  function Radio(p) {
    var _this;

    _classCallCheck(this, Radio);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Radio).call(this, p));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Radio, [{
    key: "handleChange",
    value: function handleChange(event) {
      if (this.props.field) this.props.field.onChange(event);
      if (this.props.onChange) this.props.onChange(event);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      if (this.props.field) this.props.field.onBlur(event);
      if (this.props.onBlur) this.props.onBlur(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          row = _this$props.row,
          _this$props$classes = _this$props.classes,
          classes = _this$props$classes === void 0 ? {} : _this$props$classes,
          _this$props$value = _this$props.value,
          value = _this$props$value === void 0 ? 'on' : _this$props$value,
          FormControlProps = _this$props.FormControlProps,
          FormHelperTextProps = _this$props.FormHelperTextProps,
          FormControlLabelProps = _this$props.FormControlLabelProps,
          props = _objectWithoutProperties(_this$props, ["label", "row", "classes", "value", "FormControlProps", "FormHelperTextProps", "FormControlLabelProps"]);

      var _formikToMuiProps = (0, _formikToMuiProps2.default)(props),
          error = _formikToMuiProps.error,
          helperText = _formikToMuiProps.helperText,
          fp = _objectWithoutProperties(_formikToMuiProps, ["error", "helperText"]);

      return _react.default.createElement(_FormControl.default, _extends({
        component: "fieldset",
        error: error
      }, FormControlProps, {
        className: (0, _classnames.default)(_defineProperty({}, classes.rowLabel, row === 'all'), FormControlProps && FormControlProps.className)
      }), _react.default.createElement(_FormControlLabel.default, _extends({
        label: label,
        className: (0, _classnames.default)(_defineProperty({}, classes.rowLabel, row === 'all'), FormControlLabelProps && FormControlLabelProps.className)
      }, FormControlLabelProps, {
        control: _react.default.createElement(_Radio.default, _extends({}, fp, {
          value: value,
          onChange: this.handleChange,
          onBlur: this.handleBlur
        }))
      })), (error || helperText) && _react.default.createElement(_FormHelperText.default, _extends({}, FormHelperTextProps, {
        className: (0, _classnames.default)(_defineProperty({}, classes.rowHelperText, row === 'all'), FormHelperTextProps && FormHelperTextProps.className)
      }), helperText));
    }
  }]);

  return Radio;
}(_react.default.PureComponent);

Radio.displayName = 'FormikMaterialUIRadio';
var _default = Radio;
exports.default = _default;