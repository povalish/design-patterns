import { Class } from './Class';


export abstract class ClassPriest extends Class {
  get health(): number {
    return this.role.health;
  }

  public initHealingTouch() {
    this.role.health += 100;
  }
}
