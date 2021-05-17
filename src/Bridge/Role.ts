export interface Role {
  health: number;
  armor: number;
  intelligence: number;

  takeDamage: (damage: number) => void;
  produceDamage: () => number;
}
