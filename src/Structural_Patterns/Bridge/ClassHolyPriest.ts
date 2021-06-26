import { ClassPriest } from './ClassPriest';
import { RoleHealer } from './RoleHealer';
import { MagicTypes } from './Class';

export class ClassHolyPriest extends ClassPriest {
  constructor() {
    super(new RoleHealer(), MagicTypes.Holy);
  }

  public initHolyNova(): number {
    this.role.health += 50;
    return (this.role as RoleHealer).produceHeal();
  }
}
