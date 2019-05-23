"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//---------------------------IMPORT STARTS--------------------------------
//Local
var quacking_1 = require("./quacking");
var flying_1 = require("./flying");
//---------------------------IMPORT ENDS-----------------------------------
var Duck = /** @class */ (function () {
    function Duck(name, home, fb, qb) {
        this._name = name;
        this._home = home;
        this._flyBehaviour = fb;
        this._quackBehaviour = qb;
    }
    Duck.prototype.introduceYourself = function () {
        console.log("My name is " + this._name + " and i am from " + this._home + ".");
        this._flyBehaviour.fly();
        this._quackBehaviour.quack();
        console.log("\n");
    };
    return Duck;
}());
var MountainDuck = new Duck("Mountain Duck", "Himalays", new flying_1.SimpleFlying(), new quacking_1.SimpleQuacking()), CityDuck = new Duck("City Duck", "New York", new flying_1.JetFlying(), new quacking_1.HeavyQuacking()), RubberDuck = new Duck("Rubber Duck", "Backyard bath tub", new flying_1.NoFlying(), new quacking_1.NoQuacking());
MountainDuck.introduceYourself();
CityDuck.introduceYourself();
RubberDuck.introduceYourself();
//# sourceMappingURL=index.js.map