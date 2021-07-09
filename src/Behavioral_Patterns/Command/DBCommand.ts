import { AppDatabase } from './AppDatabase';

export abstract class DBCommand {
  protected dbRef = AppDatabase.instance;
  public abstract execute(): void;
  public abstract restore(): void;
}
