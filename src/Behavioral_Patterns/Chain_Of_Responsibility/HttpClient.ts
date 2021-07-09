import { FetchAgent, Request, Response } from './types';
import { HttpMiddleware } from './Middleware';

// TODO: in testing cases need to mock functionality (not only types)
const fetch: FetchAgent = (opt: any): Response => undefined;

export class HttpClient {
  private agent: FetchAgent = fetch;
  private baseURL = '';
  private defaultMethod = 'GET';
  private defaultHeaders: Record<string, string> = {};
  private middlewares: HttpMiddleware[] = [];

  public setBaseURL(url: string): HttpClient {
    this.baseURL = url;
    return this;
  }

  public setAgent(agent: FetchAgent): HttpClient {
    this.agent = agent;
    return this;
  }

  public setDefaultMethod(method: string): HttpClient {
    this.defaultMethod = method;
    return this;
  }

  public setDefaultHeaders(headers: Record<string, string>): HttpClient {
    this.defaultHeaders = headers;
    return this;
  }

  public setMiddleware(middleware: HttpMiddleware): HttpClient {
    this.middlewares.push(middleware);
    return this;
  }

  private linkMiddlewares(): HttpMiddleware {
    const rootMiddleware = this.middlewares[0]!;
    let currentMiddleware = rootMiddleware;

    this.middlewares.forEach((m) => {
      currentMiddleware = currentMiddleware.linkWith(m);
    });

    return rootMiddleware;
  }

  public makeRequest(opt: any): Response {
    const middleware = this.linkMiddlewares();
    return this.agent(opt).then((resp: Request) => middleware.processRequest(resp));
  }
}
