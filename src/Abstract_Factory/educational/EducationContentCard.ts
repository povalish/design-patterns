import { ContentCard } from '../base-cards/ContentCard';
import { EducationCard } from './EducationCard';

export class EducationContentCard extends EducationCard implements ContentCard {
  public readonly title: string;
  public readonly description: string;

  constructor(title: string, description: string, universityName: string) {
    super(universityName);
    this.title = title;
    this.description = description;
  }

  public getRedirectURL(): string {
    return `https://platform.com/education/content/${this.title}`;
  }
}
