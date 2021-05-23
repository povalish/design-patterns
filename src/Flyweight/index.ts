import { NotificationFactory } from './NotificationFactory';
import { INotification } from './INotification';

export const mail = () => {
  // Создаем уведомления для определенных целей
  // К примеру, группа сервисов/клиентов чьи id кратны 5
  const firstStack: INotification[] = [
    NotificationFactory.createServiceNotification(120),
    NotificationFactory.createServiceNotification(125),
    NotificationFactory.createServiceNotification(130),
    NotificationFactory.createMailNotification('120@mail.com'),
    NotificationFactory.createMailNotification('125@mail.com'),
    NotificationFactory.createMailNotification('130@mail.com'),
    NotificationFactory.createClientNotification(120),
    NotificationFactory.createClientNotification(125),
    NotificationFactory.createClientNotification(130),
  ];

  // Создаем уведомления для группы сервисов, чьи ID кратны 10
  // Т.к ранее уведомления для этих сервисов/клиентов уже были созданы
  // мы просто переиспользуем эти уведомления
  const secondStack: INotification[] = [
    NotificationFactory.createServiceNotification(120),
    NotificationFactory.createServiceNotification(130),
    NotificationFactory.createMailNotification('120@mail.com'),
    NotificationFactory.createMailNotification('130@mail.com'),
    NotificationFactory.createClientNotification(120),
    NotificationFactory.createClientNotification(130),
  ];

  // Теперь с помощью внешнего состояния (message) можем
  // отправлять разные уведомления, не меняя 'исходное уведомление'
  firstStack.map((notif) => notif.send({ message: 'First Message', userId: 1 }));
  secondStack.map((notif) => notif.send({ message: 'Second message' }));
};
