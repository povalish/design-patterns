import { ContentCard } from '../base-cards/ContentCard';
import { PersonalCard } from '../base-cards/PersonalCard';
import { PromoCard } from '../base-cards/PromoCard';

export interface CardFactory {
  createContentCards: () => ContentCard[];
  createPersonalCards: () => PersonalCard[];
  createPromoCards: () => PromoCard[];
}
