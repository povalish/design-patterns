import { NotificationBody } from './types';
import { INotification } from './INotification';

// Flyweight class
export class ServiceNotification implements INotification {
  private serviceID: number;

  constructor(serviceID: number) {
    this.serviceID = serviceID;
  }

  public send(body: NotificationBody) {
    // eslint-disable-next-line no-console
    console.log(`[ServiceNotification] to ${this.serviceID} with ${body.message}`);
  }
}
