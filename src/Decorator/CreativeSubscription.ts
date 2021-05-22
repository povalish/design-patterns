import { Feature, ISubscription } from './Subscription';

export class CreativeSubscription implements ISubscription {
  private sourceSubscription: ISubscription;
  private CREATIVE_COEFFICIENT: number = 1.3;
  private CREATIVE_FEATURES: Feature[] = [
    { title: 'Creative feature #1', description: '' },
    { title: 'Creative feature #2', description: '' },
    { title: 'Creative feature #3', description: '' },
  ];

  public readonly price: number;
  public readonly features: Feature[];

  constructor(sourceSubscription: ISubscription) {
    this.sourceSubscription = sourceSubscription;
    this.price = sourceSubscription.price * this.CREATIVE_COEFFICIENT;
    this.features = sourceSubscription.features.concat(this.CREATIVE_FEATURES);
  }

  public subscribe(): void {
    this.sourceSubscription.subscribe();
    // submitCreativeSubscription();
  }

  public getDescription(): string {
    return this.features
      .map((feature) => `${feature.title} ${feature.description}`)
      .join(', ');
  }
}
