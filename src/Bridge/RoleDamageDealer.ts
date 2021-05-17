import { Role } from './Role';



export class RoleDamageDealer implements Role {
  public health: number;
  public armor: number;
  public intelligence: number;

  private readonly damagePerSeconds: number;


  constructor() {
    this.health = 700;
    this.armor = 35;
    this.intelligence = 0;
    this.damagePerSeconds = 142;
  }


  public takeDamage(damage: number) {
    // Heavy calculations
    // but here simplified
    this.health = damage - this.armor;
  }

  public produceDamage(): number {
    // Heavy calculations
    // but here simplified
    return this.damagePerSeconds * 100;
  }
}
