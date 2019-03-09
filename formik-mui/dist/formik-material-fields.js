(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@material-ui/lab/ToggleButton'), require('@material-ui/lab/ToggleButtonGroup'), require('@material-ui/core/FormControl'), require('@material-ui/core/FormHelperText'), require('@material-ui/core/FormLabel'), require('formik'), require('@material-ui/core/styles'), require('@material-ui/core/Checkbox'), require('@material-ui/core/FormControlLabel'), require('@material-ui/core/FormGroup'), require('@material-ui/core/TextField'), require('@material-ui/core/InputAdornment'), require('react-select'), require('@material-ui/core/Typography'), require('@material-ui/core/Paper'), require('@material-ui/core/Chip'), require('@material-ui/core/MenuItem'), require('@material-ui/icons/Cancel'), require('@material-ui/core/styles/colorManipulator'), require('@material-ui/core/CircularProgress'), require('@material-ui/core/colors/green'), require('@material-ui/core/Button'), require('@material-ui/core/Fab'), require('@material-ui/icons/Check'), require('@material-ui/icons/Save'), require('@material-ui/icons/Clear'), require('@material-ui/core/Grid'), require('@material-ui/core/IconButton'), require('@material-ui/core/Icon'), require('@material-ui/icons/DoneAll'), require('react-fast-compare'), require('@material-ui/core/Radio'), require('@material-ui/core/RadioGroup'), require('@material-ui/core/Switch')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@material-ui/lab/ToggleButton', '@material-ui/lab/ToggleButtonGroup', '@material-ui/core/FormControl', '@material-ui/core/FormHelperText', '@material-ui/core/FormLabel', 'formik', '@material-ui/core/styles', '@material-ui/core/Checkbox', '@material-ui/core/FormControlLabel', '@material-ui/core/FormGroup', '@material-ui/core/TextField', '@material-ui/core/InputAdornment', 'react-select', '@material-ui/core/Typography', '@material-ui/core/Paper', '@material-ui/core/Chip', '@material-ui/core/MenuItem', '@material-ui/icons/Cancel', '@material-ui/core/styles/colorManipulator', '@material-ui/core/CircularProgress', '@material-ui/core/colors/green', '@material-ui/core/Button', '@material-ui/core/Fab', '@material-ui/icons/Check', '@material-ui/icons/Save', '@material-ui/icons/Clear', '@material-ui/core/Grid', '@material-ui/core/IconButton', '@material-ui/core/Icon', '@material-ui/icons/DoneAll', 'react-fast-compare', '@material-ui/core/Radio', '@material-ui/core/RadioGroup', '@material-ui/core/Switch'], factory) :
  (global = global || self, factory(global.FormikMaterialFields = {}, global.React, global.ToggleButton, global.MuiToggleButtonGroup, global.FormControl, global.FormHelperText, global.FormLabel, global.formik, global.styles$7, global.MuiCheckbox, global.FormControlLabel, global.FormGroup, global.MuiTextField, global.InputAdornment, global.ReactSelect, global.Typography, global.Paper, global.Chip, global.MenuItem, global.CancelIcon, global.colorManipulator, global.CircularProgress, global.green, global.Button, global.Fab, global.CheckIcon, global.SaveIcon, global.Clear, global.Grid, global.IconButton, global.Icon, global.DoneAll, global.isEqual, global.MuiRadio, global.MuiRadioGroup, global.MuiSwitch));
}(this, function (exports, React, ToggleButton, MuiToggleButtonGroup, FormControl, FormHelperText, FormLabel, formik, styles$7, MuiCheckbox, FormControlLabel, FormGroup, MuiTextField, InputAdornment, ReactSelect, Typography, Paper, Chip, MenuItem, CancelIcon, colorManipulator, CircularProgress, green, Button, Fab, CheckIcon, SaveIcon, Clear, Grid, IconButton, Icon, DoneAll, isEqual, MuiRadio, MuiRadioGroup, MuiSwitch) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ToggleButton = ToggleButton && ToggleButton.hasOwnProperty('default') ? ToggleButton['default'] : ToggleButton;
  MuiToggleButtonGroup = MuiToggleButtonGroup && MuiToggleButtonGroup.hasOwnProperty('default') ? MuiToggleButtonGroup['default'] : MuiToggleButtonGroup;
  FormControl = FormControl && FormControl.hasOwnProperty('default') ? FormControl['default'] : FormControl;
  FormHelperText = FormHelperText && FormHelperText.hasOwnProperty('default') ? FormHelperText['default'] : FormHelperText;
  FormLabel = FormLabel && FormLabel.hasOwnProperty('default') ? FormLabel['default'] : FormLabel;
  MuiCheckbox = MuiCheckbox && MuiCheckbox.hasOwnProperty('default') ? MuiCheckbox['default'] : MuiCheckbox;
  FormControlLabel = FormControlLabel && FormControlLabel.hasOwnProperty('default') ? FormControlLabel['default'] : FormControlLabel;
  FormGroup = FormGroup && FormGroup.hasOwnProperty('default') ? FormGroup['default'] : FormGroup;
  MuiTextField = MuiTextField && MuiTextField.hasOwnProperty('default') ? MuiTextField['default'] : MuiTextField;
  InputAdornment = InputAdornment && InputAdornment.hasOwnProperty('default') ? InputAdornment['default'] : InputAdornment;
  var ReactSelect__default = 'default' in ReactSelect ? ReactSelect['default'] : ReactSelect;
  Typography = Typography && Typography.hasOwnProperty('default') ? Typography['default'] : Typography;
  Paper = Paper && Paper.hasOwnProperty('default') ? Paper['default'] : Paper;
  Chip = Chip && Chip.hasOwnProperty('default') ? Chip['default'] : Chip;
  MenuItem = MenuItem && MenuItem.hasOwnProperty('default') ? MenuItem['default'] : MenuItem;
  CancelIcon = CancelIcon && CancelIcon.hasOwnProperty('default') ? CancelIcon['default'] : CancelIcon;
  CircularProgress = CircularProgress && CircularProgress.hasOwnProperty('default') ? CircularProgress['default'] : CircularProgress;
  green = green && green.hasOwnProperty('default') ? green['default'] : green;
  Button = Button && Button.hasOwnProperty('default') ? Button['default'] : Button;
  Fab = Fab && Fab.hasOwnProperty('default') ? Fab['default'] : Fab;
  CheckIcon = CheckIcon && CheckIcon.hasOwnProperty('default') ? CheckIcon['default'] : CheckIcon;
  SaveIcon = SaveIcon && SaveIcon.hasOwnProperty('default') ? SaveIcon['default'] : SaveIcon;
  Clear = Clear && Clear.hasOwnProperty('default') ? Clear['default'] : Clear;
  Grid = Grid && Grid.hasOwnProperty('default') ? Grid['default'] : Grid;
  IconButton = IconButton && IconButton.hasOwnProperty('default') ? IconButton['default'] : IconButton;
  Icon = Icon && Icon.hasOwnProperty('default') ? Icon['default'] : Icon;
  DoneAll = DoneAll && DoneAll.hasOwnProperty('default') ? DoneAll['default'] : DoneAll;
  isEqual = isEqual && isEqual.hasOwnProperty('default') ? isEqual['default'] : isEqual;
  MuiRadio = MuiRadio && MuiRadio.hasOwnProperty('default') ? MuiRadio['default'] : MuiRadio;
  MuiRadioGroup = MuiRadioGroup && MuiRadioGroup.hasOwnProperty('default') ? MuiRadioGroup['default'] : MuiRadioGroup;
  MuiSwitch = MuiSwitch && MuiSwitch.hasOwnProperty('default') ? MuiSwitch['default'] : MuiSwitch;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames () {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg) && arg.length) {
  				var inner = classNames.apply(null, arg);
  				if (inner) {
  					classes.push(inner);
  				}
  			} else if (argType === 'object') {
  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes.push(key);
  					}
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if (module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  function formikToMuiProps (_ref, type) {
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
    var fErr = formik.getIn(errors, name);
    var fieldError = (dirty || formik.getIn(touched, name)) && typeof fErr === 'string' ? fErr : null;
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

  var ToggleButtonGroup =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ToggleButtonGroup, _React$Component);

    function ToggleButtonGroup(p) {
      var _this;

      _classCallCheck(this, ToggleButtonGroup);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ToggleButtonGroup).call(this, p));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        dirty: false
      });

      _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(ToggleButtonGroup, [{
      key: "handleChange",
      value: function handleChange(event, value) {
        if (this.props.field) this.props.form.setFieldValue(this.props.field.name, value);
        if (this.props.onChange) this.props.onChange(event.target.value);
        if (!this.state.dirty) this.setState({
          dirty: true
        });
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
        var _this$props = this.props,
            label = _this$props.label,
            FormControlProps = _this$props.FormControlProps,
            FormLabelProps = _this$props.FormLabelProps,
            FormHelperTextProps = _this$props.FormHelperTextProps,
            ToggleButtonProps = _this$props.ToggleButtonProps,
            ToggleButtonGroupProps = _this$props.ToggleButtonGroupProps,
            compact = _this$props.compact,
            classes = _this$props.classes,
            options = _this$props.options,
            _this$props$exclusive = _this$props.exclusive,
            exclusive = _this$props$exclusive === void 0 ? true : _this$props$exclusive,
            props = _objectWithoutProperties(_this$props, ["label", "FormControlProps", "FormLabelProps", "FormHelperTextProps", "ToggleButtonProps", "ToggleButtonGroupProps", "compact", "classes", "options", "exclusive"]);

        var _formikToMuiProps = formikToMuiProps(props),
            error = _formikToMuiProps.error,
            helperText = _formikToMuiProps.helperText,
            fp = _objectWithoutProperties(_formikToMuiProps, ["error", "helperText"]);

        return React__default.createElement(FormControl, _extends({
          error: error
        }, FormControlProps, {
          classes: _objectSpread({}, (FormControlProps || {}).classes, compact ? {
            root: classes.formControl
          } : {})
        }), label && React__default.createElement(FormLabel, _extends({}, FormLabelProps, {
          classes: _objectSpread({}, (FormLabelProps || {}).classes, compact ? {
            root: classes.formLabel
          } : {})
        }), label), React__default.createElement(MuiToggleButtonGroup, _extends({}, ToggleButtonGroupProps, fp, _defineProperty({
          exclusive: exclusive,
          onChange: this.handleChange
        }, "onChange", this.handleBlur)), options.map(function (option) {
          return React__default.createElement(ToggleButton, _extends({
            key: option.value
          }, ToggleButtonProps, {
            value: option.value
          }), option.label);
        })), helperText && React__default.createElement(FormHelperText, _extends({}, FormHelperTextProps, {
          className: classnames(_defineProperty({}, classes.rowHelperText, row === 'all'), FormHelperTextProps && FormHelperTextProps.className)
        }), helperText));
      }
    }]);

    return ToggleButtonGroup;
  }(React__default.Component);

  var ButtonGroup = styles$7.withStyles(styles)(ToggleButtonGroup);

  var FormikRadio = function FormikRadio(_ref) {
    var children = _ref.children,
        render = _ref.render,
        _ref$fast = _ref.fast,
        fast = _ref$fast === void 0 ? true : _ref$fast,
        type = _ref.type,
        buttons = _ref.buttons,
        props = _objectWithoutProperties(_ref, ["children", "render", "fast", "type", "buttons"]);

    // eslint-disable-line no-unused-vars
    var Field = require('formik')[fast ? 'FastField' : 'Field'];

    return React__default.createElement(Field, _extends({}, props, {
      component: ButtonGroup
    }), children);
  };

  var Checkbox =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(Checkbox, _React$PureComponent);

    function Checkbox(p) {
      var _this;

      _classCallCheck(this, Checkbox);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, p));
      _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(Checkbox, [{
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
            compact = _this$props.compact,
            FormControlProps = _this$props.FormControlProps,
            FormHelperTextProps = _this$props.FormHelperTextProps,
            FormControlLabelProps = _this$props.FormControlLabelProps,
            props = _objectWithoutProperties(_this$props, ["label", "compact", "FormControlProps", "FormHelperTextProps", "FormControlLabelProps"]);

        var _formikToMuiProps = formikToMuiProps(props),
            error = _formikToMuiProps.error,
            helperText = _formikToMuiProps.helperText,
            fp = _objectWithoutProperties(_formikToMuiProps, ["error", "helperText"]);

        return React__default.createElement(FormControl, _extends({
          component: "fieldset",
          error: error
        }, FormControlProps), React__default.createElement(FormControlLabel, _extends({
          label: label
        }, FormControlLabelProps, {
          control: React__default.createElement(MuiCheckbox, _extends({}, fp, {
            onChange: this.handleChange,
            onBlur: this.handleBlur
          }))
        })), (error || helperText) && React__default.createElement(FormHelperText, FormHelperTextProps, helperText));
      }
    }]);

    return Checkbox;
  }(React__default.PureComponent);

  Checkbox.displayName = 'FormikMaterialUICheckbox';

  var FormikCheckbox = function FormikCheckbox(_ref) {
    var children = _ref.children,
        render = _ref.render,
        _ref$fast = _ref.fast,
        fast = _ref$fast === void 0 ? true : _ref$fast,
        type = _ref.type,
        props = _objectWithoutProperties(_ref, ["children", "render", "fast", "type"]);

    // eslint-disable-line no-unused-vars
    var Field = require('formik')[fast ? 'FastField' : 'Field'];

    return React__default.createElement(Field, _extends({}, props, type === 'checkbox' ? {} : {
      type: type
    }, type === 'hidden' ? {} : {
      component: Checkbox
    }), children);
  };

  var styles$1 = function styles() {
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

        var value = formik.getIn(values, name) || [];
        var error = formik.getIn(errors, name);
        var errStr = formik.getIn(touched, name) && typeof error === 'string' ? error : null;
        var helperText = errStr || props.helperText;
        return React__default.createElement(FormControl, _extends({
          error: Boolean(errStr)
        }, FormControlProps, {
          classes: _objectSpread({}, (FormControlProps || {}).classes, compact ? {
            root: classes.formControl
          } : {})
        }), label && React__default.createElement(FormLabel, _extends({}, FormLabelProps, {
          classes: _objectSpread({}, (FormLabelProps || {}).classes, compact ? {
            root: classes.formLabel
          } : {})
        }), label), React__default.createElement(FormGroup, _extends({}, FormGroupProps, {
          row: (FormGroupProps || {}).row || compact
        }), options.map(function (option, i) {
          return React__default.createElement(formik.Field, _extends({
            key: i,
            name: name
          }, props), function (_ref) {
            var field = _ref.field,
                form = _ref.form;
            return React__default.createElement(Checkbox, _extends({}, option, CheckboxProps, {
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
        })), helperText && React__default.createElement(FormHelperText, FormHelperTextProps, helperText));
      }
    }]);

    return CheckboxGroup;
  }(React__default.Component);

  var CheckboxGroup$1 = formik.connect(styles$7.withStyles(styles$1)(CheckboxGroup));

  var TextField =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(TextField, _React$PureComponent);

    function TextField(p) {
      var _this;

      _classCallCheck(this, TextField);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TextField).call(this, p));
      _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(TextField, [{
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
            children = _this$props.children,
            _this$props$fullWidth = _this$props.fullWidth,
            fullWidth = _this$props$fullWidth === void 0 ? true : _this$props$fullWidth,
            compact = _this$props.compact,
            InputProps = _this$props.InputProps,
            label = _this$props.label,
            props = _objectWithoutProperties(_this$props, ["children", "fullWidth", "compact", "InputProps", "label"]);

        if (compact) {
          InputProps = _objectSpread({}, InputProps, {
            startAdornment: React__default.createElement(InputAdornment, {
              style: {
                whiteSpace: 'nowrap'
              },
              position: "start"
            }, label)
          });
          label = '';
        }

        InputProps = _objectSpread({}, InputProps, {
          classes: {
            input: 'mui'
          }
        });
        var fp = formikToMuiProps(props);
        return React__default.createElement(MuiTextField, _extends({}, fp, {
          children: children,
          fullWidth: fullWidth,
          InputProps: InputProps,
          label: label
        }, {
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          InputLabelProps: fp.type === 'date' ? {
            shrink: true
          } : {}
        }));
      }
    }]);

    return TextField;
  }(React__default.PureComponent);

  TextField.displayName = 'FormikMaterialUITextField';

  var pi = function pi(x) {
    return parseInt(x, 10);
  };

  function currencify (_ref) {
    var amount = _ref.amount,
        abbreviated = _ref.abbreviated,
        short = _ref.short,
        numberWithCommas = _ref.numberWithCommas,
        fullWords = _ref.fullWords,
        _ref$roundOff = _ref.roundOff,
        roundOff = _ref$roundOff === void 0 ? true : _ref$roundOff;
    if (!amount) return 0;

    if (abbreviated || short) {
      amount = pi(amount);
      var roundOffAmt = Math.round(amount / 100000);

      if (roundOffAmt >= 100) {
        var tmp = roundOffAmt / 100;
        if (short) return tmp + 'C';
        return tmp + (tmp > 1 ? ' Crores' : ' Crore');
      }

      if (short) return roundOffAmt + 'L';
      return roundOffAmt + ' Lakhs';
    }

    if (numberWithCommas) return amount.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    });
    if ((amount = amount.toString()).length > 9) return 'overflow';

    if (fullWords) {
      var a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
      var b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

      var inWords = function inWords(num) {
        //valid upto 9 digits
        if ((num = num.toString()).length > 9) return 'overflow';
        var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return '';
        var str = '';
        str += pi(n[1]) !== 0 ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
        str += pi(n[2]) !== 0 ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
        str += pi(n[3]) !== 0 ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
        str += pi(n[4]) !== 0 ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
        str += pi(n[5]) !== 0 ? (str !== '' ? 'And ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'Only ' : 'Only';
        return str;
      };

      return inWords(amount);
    }

    var n = ('000000000' + amount).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    var str = '';
    if (!n) return str;
    str += pi(n[1]) !== 0 ? (n[1] < 10 ? n[1][1] : n[1][0] + n[1][1]) + ' Crore' + (n[1][1] > 1 ? 's' : '') + ' ' : '';
    str += pi(n[2]) !== 0 ? (n[2] < 10 ? n[2][1] : n[2][0] + n[2][1]) + ' Lakh' + (n[2][1] > 1 ? 's' : '') + ' ' : '';

    if (!roundOff) {
      str += pi(n[3]) !== 0 ? (n[3] < 10 ? n[3][1] : n[3][0] + n[3][1]) + ' Thousand' + (n[3][1] > 1 ? 's' : '') + ' ' : '';
      str += pi(n[4]) !== 0 ? n[4] + ' Hundred' + (n[4][1] > 1 ? 's' : '') + ' ' : '';
      str += pi(n[5]) !== 0 ? n[5] < 10 ? n[5][1] : n[5][0] + n[5][1] : '';
    }

    return str;
  }

  var CurrencyField =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(CurrencyField, _React$PureComponent);

    function CurrencyField() {
      _classCallCheck(this, CurrencyField);

      return _possibleConstructorReturn(this, _getPrototypeOf(CurrencyField).apply(this, arguments));
    }

    _createClass(CurrencyField, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            InputProps = _this$props.InputProps,
            props = _objectWithoutProperties(_this$props, ["InputProps"]);

        return React__default.createElement(TextField, _extends({}, props, {
          helperText: currencify({
            amount: props.value || (props.field || {}).value
          }) || '',
          InputProps: _objectSpread({
            startAdornment: React__default.createElement(InputAdornment, {
              position: "start"
            }, "\u20B9")
          }, InputProps)
        }));
      }
    }]);

    return CurrencyField;
  }(React__default.PureComponent);

  var FormikCurrencyField = function FormikCurrencyField(_ref) {
    var render = _ref.render,
        fast = _ref.fast,
        props = _objectWithoutProperties(_ref, ["render", "fast"]);

    // eslint-disable-line no-unused-vars
    var Field = require('formik')[fast ? 'FastField' : 'Field'];

    return React__default.createElement(Field, _extends({}, props, {
      component: CurrencyField
    }));
  };

  var styles$2 = function styles(theme) {
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
        backgroundColor: colorManipulator.emphasize(theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700], 0.08)
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
    return React__default.createElement(Typography, _extends({
      color: "textSecondary",
      className: props.selectProps.classes.noOptionsMessage
    }, props.innerProps), props.children);
  }

  function inputComponent(_ref) {
    var inputRef = _ref.inputRef,
        props = _objectWithoutProperties(_ref, ["inputRef"]);

    return React__default.createElement("div", _extends({
      ref: inputRef
    }, props));
  }

  function Control(props) {
    return React__default.createElement(MuiTextField, _extends({
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
    return React__default.createElement(ReactSelect.components.Input, _extends({}, props, {
      autoComplete: "none"
    }));
  };

  function Option(props) {
    return React__default.createElement(MenuItem, _extends({
      buttonRef: props.innerRef,
      selected: props.isFocused,
      component: "div",
      style: {
        fontWeight: props.isSelected ? 500 : 400
      }
    }, props.innerProps), props.children);
  }

  function Placeholder(props) {
    return React__default.createElement(Typography, _extends({
      color: "textSecondary",
      className: props.selectProps.classes.placeholder
    }, props.innerProps), props.children);
  }

  function SingleValue(props) {
    return React__default.createElement(Typography, _extends({
      className: props.selectProps.classes.singleValue
    }, props.innerProps), props.children);
  }

  function ValueContainer(props) {
    return React__default.createElement("div", {
      className: props.selectProps.classes.valueContainer
    }, props.children);
  }

  function MultiValue(props) {
    return React__default.createElement(Chip, {
      tabIndex: -1,
      label: props.children,
      className: classnames(props.selectProps.classes.chip, _defineProperty({}, props.selectProps.classes.chipFocused, props.isFocused)),
      onDelete: props.removeProps.onClick,
      deleteIcon: React__default.createElement(CancelIcon, props.removeProps)
    });
  }

  function Menu(props) {
    return React__default.createElement(Paper, _extends({
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

          return React__default.createElement(AsyncSelect, _extends({
            loadOptions: optionsAsync,
            cacheOptions: true,
            defaultOptions: true
          }, commonProps));
        }

        var SyncSelect = creatable ? require('react-select/lib/Creatable').default : ReactSelect__default;
        return React__default.createElement(SyncSelect, _extends({
          options: options || []
        }, commonProps));
      }
    }]);

    return Select;
  }(React__default.PureComponent);

  var Select$1 = styles$7.withStyles(styles$2, {
    withTheme: true
  })(Select);

  var FormikFilter = function FormikFilter(_ref) {
    var children = _ref.children,
        render = _ref.render,
        fast = _ref.fast,
        props = _objectWithoutProperties(_ref, ["children", "render", "fast"]);

    // eslint-disable-line no-unused-vars
    var Field = require('formik')[fast ? 'FastField' : 'Field'];

    return React__default.createElement(Field, _extends({}, props, {
      component: Select$1
    }));
  };

  var styles$3 = function styles() {
    return {
      root: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '8px'
      },
      wrapper: {
        margin: 'auto',
        position: 'relative'
      },
      wrapperFullWidth: {
        margin: 'auto',
        position: 'relative',
        width: '100%'
      },
      buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
          backgroundColor: green[700]
        },
        backgroundImage: 'url(https://static.financebuddha.com/assets/images/gradient-bg.png)',
        backgroundSize: 'contain'
      },
      fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1
      },
      buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12
      }
    };
  };

  var CircularIntegration =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(CircularIntegration, _React$Component);

    function CircularIntegration() {
      _classCallCheck(this, CircularIntegration);

      return _possibleConstructorReturn(this, _getPrototypeOf(CircularIntegration).apply(this, arguments));
    }

    _createClass(CircularIntegration, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            classes = _this$props.classes,
            fab = _this$props.fab,
            processing = _this$props.processing,
            success = _this$props.success,
            _this$props$color = _this$props.color,
            color = _this$props$color === void 0 ? 'primary' : _this$props$color,
            _this$props$variant = _this$props.variant,
            variant = _this$props$variant === void 0 ? 'contained' : _this$props$variant,
            _this$props$children = _this$props.children,
            children = _this$props$children === void 0 ? 'Submit' : _this$props$children,
            fullWidth = _this$props.fullWidth,
            rest = _objectWithoutProperties(_this$props, ["classes", "fab", "processing", "success", "color", "variant", "children", "fullWidth"]);

        var buttonClassname = classnames(_defineProperty({}, classes.buttonSuccess, success));
        return React__default.createElement("div", {
          className: classes.root,
          style: {
            width: fullWidth ? '100%' : 'auto'
          }
        }, fab ? React__default.createElement("div", {
          className: classes.wrapper
        }, React__default.createElement(Fab, _extends({
          color: color,
          className: buttonClassname
        }, rest), success ? React__default.createElement(CheckIcon, null) : React__default.createElement(SaveIcon, null)), processing && React__default.createElement(CircularProgress, {
          size: 68,
          className: classes.fabProgress
        })) : React__default.createElement("div", {
          className: fullWidth ? classes.wrapperFullWidth : classes.wrapper
        }, React__default.createElement(Button, _extends({
          fullWidth: fullWidth,
          variant: variant,
          color: color,
          className: buttonClassname,
          disabled: processing
        }, rest), children), processing && React__default.createElement(CircularProgress, {
          size: 24,
          className: classes.buttonProgress
        })));
      }
    }]);

    return CircularIntegration;
  }(React__default.Component);

  CircularIntegration.displayName = 'FButton';
  var FButton = styles$7.withStyles(styles$3)(CircularIntegration);

  function validateEmail (v, msg) {
    return !/^.+@.+\..+$/.test(v) && msg;
  }

  function validateMobile (v, msg) {
    return !/^\d{10}$/.test(v) && msg;
  }

  function validateDob (v) {
    var d = new Date(),
        dateTo = new Date(),
        dateFrom = new Date();
    var currentyear = new Date(v);
    dateFrom.setFullYear(d.getFullYear() - 57);
    dateTo.setFullYear(d.getFullYear() - 18);
    return currentyear.getFullYear() > dateFrom.getFullYear() && currentyear.getFullYear() < dateTo.getFullYear();
  }

  var Input$1 = function Input(_ref) {
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
      case 'switch':
        type = 'checkbox';
        Field = require('./formik/Switch').default;
        break;

      case 'checkbox':
        type = 'checkbox';
        Field = rest.options ? require('./formik/CheckboxGroup').default : require('./formik/Checkbox').default;
        break;

      case 'radio':
        type = 'radio';
        Field = require('./formik/Radio').default;
        break;

      case 'buttons':
        type = 'buttons';
        Field = require('./formik/ButtonGroup').default;
        break;

      case 'otp':
        Field = require('./formik/OtpField').default;
        break;

      case 'inr':
        type = 'number';
        Field = require('./formik/CurrencyField').default;
        break;

      case 'select':
        Field = mui ? require('./formik/Select').default : require('./formik/FilterField').default;
        break;

      case 'mobile':
        type = 'number';
        Field = require('./formik/TextField').default;
        break;

      case 'dob':
        type = 'date';
        Field = require('./formik/TextField').default;
        break;

      case 'email':
        Field = require('./formik/TextField').default;
        break;

      case 'pincode':
        type = 'number';
        Field = require('./formik/TextField').default;
        break;

      default:
        type = typeOrig || 'text';
        Field = require('./formik/TextField').default;
        break;
    }

    var validate = function validate(v) {
      return validateReq(v) || validateFunc(v);
    };

    return React__default.createElement(Grid, _extends({
      item: true
    }, container), React__default.createElement(Field, _extends({
      validate: validate,
      label: label,
      type: type,
      compact: true
    }, rest)));
  };

  var FormikTextField = function FormikTextField(_ref) {
    var children = _ref.children,
        render = _ref.render,
        _ref$fast = _ref.fast,
        fast = _ref$fast === void 0 ? true : _ref$fast,
        props = _objectWithoutProperties(_ref, ["children", "render", "fast"]);

    // eslint-disable-line no-unused-vars
    var Field = require('formik')[fast ? 'FastField' : 'Field'];

    return React__default.createElement(Field, _extends({}, props, props.type === 'hidden' ? {} : {
      component: TextField
    }), children);
  };

  var styles$4 = function styles() {
    return {
      doneAll: {
        color: green[500]
      }
    };
  };

  var ResendButton =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(ResendButton, _React$PureComponent);

    function ResendButton() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ResendButton);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResendButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        remainingSecs: 30
      });

      return _this;
    }

    _createClass(ResendButton, [{
      key: "tick",
      value: function tick() {
        var remainingSecs = this.state.remainingSecs;
        if (remainingSecs === 1) clearInterval(this.timer);
        this.setState({
          remainingSecs: remainingSecs - 1
        });
      }
    }, {
      key: "checkTick",
      value: function checkTick() {
        var tick = this.props.tick;

        if (tick === 'start') {
          this.setState({
            remainingSecs: 30
          });
          this.timer = setInterval(this.tick, 1000);
        }

        if (tick === 'clear') {
          this.setState({
            remainingSecs: 0
          });
          clearInterval(this.timer);
        }
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.checkTick();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(pp) {
        if (pp.tick !== this.props.tick) this.checkTick();
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            onClick = _this$props.onClick,
            processing = _this$props.processing,
            startCounterAgain = _this$props.startCounterAgain;
        var remainingSecs = this.state.remainingSecs;
        remainingSecs === 0 && startCounterAgain();
        return React__default.createElement(FButton, {
          size: "small",
          variant: "text",
          disabled: Boolean(remainingSecs),
          onClick: onClick,
          processing: processing
        }, "Resend ", remainingSecs > 0 ? "in ".concat(remainingSecs, "s") : '');
      }
    }]);

    return ResendButton;
  }(React__default.PureComponent);

  var UserPhoneOtp =
  /*#__PURE__*/
  function (_React$PureComponent2) {
    _inherits(UserPhoneOtp, _React$PureComponent2);

    function UserPhoneOtp(props) {
      var _this2;

      _classCallCheck(this, UserPhoneOtp);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(UserPhoneOtp).call(this, props));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
        otp: ''
      });

      _this2.hSend = _this2.hSend.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
      _this2.hVerify = _this2.hVerify.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
      _this2.hSetOtp = _this2.hSetOtp.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
      _this2.hCancelOtp = _this2.hCancelOtp.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
      _this2.hEnterOnMobile = _this2.hEnterOnMobile.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
      _this2.hent = _this2.hent.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
      return _this2;
    }

    _createClass(UserPhoneOtp, [{
      key: "hSend",
      value: function hSend() {
        var _this3 = this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            resend = _ref.resend;

        var _this$props2 = this.props,
            _this$props2$otpPurpo = _this$props2.otpPurpose,
            otpPurpose = _this$props2$otpPurpo === void 0 ? 'verification' : _this$props2$otpPurpo,
            onOtpSend = _this$props2.onOtpSend,
            _this$props2$field = _this$props2.field;
        _this$props2$field = _this$props2$field === void 0 ? {} : _this$props2$field;
        var name = _this$props2$field.name,
            value = _this$props2$field.value,
            _this$props2$form = _this$props2.form;
        _this$props2$form = _this$props2$form === void 0 ? {} : _this$props2$form;
        var _this$props2$form$err = _this$props2$form.errors,
            errors = _this$props2$form$err === void 0 ? {} : _this$props2$form$err,
            setFieldError = _this$props2$form.setFieldError;
        if (!value || errors[name]) return;
        var mobile = value.toString();
        this.setState({
          isSending: true
        });
        Meteor.call('otp.create', {
          phone: mobile,
          purpose: otpPurpose,
          resend: resend
        }, function (err) {
          if (onOtpSend) onOtpSend({
            error: err,
            mobile: mobile
          });

          if (err) {
            if (setFieldError) setFieldError(name, err.reason);

            _this3.setState({
              isSending: false
            });

            return;
          }

          _this3.setState({
            sent: true,
            tick: 'start',
            isSending: false
          });
        });
      }
    }, {
      key: "hVerify",
      value: function hVerify() {
        var _this4 = this;

        var _this$props3 = this.props,
            _this$props3$otpPurpo = _this$props3.otpPurpose,
            otpPurpose = _this$props3$otpPurpo === void 0 ? 'verification' : _this$props3$otpPurpo,
            onOtpSubmitCallback = _this$props3.onOtpSubmitCallback,
            user = _this$props3.user,
            expectedUserId = _this$props3.expectedUserId,
            _this$props3$field = _this$props3.field;
        _this$props3$field = _this$props3$field === void 0 ? {} : _this$props3$field;
        var value = _this$props3$field.value,
            form = _this$props3.form;
        var otp = this.state.otp;
        var mobile = value.toString();
        var otpError = this.otpError(otp);

        if (otpError) {
          this.setState({
            otpError: otpError
          });
          return;
        }

        this.setState({
          isVerifying: true
        });

        var cb = function cb(obj) {
          if (obj.verified && form) form.setFieldValue('userId', Meteor.userId());

          _this4.setState(_objectSpread({
            isVerifying: false
          }, obj));

          form.setFieldError('otp', obj.otpError);
        };

        if ((user || {})._id) {
          Meteor.call('user.verify', {
            expectedUserId: expectedUserId,
            phone: mobile,
            otp: otp,
            purpose: otpPurpose !== 'login' ? otpPurpose : ''
          }, function (err) {
            if (err) {
              switch (err.error) {
                case 'phone-already-associated':
                  cb({
                    phoneAssociatedData: err.details,
                    tick: 'clear'
                  });
                  break;

                case 'incorrect-otp':
                  cb({
                    otp: '',
                    otpError: err.reason
                  });
                  break;

                default:
                  Log.fatal(err.reason, err, {
                    expectedUserId: expectedUserId,
                    phone: mobile,
                    otp: otp,
                    purpose: otpPurpose !== 'login' ? otpPurpose : ''
                  });
                  cb({
                    otpError: err.reason,
                    tick: 'clear'
                  });
                  break;
              }

              return;
            }

            if (onOtpSubmitCallback) onOtpSubmitCallback({
              cb: cb({
                verified: true,
                tick: 'clear'
              })
            });else cb({
              verified: true,
              tick: 'clear'
            });
          });
        } else {
          var options = {
            phone: mobile,
            otp: otp,
            purpose: otpPurpose !== 'login' ? otpPurpose : '',
            expectedUserId: expectedUserId
          };
          Meteor.loginWithPhone(options, function (err) {
            if (err) {
              switch (err.error) {
                case 'incorrect-otp':
                  cb({
                    otp: '',
                    otpError: err.reason
                  });
                  break;

                case 'unexpected-user':
                  cb({
                    phoneAssociatedData: err.details,
                    tick: 'clear'
                  });
                  return;

                default:
                  Log.fatal('loginWithPhone 1: ' + err.reason, err, options);
                  cb({
                    otpError: err.reason,
                    tick: 'clear'
                  });
                  break;
              }
            } else {
              Meteor.call('logs.addLogin');
              if (onOtpSubmitCallback) onOtpSubmitCallback({
                cb: cb({
                  verified: true,
                  tick: 'clear'
                })
              });else cb({
                verified: true,
                tick: 'clear'
              });
            }
          });
        }
      }
    }, {
      key: "hCancelOtp",
      value: function hCancelOtp() {
        this.setState({
          tick: 'clear',
          otp: '',
          otpError: false,
          sent: false
        });
        if (this.props.onOtpCancel) this.props.onOtpCancel();
      }
    }, {
      key: "otpError",
      value: function otpError(otp) {
        return !/^\d{5}$/.test(otp) && '5 digits';
      }
    }, {
      key: "hSetOtp",
      value: function hSetOtp(e) {
        var otp = e.currentTarget.value;
        this.setState({
          otpError: this.otpError(otp),
          otp: otp
        });
      }
    }, {
      key: "hEnterOnOtp",
      value: function hEnterOnOtp(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.hVerify();
        }
      }
    }, {
      key: "hEnterOnMobile",
      value: function hEnterOnMobile(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.hSend();
        }
      }
    }, {
      key: "phones",
      value: function phones() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref2$verified = _ref2.verified,
            verified = _ref2$verified === void 0 ? false : _ref2$verified;

        var user = this.props.user;
        if (!((user || {}).phones || []).length) return [];
        return user.phones.filter(function (p) {
          return (p.number || '').startsWith('+91') && (verified ? p.verified : true);
        }).map(function (p) {
          return {
            value: p.number.substr(3),
            label: p.number
          };
        });
      }
    }, {
      key: "checkVerified",
      value: function checkVerified(phoneNumber) {
        var user = this.props.user;
        !user && this.setState({
          verified: false
        });
        var parent = this;
        var phones = user && user.phones;
        phoneNumber && phones && phones.map(function (e) {
          e.number && e.number.replace(e.code || '+91', '') === (phoneNumber && phoneNumber.toString().replace('+91', '')) && e.verified && e.verified === true && parent.setState({
            verified: true
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this5 = this;

        var _this$props4 = this.props,
            onOtpSubmitCallback = _this$props4.onOtpSubmitCallback,
            user = _this$props4.user,
            dispatch = _this$props4.dispatch,
            classes = _this$props4.classes,
            props = _objectWithoutProperties(_this$props4, ["onOtpSubmitCallback", "user", "dispatch", "classes"]); // eslint-disable-line no-unused-vars


        var _this$state = this.state,
            sent = _this$state.sent,
            otp = _this$state.otp,
            otpError = _this$state.otpError,
            isSending = _this$state.isSending,
            isVerifying = _this$state.isVerifying,
            verified = _this$state.verified,
            tick = _this$state.tick;
        var hSend = this.hSend,
            hVerify = this.hVerify,
            hSetOtp = this.hSetOtp,
            hEnterOnMobile = this.hEnterOnMobile,
            hEnterOnOtp = this.hEnterOnOtp,
            hCancelOtp = this.hCancelOtp;
        var phones = this.phones(); // const verifiedPhones = this.phones({verified: true});

        var field = props.field,
            form = props.form,
            pureProps = _objectWithoutProperties(props, ["field", "form"]); // eslint-disable-line no-unused-vars


        var value = props.value || (props.field || {}).value; // this.checkVerified(value);

        var mobile = (value || '').toString();
        return React__default.createElement(Grid, {
          container: true,
          justify: "center"
        }, React__default.createElement(Grid, {
          item: true,
          xs: 12
        }, verified ? React__default.createElement(React__default.Fragment, null, React__default.createElement(FormikTextField, _extends({}, props, {
          type: "number",
          inputProps: {
            readOnly: true
          },
          InputProps: {
            endAdornment: React__default.createElement(InputAdornment, null, React__default.createElement(Icon, {
              classes: {
                root: classes.doneAll
              },
              "aria-label": "Verified"
            }, React__default.createElement(DoneAll, null)))
          }
        })), (user || {})._id && React__default.createElement(Input$1, {
          value: user._id,
          name: "userId",
          label: "",
          type: "hidden"
        })) : sent ? React__default.createElement(FormikTextField, {
          name: "otp",
          label: "OTP",
          type: "number",
          value: otp,
          error: Boolean(otpError),
          helperText: otpError,
          onChange: hSetOtp,
          onKeyDown: hEnterOnOtp,
          InputProps: {
            endAdornment: React__default.createElement(InputAdornment, null, React__default.createElement(IconButton, {
              "aria-label": "Cancel Otp",
              onClick: hCancelOtp
            }, React__default.createElement(Clear, null)))
          }
        }) : phones.length ? React__default.createElement(Select$1, _extends({}, props, {
          defaultValue: phones[0].value,
          options: phones
        })) : React__default.createElement(FormikTextField, _extends({}, props, {
          type: "number",
          onKeyDown: hEnterOnMobile
        }))), !verified && React__default.createElement(Grid, {
          container: true,
          item: true,
          xs: 12,
          justify: sent ? 'space-between' : 'flex-end'
        }, sent ? React__default.createElement(React__default.Fragment, null, React__default.createElement(ResendButton, {
          tick: tick,
          onClick: function onClick() {
            return hSend({
              resend: true
            });
          },
          startCounterAgain: function startCounterAgain() {
            return _this5.setState({
              tick: 'end'
            });
          },
          processing: isSending
        }), React__default.createElement(FButton, {
          size: "small",
          variant: "outlined",
          color: "primary",
          onClick: hVerify,
          processing: isVerifying
        }, "Verify ", mobile)) : React__default.createElement(FButton, {
          size: "small",
          variant: "outlined",
          color: "primary",
          onClick: hSend,
          processing: isSending,
          success: sent
        }, "Send OTP")));
      }
    }]);

    return UserPhoneOtp;
  }(React__default.PureComponent);

  var OTP = styles$7.withStyles(styles$4)(UserPhoneOtp);

  var FormikOTPField = function FormikOTPField(_ref) {
    var children = _ref.children,
        render = _ref.render,
        fast = _ref.fast,
        props = _objectWithoutProperties(_ref, ["children", "render", "fast"]);

    // eslint-disable-line no-unused-vars
    var Field = require('formik')[fast ? 'FastField' : 'Field'];

    return React__default.createElement(Field, _extends({}, props, {
      component: OTP
    }));
  };

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return root.Date.now();
  };

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          result = wait - timeSinceLastCall;

      return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var lodash_debounce = debounce;

  var Persist =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Persist, _React$Component);

    function Persist(props) {
      var _this;

      _classCallCheck(this, Persist);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Persist).call(this, props));
      _this.saveForm = lodash_debounce(_this.saveForm, props.debounce).bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(Persist, [{
      key: "saveForm",
      value: function saveForm(data) {
        var _this$props = this.props,
            name = _this$props.name,
            _this$props$genericKe = _this$props.genericKeys,
            genericKeys = _this$props$genericKe === void 0 ? [] : _this$props$genericKe;

        if (!window.formStore) {
          Log.fatal('Please define the infoStore');
          return;
        }

        formStore.setItem(name, data);
        var genericData = {};
        genericKeys.forEach(function (k) {
          genericData[k] = data[k];
        });
        formStore.setItem('generic', genericData);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (!isEqual((prevProps.formik || {}).values, (this.context.formik || {}).values)) this.saveForm(prevProps.formik.values);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props2 = this.props,
            formik = _this$props2.formik,
            name = _this$props2.name;

        if (!window.formStore) {
          Log.fatal('Please define the infoStore');
          return;
        }

        formStore.getItem('generic').then(function (genericData) {
          genericData && formik.setValues(_objectSpread({}, formik.values, genericData));
          formStore.getItem(name).then(function (formData) {
            return formData && formik.setValues(_objectSpread({}, formik.values, formData));
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return Persist;
  }(React.Component);

  _defineProperty(Persist, "defaultProps", {
    debounce: 300
  });

  var Persist$1 = formik.connect(Persist);

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

        var _formikToMuiProps = formikToMuiProps(props),
            error = _formikToMuiProps.error,
            helperText = _formikToMuiProps.helperText,
            fp = _objectWithoutProperties(_formikToMuiProps, ["error", "helperText"]);

        return React__default.createElement(FormControl, _extends({
          component: "fieldset",
          error: error
        }, FormControlProps, {
          className: classnames(_defineProperty({}, classes.rowLabel, row === 'all'), FormControlProps && FormControlProps.className)
        }), React__default.createElement(FormControlLabel, _extends({
          label: label,
          className: classnames(_defineProperty({}, classes.rowLabel, row === 'all'), FormControlLabelProps && FormControlLabelProps.className)
        }, FormControlLabelProps, {
          control: React__default.createElement(MuiRadio, _extends({}, fp, {
            value: value,
            onChange: this.handleChange,
            onBlur: this.handleBlur
          }))
        })), (error || helperText) && React__default.createElement(FormHelperText, _extends({}, FormHelperTextProps, {
          className: classnames(_defineProperty({}, classes.rowHelperText, row === 'all'), FormHelperTextProps && FormHelperTextProps.className)
        }), helperText));
      }
    }]);

    return Radio;
  }(React__default.PureComponent);

  Radio.displayName = 'FormikMaterialUIRadio';

  var styles$5 = function styles() {
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

        return React__default.createElement(FormControl, _extends({
          error: error
        }, FormControlProps, {
          classes: _objectSpread({}, (FormControlProps || {}).classes, compact ? {
            root: classes.formControl
          } : {})
        }), label && React__default.createElement(FormLabel, _extends({}, FormLabelProps, {
          classes: _objectSpread({}, (FormLabelProps || {}).classes, compact ? {
            root: classes.formLabel
          } : {})
        }), label), React__default.createElement(MuiRadioGroup, _extends({}, RadioGroupProps, {
          row: (RadioGroupProps || {}).row || compact
        }, fp, {
          onChange: this.handleChange,
          onBlur: this.handleBlur
        }), options.map(function (option) {
          return React__default.createElement(FormControlLabel, _extends({
            key: option.value,
            control: React__default.createElement(MuiRadio, RadioProps)
          }, FormControlLabelProps, {
            value: option.value,
            label: option.label
          }));
        })), helperText && React__default.createElement(FormHelperText, _extends({}, FormHelperTextProps, {
          className: classnames(_defineProperty({}, classes.rowHelperText, row === 'all'), FormHelperTextProps && FormHelperTextProps.className)
        }), helperText));
      }
    }]);

    return RadioGroup;
  }(React__default.Component);

  var RadioGroup$1 = styles$7.withStyles(styles$5)(RadioGroup);

  var FormikRadio$1 = function FormikRadio(_ref) {
    var children = _ref.children,
        render = _ref.render,
        _ref$fast = _ref.fast,
        fast = _ref$fast === void 0 ? true : _ref$fast,
        type = _ref.type,
        buttons = _ref.buttons,
        props = _objectWithoutProperties(_ref, ["children", "render", "fast", "type", "buttons"]);

    // eslint-disable-line no-unused-vars
    var Field = require('formik')[fast ? 'FastField' : 'Field'];

    return React__default.createElement(Field, _extends({}, props, type === 'radio' ? {} : {
      type: type
    }, type === 'hidden' ? {} : {
      component: props.options ? RadioGroup$1 : Radio
    }), children);
  };

  var Select$2 = function Select(_ref) {
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
    return React__default.createElement(TextField, _extends({}, props, {
      InputLabelProps: _objectSpread({}, isNative === true ? {
        shrink: true
      } : {}, InputLabelProps),
      SelectProps: _objectSpread({}, SelectProps, {
        multiple: multiple,
        native: isNative
      }),
      select: true
    }), isNative ? options.map(function (option, i) {
      return React__default.createElement("option", {
        key: i,
        value: option.value
      }, option.label);
    }) : options.map(function (option, i) {
      return React__default.createElement(MenuItem, {
        key: i,
        value: option.value
      }, option.label);
    }));
  };

  Select$2.displayName = 'FormikMaterialUISelect';

  var FormikSelect = function FormikSelect(_ref) {
    var children = _ref.children,
        render = _ref.render,
        fast = _ref.fast,
        props = _objectWithoutProperties(_ref, ["children", "render", "fast"]);

    // eslint-disable-line no-unused-vars
    var Field = require('formik')[fast ? 'FastField' : 'Field'];

    return React__default.createElement(Field, _extends({}, props, {
      component: Select$2
    }));
  };

  var styles$6 = function styles() {
    return {
      inputType: {
        height: '23px' // to ensure the match with react-select

      }
    };
  };

  var Switch =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(Switch, _React$PureComponent);

    function Switch(p) {
      var _this;

      _classCallCheck(this, Switch);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Switch).call(this, p));
      _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      return _this;
    }

    _createClass(Switch, [{
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
            _this$props$fullWidth = _this$props.fullWidth,
            fullWidth = _this$props$fullWidth === void 0 ? true : _this$props$fullWidth,
            classes = _this$props.classes,
            _this$props$inputProp = _this$props.inputProps,
            inputProps = _this$props$inputProp === void 0 ? {} : _this$props$inputProp,
            label = _this$props.label,
            compact = _this$props.compact,
            props = _objectWithoutProperties(_this$props, ["fullWidth", "classes", "inputProps", "label", "compact"]); // eslint-disable-line no-unused-vars


        inputProps.classes = _objectSpread({}, classes, inputProps.classes);

        var _formikToMuiProps = formikToMuiProps(props),
            _formikToMuiProps$err = _formikToMuiProps.error,
            error = _formikToMuiProps$err === void 0 ? false : _formikToMuiProps$err,
            helperText = _formikToMuiProps.helperText,
            fp = _objectWithoutProperties(_formikToMuiProps, ["error", "helperText"]);

        return React__default.createElement(FormControl, {
          fullWidth: fullWidth
        }, React__default.createElement(FormControlLabel, {
          control: React__default.createElement(MuiSwitch, _extends({}, fp, {
            onChange: this.handleChange,
            onBlur: this.handleBlur
          })),
          label: label
        }), helperText && React__default.createElement(FormHelperText, {
          error: error
        }, helperText));
      }
    }]);

    return Switch;
  }(React__default.PureComponent);

  Switch.displayName = 'FormikMaterialUISwitch';
  var Switch$1 = styles$7.withStyles(styles$6)(Switch);

  var FormikCheckbox$1 = function FormikCheckbox(_ref) {
    var children = _ref.children,
        render = _ref.render,
        _ref$fast = _ref.fast,
        fast = _ref$fast === void 0 ? true : _ref$fast,
        type = _ref.type,
        props = _objectWithoutProperties(_ref, ["children", "render", "fast", "type"]);

    // eslint-disable-line no-unused-vars
    var Field = require('formik')[fast ? 'FastField' : 'Field'];

    return React__default.createElement(Field, _extends({}, props, type === 'checkbox' ? {} : {
      type: type
    }, type === 'hidden' ? {} : {
      component: Switch$1
    }), children);
  };

  exports.ButtonGroup = FormikRadio;
  exports.Checkbox = FormikCheckbox;
  exports.CheckboxGroup = CheckboxGroup$1;
  exports.CurrencyField = FormikCurrencyField;
  exports.FilterField = FormikFilter;
  exports.OtpField = FormikOTPField;
  exports.Persist = Persist$1;
  exports.Radio = FormikRadio$1;
  exports.Select = FormikSelect;
  exports.Switch = FormikCheckbox$1;
  exports.TextField = FormikTextField;
  exports.Input = Input$1;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
