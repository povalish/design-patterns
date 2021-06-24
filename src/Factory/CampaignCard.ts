import { CardType, DTO, ICard } from './types';

export class CampaignCard implements ICard {
  public id: number;
  public type: CardType = 'campaign';
  public name: string;

  public sumRequired: number;
  public sumCollected: number;

  constructor(data: DTO) {
    this.id = data.id;
    this.name = data.name;
    this.sumRequired = data.sumRequired!;
    this.sumCollected = data.sumCollected!;
  }

  public getRedirectURL() {
    return `/campaign/${this.id}`;
  }
}
