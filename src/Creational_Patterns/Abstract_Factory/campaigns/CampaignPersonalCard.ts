import { CampaignCard } from './CampaignCard';
import { PersonalCard } from '../base-cards/PersonalCard';

export class CampaignPersonalCard extends CampaignCard implements PersonalCard {
  public readonly title: string;
  public readonly username: string;

  constructor(title: string, username: string, campginName: string) {
    super(campginName);
    this.title = title;
    this.username = username;
  }

  public getRedirectURL(): string {
    return `https://platform.com/private-feed/${this.title}`;
  }
}
