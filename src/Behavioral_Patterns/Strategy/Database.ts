/* eslint-disable no-useless-constructor,no-empty-function */
import { Strategy } from './Strategy';

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

  public pickByStrategy(strategy: Strategy<T>) {
    strategy.setItems(this.database);
    return strategy.pickItem();
  }
}
