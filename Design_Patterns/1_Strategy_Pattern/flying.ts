export interface IFlyBehaviour {
  fly();
}
export class SimpleFlying implements IFlyBehaviour {
  public fly(): void {
    console.log("I can fly Simply");
  }
}
export class JetFlying implements IFlyBehaviour {
  public fly(): void {
    console.log("I can fly like Jet");
  }
}
export class NoFlying implements IFlyBehaviour {
  public fly(): void {
    console.log("I can't fly :(");
  }
}
