import { PersonalCard } from '../base-cards/PersonalCard';
import { EducationCard } from './EducationCard';

export class EducationPersonalCard extends EducationCard implements PersonalCard {
  public readonly title: string;
  public readonly username: string;

  constructor(title: string, username: string, universityName: string) {
    super(universityName);
    this.title = title;
    this.username = username;
  }

  public getRedirectURL(): string {
    return `https://platform.com/education/private-feed/${this.title}`;
  }
}
