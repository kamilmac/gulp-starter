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
