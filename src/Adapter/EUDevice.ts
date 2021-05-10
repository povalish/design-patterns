import { IEUDevice } from './interfaces';

export class EUDevice implements IEUDevice {
  public isConnected: boolean = false;

  public connectToEUPower() {
    this.isConnected = true;
  }
}
