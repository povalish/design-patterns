import { Pet } from './types';
import { Save } from './Save';
import { DBCommandExecutor } from './DBCommandExecutor';
import { Remove } from './Remove';


function main() {
  const petsFromRemoteDB: Pet[] = [
    { id: 1, name: 'Bulldog', age: 2 },
    { id: 2, name: 'Pug', age: 12 },
    { id: 3, name: 'Poodle', age: 7 },
    { id: 4, name: 'French Bulldog', age: 3 },
    { id: 5, name: 'Boxer', age: 17 },
  ];

  petsFromRemoteDB.forEach((pet) => {
    const saveCmd = new Save<Pet>(pet);
    DBCommandExecutor.executeCommand(saveCmd);
  });

  const removePet1Cmd = new Remove<Pet>(petsFromRemoteDB[0]!);
  const removePet3Cmd = new Remove<Pet>(petsFromRemoteDB[2]!);

  DBCommandExecutor.executeCommand(removePet1Cmd);
  DBCommandExecutor.executeCommand(removePet3Cmd);

  DBCommandExecutor.undo();
  DBCommandExecutor.undo();

  DBCommandExecutor.redo();
  DBCommandExecutor.redo();
}
