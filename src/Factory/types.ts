export type CardType = 'campaign' | 'education';

export interface ICard {
  id: number;
  type: CardType;
  name: string;

  getRedirectURL: () => string;
}

export type DTO = {
  id: number;
  type: CardType;
  name: string;
  sumCollected?: number;
  sumRequired?: number;
}
