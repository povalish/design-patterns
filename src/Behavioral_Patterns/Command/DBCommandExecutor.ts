/* eslint-disable no-useless-constructor,no-empty-function */
import { DBCommand } from './DBCommand';

export class DBCommandExecutor {
  private static commandLog: DBCommand[] = [];
  private static recentCommands: DBCommand[] = [];


  private constructor() { }


  public static executeCommand(cmd: DBCommand) {
    cmd.execute();
    DBCommandExecutor.commandLog.push(cmd);
  }

  public static undo() {
    const cmd = DBCommandExecutor.commandLog.pop();

    if (cmd) {
      DBCommandExecutor.recentCommands.push(cmd);
      cmd.restore();
    }
  }

  public static redo() {
    const cmd = DBCommandExecutor.recentCommands.pop();

    if (cmd) {
      cmd.execute();
      DBCommandExecutor.commandLog.push(cmd);
    }
  }
}
