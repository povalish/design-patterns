import { Role } from './Role';

export class RoleHealer implements Role {
  public health: number;
  public armor: number;
  public intelligence: number;

  private readonly healPerSeconds: number;


  constructor() {
    this.health = 320;
    this.armor = 5;
    this.intelligence = 120;
    this.healPerSeconds = 100;
  }


  public takeDamage(damage: number) {
    // Heavy calculations
    // but here simplified
    this.health = damage - (this.armor * this.intelligence);
  }

  public produceDamage(): number {
    // Heavy calculations
    // but here simplified
    return 0;
  }

  public produceHeal(): number {
    // Heavy calculations
    // but here simplified
    return this.healPerSeconds * this.intelligence * 75;
  }
}
