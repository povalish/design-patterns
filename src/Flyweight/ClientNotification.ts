// Flyweight class
import { INotification } from './INotification';
import { NotificationBody } from './types';

export class ClientNotification implements INotification {
  private udid: number;

  constructor(udid: number) {
    this.udid = udid;
  }

  public send(body: NotificationBody) {
    // eslint-disable-next-line no-console
    console.log(`[ClientNotification] to ${this.udid} with ${body.message}`);
  }
}
