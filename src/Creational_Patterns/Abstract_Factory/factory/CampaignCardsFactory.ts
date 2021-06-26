/* eslint-disable */
import { CardFactory } from './CardFactory';
import { CampaignContentCard } from '../campaigns/CampaignContentCard';
import { CampaignPersonalCard } from '../campaigns/CampaignPersonalCard';
import { CampaignPromoCard } from '../campaigns/CampaignPromoCard';

export class CampaignCardsFactory implements CardFactory {
  public static instance: CampaignCardsFactory = new CampaignCardsFactory();

  private constructor() {}

  public createContentCards(): CampaignContentCard[] {
    return [];
  }

  public createPersonalCards(): CampaignPersonalCard[] {
    return [];
  }

  public createPromoCards(): CampaignPromoCard[] {
    return [];
  }
}
