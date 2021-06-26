import { Card, CardType } from './Card';
import { DTO } from './DTO';

export function createCardFromSource(source: DTO): Card {
  if (source.type === CardType.Campaign) {
    return {
      id: source.id,
      name: source.name,
      type: CardType.Campaign,
      sumRequired: source.sumRequired!,
      sumCollected: source.sumCollected!,
    };
  }

  if (source.type === CardType.Education) {
    return {
      id: source.id,
      name: source.name,
      type: CardType.Education,
      universatyName: source.universatyName!,
      universatyLink: source.universatyLink!,
    };
  }

  throw new Error('Unknown card type.');
}
