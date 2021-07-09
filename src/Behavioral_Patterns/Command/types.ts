export type Entity = {
  id: number;
  name: string;
}


export type Pet = Entity & {
  age: number;
}
