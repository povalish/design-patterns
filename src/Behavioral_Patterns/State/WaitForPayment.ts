import { Status } from './Status';
import { Dialog } from './Dialog';
import { Chatting } from './Chatting';


export class WaitForPayment extends Status {
  protected nextStatus: Status;

  constructor(dialog: Dialog) {
    super(dialog);
    this.nextStatus = new Chatting(dialog);
  }
}
