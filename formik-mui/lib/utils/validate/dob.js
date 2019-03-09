"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default(v) {
  var d = new Date(),
      dateTo = new Date(),
      dateFrom = new Date();
  var currentyear = new Date(v);
  dateFrom.setFullYear(d.getFullYear() - 57);
  dateTo.setFullYear(d.getFullYear() - 18);
  return currentyear.getFullYear() > dateFrom.getFullYear() && currentyear.getFullYear() < dateTo.getFullYear();
}