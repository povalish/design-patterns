/* eslint-disable no-trailing-spaces,no-useless-constructor,no-empty-function */


import { Status } from './Status';
import { StartDialog } from './StartDialog';


export class Dialog {
  private status: Status = new StartDialog(this);
  public messages: string[] = [];

  constructor() {
  }

  public updateStatus(newStatus: Status) {
    this.status = newStatus;
  }
}
