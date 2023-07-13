"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeConnection = exports.connectToSavedGames = exports.connectToUsers = void 0;
const mongodb_1 = require("mongodb");
const connectionString = "mongodb://game-engine:game-engine@game-engine-mongo:27017";
const client = new mongodb_1.MongoClient(connectionString, { useUnifiedTopology: true });
const connectToLLM = (collection) => __awaiter(void 0, void 0, void 0, function* () {
    yield client.connect();
    const database = client.db('game-engine');
    return database.collection(collection);
});
const connectToUsers = () => connectToLLM('users');
exports.connectToUsers = connectToUsers;
const connectToSavedGames = () => connectToLLM('savedGames');
exports.connectToSavedGames = connectToSavedGames;
const closeConnection = () => __awaiter(void 0, void 0, void 0, function* () { return yield client.close(); });
exports.closeConnection = closeConnection;
