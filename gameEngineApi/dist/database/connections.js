"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeConnection = exports.connectToSavedGames = exports.connectToUsers = void 0;
const mongodb_1 = require("mongodb");
const connectionString = "mongodb://game-engine:game-engine@game-engine-mongo:27017";
const client = new mongodb_1.MongoClient(connectionString, { useUnifiedTopology: true });
const connectToCollection = async (collection) => {
    await client.connect();
    const database = client.db('game-engine');
    return database.collection(collection);
};
const connectToUsers = () => connectToCollection('users');
exports.connectToUsers = connectToUsers;
const connectToSavedGames = () => connectToCollection('savedGames');
exports.connectToSavedGames = connectToSavedGames;
const closeConnection = async () => await client.close();
exports.closeConnection = closeConnection;
