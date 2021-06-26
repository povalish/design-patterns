import { Feature, ISubscription } from './Subscription';

export class ProfessionalSubscription implements ISubscription {
  private sourceSubscription: ISubscription;
  private PRO_COEFFICIENT: number = 5.1;
  private PRO_FEATURES: Feature[] = [
    { title: 'Professional feature #1', description: '' },
    { title: 'Professional feature #2', description: '' },
    { title: 'Professional feature #3', description: '' },
  ];

  public readonly price: number;
  public readonly features: Feature[];

  constructor(sourceSubscription: ISubscription) {
    this.sourceSubscription = sourceSubscription;
    this.price = sourceSubscription.price * this.PRO_COEFFICIENT;
    this.features = sourceSubscription.features.concat(this.PRO_FEATURES);
  }

  public subscribe(): void {
    this.sourceSubscription.subscribe();
    // submitProfessionalSubscription();
  }

  public getDescription(): string {
    return this.features
      .map((feature) => `${feature.title} ${feature.description}`)
      .join(', ');
  }
}
