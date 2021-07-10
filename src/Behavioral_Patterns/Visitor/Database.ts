/* eslint-disable no-useless-constructor,no-empty-function */
import { Visitor } from './Visitor';

type DataRecord = {
  id: number;
}

export class Database<T extends DataRecord> {
  private database = new Map<number, T>();

  constructor() {
  }

  public addItem(item: T) {
    this.database.set(item.id, item);
  }

  public getItem(id: number): T | undefined {
    return this.database.get(id);
  }

  public removeItem(id: number) {
    this.database.delete(id);
  }

  public visitWith(visitor: Visitor<T>) {
    this.database.forEach((item) => visitor.processItem(item));
  }
}
