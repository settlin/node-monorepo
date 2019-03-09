"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _TextField = _interopRequireDefault(require("./TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Select = function Select(_ref) {
  var options = _ref.options,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      _ref$native = _ref.native,
      native = _ref$native === void 0 ? false : _ref$native,
      InputLabelProps = _ref.InputLabelProps,
      SelectProps = _ref.SelectProps,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["options", "multiple", "native", "InputLabelProps", "SelectProps", "children"]);

  var isNative = !multiple && native;
  return _react.default.createElement(_TextField.default, _extends({}, props, {
    InputLabelProps: _objectSpread({}, isNative === true ? {
      shrink: true
    } : {}, InputLabelProps),
    SelectProps: _objectSpread({}, SelectProps, {
      multiple: multiple,
      native: isNative
    }),
    select: true
  }), isNative ? options.map(function (option, i) {
    return _react.default.createElement("option", {
      key: i,
      value: option.value
    }, option.label);
  }) : options.map(function (option, i) {
    return _react.default.createElement(_MenuItem.default, {
      key: i,
      value: option.value
    }, option.label);
  }));
};

Select.displayName = 'FormikMaterialUISelect';
var _default = Select;
exports.default = _default;