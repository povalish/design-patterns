import { CampaignCard } from './CampaignCard';
import { PromoCard } from '../base-cards/PromoCard';

export class CampaignPromoCard extends CampaignCard implements PromoCard {
  public readonly title: string;
  public readonly promoTitle: string;

  constructor(title: string, promoTitle: string, campginName: string) {
    super(campginName);
    this.title = title;
    this.promoTitle = promoTitle;
  }

  public getRedirectURL(): string {
    return `https://platform.com/promo/${this.title}`;
  }
}
