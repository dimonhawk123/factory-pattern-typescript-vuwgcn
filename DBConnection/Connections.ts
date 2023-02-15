import { CONSTANTS } from "./constants";
import { MySQLConnector } from "./MySQL/MySqlConnector";
import { PostGressConnector } from "./PostGressConnector";
import { Creator } from "./Creator";
import { SQLSERVERConnector } from "./SQLSERVERConnector";

export class Database {
  private database: string;
  public instance: Creator;

  constructor(db: string = "MYSQL") {
    this.database = db.toLocaleUpperCase();
    this.getConnection();
  }

  getConnection() {
    switch (this.database) {
      case CONSTANTS.MYSQL:
        this.instance = new MySQLConnector();
        break;
      case CONSTANTS.POSTGRESS:
        this.instance = new PostGressConnector();
        break;
      case CONSTANTS.SQLSERVER:
        this.instance = new SQLSERVERConnector();
        break;
      default:
        this.instance = new MySQLConnector();
        break;
    }
  }

  connect() {
    return this.instance.connect();
  }
}
