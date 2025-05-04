import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

export const databaseConnect = async() => {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    return client;
}