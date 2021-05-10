import { IUSDevice } from './interfaces';

export class USDevice implements IUSDevice {
  public isConnected: boolean = false;

  public connectToUSPower() {
    this.isConnected = true;
  }
}
