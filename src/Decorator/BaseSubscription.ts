import { Feature, ISubscription } from './Subscription';

export class BaseSubscription implements ISubscription {
  public readonly price: number = 799;
  public readonly features: Feature[] = [
    { title: 'Feature #1', description: '' },
    { title: 'Feature #2', description: '' },
    { title: 'Feature #3', description: '' },
    { title: 'Feature #4', description: '' },
    { title: 'Feature #5', description: '' },
  ];

  public subscribe(): void {
    // subscribe code
  }

  public getDescription(): string {
    return this.features
      .map((feature) => `${feature.title} ${feature.description}`)
      .join(', ');
  }
}
