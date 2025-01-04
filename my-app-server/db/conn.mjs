import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// const connectionString = process.env || "";
// console.log("connnn", connectionString); // Debug to verify the connection string

const client = new MongoClient(
  "mongodb://prathyushab1111:3ElG8u8uQXiZqcIe@cluster0.orxtk.mongodb.net/?retryWrites=true"
);
let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
let db = client.db("sample_mflix");
// console.log("dbbbb", db);
export default db;
