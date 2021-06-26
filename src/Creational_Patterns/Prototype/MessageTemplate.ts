import { Cloneable } from './Cloneable';

export class MessageTemplate implements Cloneable<MessageTemplate> {
  public type: string = '';
  public message: string = '';

  private readonly metadata: string;

  constructor(metadata: string) {
    this.metadata = metadata;
  }

  public clone(): MessageTemplate {
    const cloned = new MessageTemplate(this.metadata);
    cloned.type = this.type;
    cloned.message = this.message;
    return cloned;
  }
}
