export interface Strategy<Entity> {
  setItems: (items: Map<number, Entity>) => void;
  pickItem: () => Entity | undefined;
}
