import { fetch } from './fetch';


export class HttpClient {
  private endpoint?: string;
  private method?: string;
  private headers?: Record<string, string>;
  private isAuthorizedRequest?: boolean = false;

  public setEndpoint(endpoint: string): HttpClient {
    this.endpoint = endpoint;
    return this;
  }

  public setMethod(method: string): HttpClient {
    this.method = method;
    return this;
  }

  public setHeaders(headers: Record<string, string>): HttpClient {
    this.headers = headers;
    return this;
  }

  public setIsAuthorizedRequest(isAuthorized: boolean): HttpClient {
    this.isAuthorizedRequest = isAuthorized;
    return this;
  }

  public makeRequest(): Promise<any> {
    if (!this.endpoint) { throw new Error('Endpoint.'); }
    if (!this.method) { throw new Error('Method.'); }
    if (!this.headers) { throw new Error('Headers.'); }

    return fetch({
      endpoint: this.endpoint,
      method: this.method,
      headers: this.headers,
    });
  }
}
