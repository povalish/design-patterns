import { PromoCard } from '../base-cards/PromoCard';
import { EducationCard } from './EducationCard';

export class EducationPromoCard extends EducationCard implements PromoCard {
  public readonly title: string;
  public readonly promoTitle: string;

  constructor(title: string, promoTitle: string, universityName: string) {
    super(universityName);
    this.title = title;
    this.promoTitle = promoTitle;
  }

  public getRedirectURL(): string {
    return `https://platform.com/education/promo/${this.title}`;
  }
}
