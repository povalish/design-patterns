import { CardType, DTO, ICard } from './types';

export class EducationCard implements ICard {
  public id: number;
  public type: CardType = 'education';
  public name: string;

  constructor(data: DTO) {
    this.id = data.id;
    this.name = data.name;
  }

  public getRedirectURL() {
    return `/education/${this.id}`;
  }
}
