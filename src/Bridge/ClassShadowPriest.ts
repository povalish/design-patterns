import { MagicTypes } from './Class';
import { ClassPriest } from './ClassPriest';
import { RoleDamageDealer } from './RoleDamageDealer';

export class ClassShadowPriest extends ClassPriest {
  constructor() {
    super(new RoleDamageDealer(), MagicTypes.Shadow);
  }

  public initShadowReach(): number {
    this.role.health -= 50;
    return (this.role as RoleDamageDealer).produceDamage();
  }
}
