import { Request } from './types';
import { HttpMiddleware } from './Middleware';

export class AnalyticsMiddleware extends HttpMiddleware {
  public processRequest(request: Request): Request {
    this.urlWatcher(request.url);

    if (this.next) { return this.next.processRequest(request); }
    return request;
  }

  private urlWatcher(url: string) {
    // collect data about URLs
  }
}
