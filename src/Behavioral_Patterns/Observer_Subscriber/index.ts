import { UserActionLogger } from './UserActionLogger';
import { ActionRedirect } from './types';

export function main() {
  const adminLogger = new UserActionLogger(1029);

  const onAdminRedirects = (action: ActionRedirect) => {
    console.log(`Admin has been redirected to ${action.page}`);
  };

  const unsubscribe = adminLogger.onUserRedirects(onAdminRedirects);

  adminLogger.log({
    type: 'view',
    categoryId: 0
  });
  adminLogger.log({
    type: 'view',
    categoryId: 1
  });
  adminLogger.log({
    type: 'redirect',
    page: 'dashboard'
  });
  adminLogger.log({
    type: 'view',
    categoryId: 0
  });
  adminLogger.log({
    type: 'redirect',
    page: 'settings'
  });
  adminLogger.log({
    type: 'redirect',
    page: 'main page'
  });

  unsubscribe();

  adminLogger.log({
    type: 'redirect',
    page: 'settings'
  });
  adminLogger.log({
    type: 'redirect',
    page: 'main page'
  });
}
