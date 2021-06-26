import { ContentCard } from '../base-cards/ContentCard';
import { CampaignCard } from './CampaignCard';

export class CampaignContentCard extends CampaignCard implements ContentCard {
  public readonly title: string;
  public readonly description: string;

  constructor(title: string, description: string, campginName: string) {
    super(campginName);
    this.title = title;
    this.description = description;
  }

  public getRedirectURL(): string {
    return `https://platform.com/content/${this.title}`;
  }
}
