/* eslint-disable no-useless-constructor,no-empty-function */

export class AppDatabase {
  private appMemory = new Map<string, any>();
  public static instance = new AppDatabase();

  private constructor() { }

  public saveItem<T>(key: string, data: T) {
    this.appMemory.set(key, data);
  }

  public getItem<T>(key: string): T | undefined {
    return this.appMemory.get(key) as T | undefined;
  }

  public removeItem(key: string) {
    this.appMemory.delete(key);
  }

  public clearMemory() {
    this.appMemory.clear();
  }
}
