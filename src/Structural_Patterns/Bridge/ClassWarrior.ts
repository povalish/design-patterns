import { Class, MagicTypes } from './Class';
import { RoleDamageDealer } from './RoleDamageDealer';


export class ClassWarrior extends Class {
  constructor() {
    super(new RoleDamageDealer(), MagicTypes.Physical);
  }

  get health(): number {
    return this.role.health;
  }

  public initMassacre(): number {
    return this.role.produceDamage();
  }
}
