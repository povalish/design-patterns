# Design Pattern: Adapter

### Adapter is a structural design pattern, which allows incompatible objects to collaborate.

The Adapter acts as a wrapper between two objects. It catches calls for one object and transforms them to format and interface recognizable by the second object.


### Pattern usage

```typescript
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
```
