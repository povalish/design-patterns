import { NotificationBody } from './types';
import { INotification } from './INotification';

// Flyweight class
export class MailNotification implements INotification {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  public send(body: NotificationBody) {
    // eslint-disable-next-line no-console
    console.log(`[MailNotification] to ${this.email}/${body.userId || ''} with ${body.message}`);
  }
}
