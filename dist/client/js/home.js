"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Explainer = require("./components/Explainer.jsx");

var _Explainer2 = _interopRequireDefault(_Explainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('.carousel').carousel();

_reactDom2.default.render(_react2.default.createElement(_Explainer2.default, null), document.getElementById('explainer'));