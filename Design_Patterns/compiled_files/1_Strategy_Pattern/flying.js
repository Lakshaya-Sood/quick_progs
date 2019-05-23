"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleFlying = /** @class */ (function () {
    function SimpleFlying() {
    }
    SimpleFlying.prototype.fly = function () {
        console.log("I can fly Simply");
    };
    return SimpleFlying;
}());
exports.SimpleFlying = SimpleFlying;
var JetFlying = /** @class */ (function () {
    function JetFlying() {
    }
    JetFlying.prototype.fly = function () {
        console.log("I can fly like Jet");
    };
    return JetFlying;
}());
exports.JetFlying = JetFlying;
var NoFlying = /** @class */ (function () {
    function NoFlying() {
    }
    NoFlying.prototype.fly = function () {
        console.log("I can't fly :(");
    };
    return NoFlying;
}());
exports.NoFlying = NoFlying;
//# sourceMappingURL=flying.js.map