import { CardType, DTO, ICard } from './types';
import { CampaignCard } from './CampaignCard';
import { EducationCard } from './EducationCard';

export class CardFactory {
  public static getCardByType(type: CardType, dto: DTO): ICard {
    if (type === 'campaign') { return new CampaignCard(dto); }
    if (type === 'education') { return new EducationCard(dto); }
    throw new Error('');
  }
}
