export enum CardType {
  Campaign = 'campaign',
  Education = 'education',
}

export type BaseCardFields = {
  id: number;
  name: string;
}

export type CampaignCard = BaseCardFields & {
  type: CardType.Campaign;
  sumRequired: number;
  sumCollected: number;
}

export type EducationCard = BaseCardFields & {
  type: CardType.Education;
  universatyName: string;
  universatyLink: string;
}


export type Card = CampaignCard | EducationCard;
