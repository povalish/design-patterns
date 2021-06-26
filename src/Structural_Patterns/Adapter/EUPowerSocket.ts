import { IUEPowerSocket, IEUDevice } from './interfaces';


export class EUPowerSocket implements IUEPowerSocket {
  public isPluggedIn: boolean = false;

  public connectDevice(device: IEUDevice) {
    device.connectToEUPower();
    this.isPluggedIn = true;
  }
}
