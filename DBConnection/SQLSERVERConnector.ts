import { Creator } from './Creator';
import { Database } from './Database';
import { SQLSERVERDB } from './SQLSERVERDB';

export class SQLSERVERConnector extends Creator {
  getFactory(): Database {
    return new SQLSERVERDB();
  }
}
