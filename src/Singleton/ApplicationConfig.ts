export class ApplicationConfig {
  private static instance: ApplicationConfig;

  public readonly version: string = '0.0.1';
  public readonly baseURL: string = 'https://some-base.com/api'


  // eslint-disable-next-line no-useless-constructor,no-empty-function
  private constructor() {}


  public static getInstance() {
    if (!ApplicationConfig.instance) {
      ApplicationConfig.instance = new ApplicationConfig();
    }

    return ApplicationConfig.instance;
  }
}
