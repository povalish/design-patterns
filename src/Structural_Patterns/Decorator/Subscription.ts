// eslint-disable-next-line max-classes-per-file
export type Feature = {
  title: string;
  description: string;
}


export interface ISubscription {
  price: number;
  features: Feature[];
  subscribe: () => void;
  getDescription: () => string;
}
