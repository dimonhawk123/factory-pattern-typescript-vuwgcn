import { Database } from "./Database";

export class SQLSERVERDB implements Database {
  connect(): string {
    return 'Nos conectamos a SQLSERVER';
  }

}