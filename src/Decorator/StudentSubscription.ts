import { Feature, ISubscription } from './Subscription';

export class StudentSubscription implements ISubscription {
  private sourceSubscription: ISubscription;
  private STUDENT_COEFFICIENT: number = 0.7;

  public readonly price: number;
  public readonly features: Feature[];

  constructor(sourceSubscription: ISubscription) {
    this.sourceSubscription = sourceSubscription;
    this.price = sourceSubscription.price * this.STUDENT_COEFFICIENT;
    this.features = sourceSubscription.features;
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
