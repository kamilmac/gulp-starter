'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Hello = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hello = exports.Hello = function Hello() {
	return _react2.default.createElement(
		'h1',
		null,
		'Hello'
	);
};

(0, _reactDom.render)(_react2.default.createElement(Hello, null), document.getElementById('app'));