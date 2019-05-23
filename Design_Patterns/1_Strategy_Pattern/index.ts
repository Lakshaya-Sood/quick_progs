//---------------------------IMPORT STARTS--------------------------------
//Local
import { SimpleQuacking, HeavyQuacking, NoQuacking } from "./quacking";
import { SimpleFlying, JetFlying, NoFlying } from "./flying";
//local type declarations
import { IQuackBehaviour } from "./quacking";
import { IFlyBehaviour } from "./flying";
//---------------------------IMPORT ENDS-----------------------------------
class Duck {
  private _name: string;
  private _home: string;
  private _flyBehaviour: IFlyBehaviour;
  private _quackBehaviour: IQuackBehaviour;

  constructor(
    name: Duck["_name"],
    home: Duck["_home"],
    fb: IFlyBehaviour,
    qb: IQuackBehaviour
  ) {
    this._name = name;
    this._home = home;
    this._flyBehaviour = fb;
    this._quackBehaviour = qb;
  }

  public introduceYourself(): void {
    console.log(`My name is ${this._name} and i am from ${this._home}.`);
    this._flyBehaviour.fly();
    this._quackBehaviour.quack();
    console.log("\n");
  }
}

let MountainDuck = new Duck(
    "Mountain Duck",
    "Himalays",
    new SimpleFlying(),
    new SimpleQuacking()
  ),
  CityDuck = new Duck(
    "City Duck",
    "New York",
    new JetFlying(),
    new HeavyQuacking()
  ),
  RubberDuck = new Duck(
    "Rubber Duck",
    "Backyard bath tub",
    new NoFlying(),
    new NoQuacking()
  );

MountainDuck.introduceYourself();
CityDuck.introduceYourself();
RubberDuck.introduceYourself();
