/* eslint-disable no-console */
import { Database } from './Database';
import { User } from './types';
import { UserLogger } from './UserLogger';
import { UserCounter } from './UserCounter';

export function main() {
  const UserDatabase = new Database<User>();
  const Logger = new UserLogger();
  const Counter = new UserCounter();

  UserDatabase.addItem({
    id: 1,
    firstName: 'Nikita',
    lastName: 'Povalishev',
    middleName: 'Alexandrovich',
  });

  UserDatabase.addItem({
    id: 2,
    firstName: 'Anna',
    lastName: 'Povalisheva',
    middleName: 'Alexeevna',
  });

  UserDatabase.visitWith(Logger);
  UserDatabase.visitWith(Counter);

  console.log('User count: ', Counter.count);
}
