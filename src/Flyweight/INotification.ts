import { NotificationBody } from './types';

export interface INotification {
  send: (body: NotificationBody) => void;
}
