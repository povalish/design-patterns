import { DBCommand } from './DBCommand';
import { Entity } from './types';

export class Remove<T extends Entity> extends DBCommand {
  private readonly entity: T;

  constructor(entity: T) {
    super();
    this.entity = entity;
  }

  public execute() {
    const key = `${this.entity.id}--${this.entity.name}`;
    this.dbRef.removeItem(key);
  }

  public restore() {
    const key = `${this.entity.id}--${this.entity.name}`;
    this.dbRef.saveItem<T>(key, this.entity);
  }
}
