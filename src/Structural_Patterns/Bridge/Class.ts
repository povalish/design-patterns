import { Role } from './Role';

export enum MagicTypes {
  Physical,
  Arcane,
  Frost,
  Fire,
  Shadow,
  Holy,
}

export abstract class Class {
  protected role: Role;
  protected magicType: MagicTypes;

  protected constructor(role: Role, magic: MagicTypes) {
    this.role = role;
    this.magicType = magic;
  }

  public takeDamage(damage: number) {
    this.role.takeDamage(damage);
  }
}
