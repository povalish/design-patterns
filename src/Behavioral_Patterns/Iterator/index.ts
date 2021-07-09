/* eslint-disable no-restricted-syntax,no-console */
import { CardDatabase } from './Example1/CardDatabase';
import { PetDatabase } from './Example2/PetDatabase';

export function main() {
  // const Database = new CardDatabase();
  //
  // Database.add({ id: 1, name: 'Card #1' });
  // Database.add({ id: 2, name: 'Card #2' });
  // Database.add({ id: 3, name: 'Card #3' });
  // Database.add({ id: 4, name: 'Card #4' });
  // Database.add({ id: 5, name: 'Card #5' });
  // Database.add({ id: 6, name: 'Card #6' });
  //
  // const simpleDBIterator = Database.getIterator();
  //
  // for (const item of simpleDBIterator) {
  //   console.log(item);
  // }


  const Database = new PetDatabase();

  Database.add({ id: 1, name: 'Pet #1' });
  Database.add({ id: 2, name: 'Pet #2' });
  Database.add({ id: 3, name: 'Pet #3' });
  Database.add({ id: 4, name: 'Pet #4' });
  Database.add({ id: 5, name: 'Pet #5' });
  Database.add({ id: 6, name: 'Pet #6' });

  const iterator = Database.getIterator();

  while (!iterator.done) {
    const entity = iterator.next();
    console.log(`Pet ${entity!.id}: ${entity!.name}`);
  }
}
