import { Visitor } from './Visitor';
import { User } from './types';

export class UserCounter implements Visitor<User> {
  public count: number = 0;

  public processItem(item: User) {
    this.count += 1;
  }
}
