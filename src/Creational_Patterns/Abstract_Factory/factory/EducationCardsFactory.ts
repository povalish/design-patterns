/* eslint-disable */
import { CardFactory } from './CardFactory';
import { EducationContentCard } from '../educational/EducationContentCard';
import { EducationPersonalCard } from '../educational/EducationPersonalCard';
import { EducationPromoCard } from '../educational/EducationPromoCard';

export class EducationCardsFactory implements CardFactory {
  public static instance: EducationCardsFactory = new EducationCardsFactory();

  private constructor() {}

  public createContentCards(): EducationContentCard[] {
    return [];
  }

  public createPersonalCards(): EducationPersonalCard[] {
    return [];
  }

  public createPromoCards(): EducationPromoCard[] {
    return [];
  }
}
