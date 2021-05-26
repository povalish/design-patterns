import { LocalStorage, localStorage } from './localStorage';


export class ApplicationStorage implements LocalStorage {
  private readonly version: string;
  private logHistory: Map<Date, string> = new Map();

  constructor(version: string) {
    this.version = version;
    this.logHistory.clear();
  }

  public getItem(key: string): string | null {
    this.logHistory.set(new Date(), `Getting item with ${key}`);
    return localStorage.getItem(`${this.version}-${key}`);
  }

  public setItem(key: string, value: string): void {
    this.logHistory.set(new Date(), `Setting item with ${key}`);
    localStorage.setItem(`${this.version}-${key}`, value);
  }

  public removeItem(key: string): void {
    this.logHistory.set(new Date(), `Removing item with ${key}`);
    localStorage.removeItem(key);
  }
}
