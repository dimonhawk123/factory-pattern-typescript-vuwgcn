import { Creator } from './Creator';
import { Database } from './Database';
import { PostGressDB } from './PostGressDB';

export class PostGressConnector extends Creator {
  getFactory(): Database {
    return new PostGressDB();
  }

}