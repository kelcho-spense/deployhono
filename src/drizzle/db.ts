
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "./schema";  //import all schemas from the schema file

//get the database url from  env vars & create a new client
export const client = new Client({
  connectionString: process.env.DATABASE_URL as string, 
});

//connect to the database
const main = async () => {
  await client.connect(); 
}
main();

//create a drizzle instance with the client and schema
const db = drizzle(client, { schema, logger: true });  

//export the db instance to be used in other files
export default db;