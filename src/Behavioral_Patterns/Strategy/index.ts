import { Database } from './Database';
import { User } from './types';
import { StrategyByDate } from './StrategyByDate';
import { StrategyByName } from './StrategyByName';

export function main() {
  const UserDatabase = new Database<User>();

  UserDatabase.addItem({
    id: 1,
    firstName: 'Nikita',
    lastName: 'Povalishev',
    birthdate: new Date('06.08.1996'),
  });

  UserDatabase.addItem({
    id: 2,
    firstName: 'Anna',
    lastName: 'Povalisheva',
    birthdate: new Date('05.09.1996'),
  });

  const dateStrategy = new StrategyByDate();
  const nameStrategy = new StrategyByName();

  const foundByDate = UserDatabase.pickByStrategy(dateStrategy);
  const foundByName = UserDatabase.pickByStrategy(nameStrategy);

  console.log('Found by date: ', foundByDate);
  console.log('Found by name: ', foundByName);
}
