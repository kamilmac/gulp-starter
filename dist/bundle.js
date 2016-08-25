(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var Bar = (function () {
    function Bar() {
    }
    Bar.prototype.greet = function (name) {
        return "HdELLO BAR " + name;
    };
    return Bar;
}());
exports.Bar = Bar;

},{}],2:[function(require,module,exports){
"use strict";
var stuff_1 = require('./stuff');
var bar_1 = require('./components/bar');
var Main = (function () {
    function Main() {
    }
    Main.start = function () {
        return 10;
    };
    return Main;
}());
console.log(Main.start());
var h = new stuff_1.Hello;
var d = new bar_1.Bar;
h.greet('Kamsil');
console.log("das", d.greet('Kdamil'));

},{"./components/bar":1,"./stuff":3}],3:[function(require,module,exports){
"use strict";
var Hello = (function () {
    function Hello() {
    }
    Hello.prototype.greet = function (name) {
        return "HdELLO " + name;
    };
    return Hello;
}());
exports.Hello = Hello;

},{}]},{},[2])