import { Request } from './types';

export abstract class HttpMiddleware {
  protected next?: HttpMiddleware;

  public linkWith(middleware: HttpMiddleware): HttpMiddleware {
    this.next = middleware;
    return this.next;
  }

  public abstract processRequest(request: Request): Request;
}
