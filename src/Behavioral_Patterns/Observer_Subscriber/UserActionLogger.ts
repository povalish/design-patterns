import { ActionRedirect, Listener, Observer, Unsubscribe, UserAction, } from './types';
import { createObserver } from './createObserver';

export class UserActionLogger {
  private actions: UserAction[] = [];
  private readonly userId: number;
  private redirectsObserver: Observer<ActionRedirect> = createObserver<ActionRedirect>();

  constructor(userId: number) {
    this.userId = userId;
  }

  public log(action: UserAction) {
    this.actions.push(action);

    if (action.type === 'redirect') {
      this.redirectsObserver.publish(action);
    }
  }

  public onUserRedirects(listener: Listener<ActionRedirect>): Unsubscribe {
    return this.redirectsObserver.subscribe(listener);
  }

  public clearLog() {
    this.actions = [];
  }
}
