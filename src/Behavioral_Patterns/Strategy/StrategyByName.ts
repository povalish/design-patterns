import { Strategy } from './Strategy';
import { User } from './types';

export class StrategyByName implements Strategy<User> {
  private items?: Map<number, User>;

  public setItems(items: Map<number, User>) {
    this.items = items;
  }

  public pickItem(): User | undefined {
    return this.items?.get(2);
  }
}
