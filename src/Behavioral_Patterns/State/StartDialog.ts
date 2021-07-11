import { Status } from './Status';
import { WaitForPayment } from './WaitForPayment';
import { Dialog } from './Dialog';


export class StartDialog extends Status {
  protected nextStatus: Status;

  constructor(dialog: Dialog) {
    super(dialog);
    this.nextStatus = new WaitForPayment(dialog);
  }
}
