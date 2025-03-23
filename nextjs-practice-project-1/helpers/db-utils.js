import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    // need to add mongodb connection string
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getDocumentsByEvents(client, collection, sort, eventId) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find({ eventId: eventId })
    .sort(sort)
    .toArray();

  return documents;
}
