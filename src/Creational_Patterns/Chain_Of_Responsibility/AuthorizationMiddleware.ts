import { Request } from './types';
import { HttpMiddleware } from './Middleware';

export class AuthorizationMiddleware extends HttpMiddleware {
  public processRequest(request: Request): Request {
    this.watchFor401Error(request);

    if (this.next) { return this.next.processRequest(request); }
    return request;
  }

  private watchFor401Error(request: Request) {
    if (request.status === 401) {
      // do some refresh logic
    }
  }
}
