import { Strategy } from './Strategy';
import { User } from './types';

export class StrategyByDate implements Strategy<User> {
  private items?: Map<number, User>;

  public setItems(items: Map<number, User>) {
    this.items = items;
  }

  public pickItem(): User | undefined {
    return this.items?.get(1);
  }
}
