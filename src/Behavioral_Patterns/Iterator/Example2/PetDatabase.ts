/* eslint-disable no-restricted-syntax,no-useless-constructor,no-empty-function */
import { ComplexDataStructure, Entity } from '../types';
import { Iterable } from './Iterable';
import { Iterator } from './Iterator';
import { PetIterator } from './PetIterator';



export class PetDatabase implements Iterable<Entity> {
  private complexDataStructure: ComplexDataStructure = [];

  constructor() {}

  get isEmpty(): boolean {
    return this.complexDataStructure.length === 0;
  }

  public add(entity: Entity) {
    this.complexDataStructure.push(entity);
  }

  public getIterator(): Iterator<Entity> {
    return new PetIterator(this.complexDataStructure);
  }
}
