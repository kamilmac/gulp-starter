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
