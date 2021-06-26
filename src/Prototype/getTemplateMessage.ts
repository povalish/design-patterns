import { MessageTemplate } from './MessageTemplate';

export function getTemplateMessage(templateName: string): MessageTemplate | undefined {
  const mailTemplate = new MessageTemplate('mail_metadata');
  mailTemplate.type = 'MAIL';
  mailTemplate.message = 'Some message for MAIL clients.';

  const pushTemplate = new MessageTemplate('push_metadata');
  pushTemplate.type = 'PUSH';
  pushTemplate.message = 'Some message for PUSH notifications';

  const socketTemplate = new MessageTemplate('socket_metadata');
  socketTemplate.type = 'SOCKET';
  socketTemplate.message = 'Some message for SOCKET clients.';

  const predefinedTemplates = new Map<string, MessageTemplate>([
    ['MAIL', mailTemplate],
    ['PUSH', pushTemplate],
    ['SOCKET', socketTemplate],
  ]);


  return predefinedTemplates.get(templateName)?.clone();
}
