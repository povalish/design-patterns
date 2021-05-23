export type Priority = 'high' | 'medium' | 'low';

export type NotificationBody = {
  message: string;
  userId?: number;
}
