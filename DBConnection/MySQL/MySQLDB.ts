import { Database } from "./../Database";

export class MySQLDB implements Database {
  connect(): string {
    return "Nos conectamos a MySQL";
  }
}
