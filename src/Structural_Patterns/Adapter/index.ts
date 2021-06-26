/**
 * Design Pattern: Adapter
 * Also known as: Wrapper
 */

import { EUPowerSocket } from './EUPowerSocket';
import { EUDevice } from './EUDevice';
import { USDevice } from './USDevice';
import { EUAdapter } from './EUAdapter';


// Create Service (Power provider) witch
// can interact ONLY with EU Devices
const euSocket = new EUPowerSocket();
// Create compatible device with EU Socket
const euDevice = new EUDevice();

euSocket.connectDevice(euDevice); // work's fine

// Create incompatible device with EU Socket
const usDevice = new USDevice();
// Create adapter to interact with EU Socket
const euAdapter = new EUAdapter(usDevice);

// Now US device with adapter can interact with EU Socket
euSocket.connectDevice(euAdapter);
