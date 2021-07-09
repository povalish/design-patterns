import { Iterator } from './Iterator';
import { ComplexDataStructure, Entity } from '../types';



export class PetIterator implements Iterator<Entity> {
  public done: boolean = true;

  private readonly complexData: ComplexDataStructure;
  private currentIndex = 0;

  constructor(complexData: ComplexDataStructure) {
    this.complexData = complexData;
    this.done = complexData.length === 0;
  }

  public next(): Entity | null {
    const currentEntity = this.complexData[this.currentIndex];
    this.done = this.complexData.length === this.currentIndex + 1;

    if (currentEntity) {
      this.currentIndex += 1;
      return currentEntity;
    }

    return null;
  }
}
