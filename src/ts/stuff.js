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
