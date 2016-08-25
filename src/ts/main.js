/// <reference path="../../typings/index.d.ts" />
"use strict";
var React = require('react');
var react_dom_1 = require('react-dom');
var Hello = function () {
    return (React.createElement("h1", null, "Hello"));
};
react_dom_1.render(React.createElement(Hello, null), document.getElementById('app'));
