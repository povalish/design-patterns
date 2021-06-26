export interface IEUDevice {
  connectToEUPower: () => void;
}

export interface IUSDevice {
  connectToUSPower: () => void;
}

export interface IUEPowerSocket {
  connectDevice: (device: IEUDevice) => void;
}
