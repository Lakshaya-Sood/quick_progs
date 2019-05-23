"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleQuacking = /** @class */ (function () {
    function SimpleQuacking() {
    }
    SimpleQuacking.prototype.quack = function () {
        console.log("I can do Simple Quack!! Quack!!");
    };
    return SimpleQuacking;
}());
exports.SimpleQuacking = SimpleQuacking;
var HeavyQuacking = /** @class */ (function () {
    function HeavyQuacking() {
    }
    HeavyQuacking.prototype.quack = function () {
        console.log("I can do Heavy Quack!! Quack!!");
    };
    return HeavyQuacking;
}());
exports.HeavyQuacking = HeavyQuacking;
var NoQuacking = /** @class */ (function () {
    function NoQuacking() {
    }
    NoQuacking.prototype.quack = function () {
        console.log("I can't do Quack!! Quack!!");
    };
    return NoQuacking;
}());
exports.NoQuacking = NoQuacking;
//# sourceMappingURL=quacking.js.map