/* eslint-disable no-restricted-syntax,no-useless-constructor,no-empty-function */
import { Entity } from '../types';

export class CardDatabase {
  private complexDataStructure: Entity[] = [];

  constructor() {}

  public add(entity: Entity) {
    this.complexDataStructure.push(entity);
  }

  public* getIterator(): Generator<string> {
    let currentIndex = 0;

    while (currentIndex < this.complexDataStructure.length) {
      const currentEntity = this.complexDataStructure[currentIndex]!;
      yield `Card ${currentEntity.id}: ${currentEntity.name}`;
      currentIndex += 1;
    }
  }
}
