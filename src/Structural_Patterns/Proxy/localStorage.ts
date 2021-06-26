// Mock browser localStorage

export interface LocalStorage {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
}

class LocalStorageMock implements LocalStorage {
  public getItem(key: string): string | null {
    return key;
  }

  public setItem(key: string, value: string): void {
  }

  public removeItem(key: string): void {
  }
}


export const localStorage = new LocalStorageMock();
