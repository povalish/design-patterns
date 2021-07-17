/* eslint-disable no-console */
const Amplitude = {
  init: (key: string) => key,
  logEvent: (eventName: string) => eventName,
};

const AppMetrica = {
  activate: (key: string) => key,
  reportEvent: (eventName: string) => eventName,
};


export class Analytics {
  public static instance: Analytics = new Analytics();

  private amplitudeKey: string = 'some-amplitude-key';
  private appmetricaKey: string = 'some-appmetrica-key';

  // eslint-disable-next-line no-useless-constructor,no-empty-function
  private constructor() {
    // init each analytics widgets
    Amplitude.init(this.amplitudeKey);
    AppMetrica.activate(this.appmetricaKey);
  }

  public logEvent(eventName: string) {
    Amplitude.logEvent(eventName);
    AppMetrica.reportEvent(eventName);
    console.log(`Log Event: ${eventName}`);
  }
}
