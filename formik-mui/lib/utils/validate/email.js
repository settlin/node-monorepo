"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(v, msg) {
  return !/^.+@.+\..+$/.test(v) && msg;
}