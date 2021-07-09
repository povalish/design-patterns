export interface Iterator<T> {
  next: () => T | null;
  done: boolean;
}
