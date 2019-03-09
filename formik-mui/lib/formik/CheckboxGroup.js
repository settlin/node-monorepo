"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Checkbox = _interopRequireDefault(require("../forms/Checkbox"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _formik = require("formik");

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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

var CheckboxGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckboxGroup, _React$Component);

  function CheckboxGroup(p) {
    var _this;

    _classCallCheck(this, CheckboxGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckboxGroup).call(this, p));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CheckboxGroup, [{
    key: "handleChange",
    value: function handleChange(event, v) {
      var _this$props = this.props,
          name = _this$props.name,
          _this$props$value = _this$props.value,
          value = _this$props$value === void 0 ? [] : _this$props$value,
          setFieldValue = _this$props.formik.setFieldValue;
      var target = event.currentTarget;
      var valueArray = _toConsumableArray(value) || [];
      if (target.checked) valueArray.push(v);else valueArray.splice(valueArray.indexOf(v), 1);
      setFieldValue(name, valueArray);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      // take care of touched
      if (this.props.field) this.props.form.setFieldTouched(this.props.field.name, true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          name = _this$props2.name,
          _this$props2$formik = _this$props2.formik,
          errors = _this$props2$formik.errors,
          values = _this$props2$formik.values,
          touched = _this$props2$formik.touched,
          options = _this$props2.options,
          label = _this$props2.label,
          row = _this$props2.row,
          compact = _this$props2.compact,
          FormControlProps = _this$props2.FormControlProps,
          FormLabelProps = _this$props2.FormLabelProps,
          FormHelperTextProps = _this$props2.FormHelperTextProps,
          CheckboxProps = _this$props2.CheckboxProps,
          FormGroupProps = _this$props2.FormGroupProps,
          classes = _this$props2.classes,
          props = _objectWithoutProperties(_this$props2, ["name", "formik", "options", "label", "row", "compact", "FormControlProps", "FormLabelProps", "FormHelperTextProps", "CheckboxProps", "FormGroupProps", "classes"]);

      var value = (0, _formik.getIn)(values, name) || [];
      var error = (0, _formik.getIn)(errors, name);
      var errStr = (0, _formik.getIn)(touched, name) && typeof error === 'string' ? error : null;
      var helperText = errStr || props.helperText;
      return _react.default.createElement(_FormControl.default, _extends({
        error: Boolean(errStr)
      }, FormControlProps, {
        classes: _objectSpread({}, (FormControlProps || {}).classes, compact ? {
          root: classes.formControl
        } : {})
      }), label && _react.default.createElement(_FormLabel.default, _extends({}, FormLabelProps, {
        classes: _objectSpread({}, (FormLabelProps || {}).classes, compact ? {
          root: classes.formLabel
        } : {})
      }), label), _react.default.createElement(_FormGroup.default, _extends({}, FormGroupProps, {
        row: (FormGroupProps || {}).row || compact
      }), options.map(function (option, i) {
        return _react.default.createElement(_formik.Field, _extends({
          key: i,
          name: name
        }, props), function (_ref) {
          var field = _ref.field,
              form = _ref.form;
          return _react.default.createElement(_Checkbox.default, _extends({}, option, CheckboxProps, {
            field: field,
            form: form,
            name: name,
            checked: value.includes(option.value),
            onChange: function onChange() {
              if (value.includes(option.value)) {
                var nextValue = value.filter(function (v) {
                  return v !== option.value;
                });
                form.setFieldValue(name, nextValue);
              } else {
                var _nextValue = value.concat(option.value);

                form.setFieldValue(name, _nextValue);
              }
            }
          }));
        });
      })), helperText && _react.default.createElement(_FormHelperText.default, FormHelperTextProps, helperText));
    }
  }]);

  return CheckboxGroup;
}(_react.default.Component);

var _default = (0, _formik.connect)((0, _styles.withStyles)(styles)(CheckboxGroup));

exports.default = _default;