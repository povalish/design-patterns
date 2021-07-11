import { Dialog } from './Dialog';

export abstract class Status {
  protected currentDialog: Dialog;
  protected abstract readonly nextStatus?: Status;

  protected constructor(dialog: Dialog) {
    this.currentDialog = dialog;
  }

  public next() {
    if (this.nextStatus) {
      this.currentDialog.updateStatus(this.nextStatus);
    }

    throw new Error('Next status is not defined.');
  }
}
