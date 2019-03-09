function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import FButton from '../forms/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '../Input';
import Clear from '@material-ui/icons/Clear';
import TextField from '../formik/TextField';
import Select from '../forms/filter';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import green from '@material-ui/core/colors/green';
import DoneAll from '@material-ui/icons/DoneAll';
import { withStyles } from '@material-ui/core/styles';

var styles = function styles() {
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
      return React.createElement(FButton, {
        size: "small",
        variant: "text",
        disabled: Boolean(remainingSecs),
        onClick: onClick,
        processing: processing
      }, "Resend ", remainingSecs > 0 ? "in ".concat(remainingSecs, "s") : '');
    }
  }]);

  return ResendButton;
}(React.PureComponent);

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
      return React.createElement(Grid, {
        container: true,
        justify: "center"
      }, React.createElement(Grid, {
        item: true,
        xs: 12
      }, verified ? React.createElement(React.Fragment, null, React.createElement(TextField, _extends({}, props, {
        type: "number",
        inputProps: {
          readOnly: true
        },
        InputProps: {
          endAdornment: React.createElement(InputAdornment, null, React.createElement(Icon, {
            classes: {
              root: classes.doneAll
            },
            "aria-label": "Verified"
          }, React.createElement(DoneAll, null)))
        }
      })), (user || {})._id && React.createElement(Input, {
        value: user._id,
        name: "userId",
        label: "",
        type: "hidden"
      })) : sent ? React.createElement(TextField, {
        name: "otp",
        label: "OTP",
        type: "number",
        value: otp,
        error: Boolean(otpError),
        helperText: otpError,
        onChange: hSetOtp,
        onKeyDown: hEnterOnOtp,
        InputProps: {
          endAdornment: React.createElement(InputAdornment, null, React.createElement(IconButton, {
            "aria-label": "Cancel Otp",
            onClick: hCancelOtp
          }, React.createElement(Clear, null)))
        }
      }) : phones.length ? React.createElement(Select, _extends({}, props, {
        defaultValue: phones[0].value,
        options: phones
      })) : React.createElement(TextField, _extends({}, props, {
        type: "number",
        onKeyDown: hEnterOnMobile
      }))), !verified && React.createElement(Grid, {
        container: true,
        item: true,
        xs: 12,
        justify: sent ? 'space-between' : 'flex-end'
      }, sent ? React.createElement(React.Fragment, null, React.createElement(ResendButton, {
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
      }), React.createElement(FButton, {
        size: "small",
        variant: "outlined",
        color: "primary",
        onClick: hVerify,
        processing: isVerifying
      }, "Verify ", mobile)) : React.createElement(FButton, {
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
}(React.PureComponent);

export default withStyles(styles)(UserPhoneOtp);