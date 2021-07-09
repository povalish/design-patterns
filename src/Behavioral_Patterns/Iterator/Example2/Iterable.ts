import { Iterator } from './Iterator';

export interface Iterable<T> {
  getIterator: () => Iterator<T>;
}
