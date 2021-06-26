import { IEUDevice, IUSDevice } from './interfaces';

export class EUAdapter implements IEUDevice {
  private device: IUSDevice;

  constructor(device: IUSDevice) {
    this.device = device;
  }


  public connectToEUPower() {
    this.device.connectToUSPower();
  }
}
