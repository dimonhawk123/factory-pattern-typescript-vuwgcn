import { Database } from './Database';

export abstract class Creator {
  abstract getFactory(): Database;

  connect(): string {
    const object = this.getFactory();
    return object.connect();
  }
}