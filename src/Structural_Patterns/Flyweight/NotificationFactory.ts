import { MailNotification } from './MailNotification';
import { ServiceNotification } from './ServiceNotification';
import { ClientNotification } from './ClientNotification';


export abstract class NotificationFactory {
  private static serviceNotifications: Map<number, ServiceNotification> = new Map();
  private static mailNotifications: Map<string, MailNotification> = new Map();
  private static clientNotifications: Map<number, ClientNotification> = new Map();

  public static createServiceNotification(serviceID: number): ServiceNotification {
    if (!NotificationFactory.serviceNotifications.has(serviceID)) {
      NotificationFactory.serviceNotifications.set(serviceID, new ServiceNotification(serviceID));
    }

    return NotificationFactory.serviceNotifications.get(serviceID)!;
  }

  public static createMailNotification(email: string): MailNotification {
    if (!NotificationFactory.mailNotifications.has(email)) {
      NotificationFactory.mailNotifications.set(email, new MailNotification(email));
    }

    return NotificationFactory.mailNotifications.get(email)!;
  }

  public static createClientNotification(udid: number): ClientNotification {
    if (!NotificationFactory.clientNotifications.has(udid)) {
      NotificationFactory.clientNotifications.set(udid, new ClientNotification(udid));
    }

    return NotificationFactory.clientNotifications.get(udid)!;
  }
}
