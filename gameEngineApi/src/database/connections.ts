import { default as mongodb, MongoClient } from 'mongodb';

const connectionString = "mongodb://game-engine:game-engine@game-engine-mongo:27017";
const client = new MongoClient(connectionString, { useUnifiedTopology: true } as mongodb.ConnectOptions);

const connectToLLM = async (collection: string) => {
  await client.connect();
  const database = client.db('game-engine');

  return database.collection(collection);
}

export const connectToUsers = () => connectToLLM('users');

export const connectToSavedGames = () => connectToLLM('savedGames');

export const closeConnection = async () => await client.close();
