/* eslint-disable no-console */
/* eslint-disable no-useless-constructor,no-empty-function */
import { Visitor } from './Visitor';
import { User } from './types';

export class UserLogger implements Visitor<User> {
  private static getFullName(user: User): string {
    return `${user.lastName} ${user.firstName} ${user.middleName}`;
  }

  public processItem(item: User) {
    console.log('User: ', UserLogger.getFullName(item));
  }
}
