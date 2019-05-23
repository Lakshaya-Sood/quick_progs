export interface IQuackBehaviour {
  quack();
}
export class SimpleQuacking implements IQuackBehaviour {
  public quack(): void {
    console.log("I can do Simple Quack!! Quack!!");
  }
}
export class HeavyQuacking implements IQuackBehaviour {
  public quack(): void {
    console.log("I can do Heavy Quack!! Quack!!");
  }
}
export class NoQuacking implements IQuackBehaviour {
  public quack(): void {
    console.log("I can't do Quack!! Quack!!");
  }
}
