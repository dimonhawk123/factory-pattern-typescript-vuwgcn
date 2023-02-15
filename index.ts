import { Database } from './../DBConnection/Connections';

class App {
  constructor(db: string) {
    const database = new Database(db);
    console.log(database.connect());
  }
}
// Database
// Console
// File
new App('POSTGRESS');