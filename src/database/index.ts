import { MongoClient } from "mongodb";

const URL = ``;
// Establishes connection with the MongoDB database
export const connectDB = async (): Promise => {
  const mongoClient = await MongoClient.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoClient.db("NAME_OF_DATABSE");

  return {
    collectionName: db.collection("NAME_OF_COLLECTION"),
  };
};
