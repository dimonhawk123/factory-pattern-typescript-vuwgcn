import { Creator } from "./../Creator";
import { MySQLDB } from "MySQLDB";
import { Database } from "../Database";

// Este será el creator de Mysql

export class MySQLConnector extends Creator {
  getFactory(): Database {
    return new MySQLDB();
  }
}
