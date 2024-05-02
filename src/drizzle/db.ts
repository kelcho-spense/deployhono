
import "dotenv/config";
import * as schema from "./schema";  //import all schemas from the schema file
// import { drizzle } from "drizzle-orm/node-postgres";
// import { Client } from "pg";

// //get the database url from  env vars & create a new client
// export const client = new Client({
//   connectionString: process.env.DATABASE_URL as string, 
// });

// //connect to the database
// const main = async () => {
//   await client.connect(); 
// }
// main();

// //create a drizzle instance with the client and schema
// const db = drizzle(client, { schema, logger: true });  

// //export the db instance to be used in other files
// export default db;



// NEON

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

export const connection = neon(process.env.DATABASE_URL!);
const db = drizzle(connection,{ schema, logger: true });

export default db;