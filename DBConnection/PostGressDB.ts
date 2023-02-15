import { Database } from "./Database";

export class PostGressDB implements Database {
  connect(): string {
    return 'Nos conectamos a Postgress';
  }

}