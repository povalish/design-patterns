export interface Visitor<T> {
  processItem: (item: T) => void;
}
