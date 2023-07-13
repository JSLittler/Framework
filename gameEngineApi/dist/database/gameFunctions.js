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
exports.managePlayerGames = exports.deleteSavedGame = exports.addSavedGame = exports.findSavedGameIdByUser = exports.findSavedGame = exports.findGameByUser = void 0;
const connections_1 = require("./connections");
const findGameByUser = (username, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedGamesCollection = yield (0, connections_1.connectToSavedGames)();
        const query = { owner: { username, userId: `${id}` } };
        const savedGame = yield savedGamesCollection.findOne(query);
        return savedGame;
    }
    finally {
        yield connections_1.closeConnection;
    }
});
exports.findGameByUser = findGameByUser;
const findSavedGame = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedGamesCollection = yield (0, connections_1.connectToSavedGames)();
        const query = { _id: id };
        const savedGame = yield savedGamesCollection.findOne(query);
        return savedGame;
    }
    finally {
        yield connections_1.closeConnection;
    }
});
exports.findSavedGame = findSavedGame;
const findSavedGameIdByUser = (username, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedGamesCollection = yield (0, connections_1.connectToSavedGames)();
        const query = { owner: {
                username,
                userId
            } };
        const result = yield savedGamesCollection.findOne(query);
        return result === null || result === void 0 ? void 0 : result._id;
    }
    catch (err) {
        console.log(err);
    }
    finally {
        yield connections_1.closeConnection;
    }
});
exports.findSavedGameIdByUser = findSavedGameIdByUser;
const addSavedGame = (savedGame) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedGamesCollection = yield (0, connections_1.connectToSavedGames)();
        const result = yield savedGamesCollection.insertOne(savedGame);
        if (result.insertedCount === 1) {
            return console.dir('Successfully saved game.');
        }
        return console.dir('Unable to save game.');
    }
    finally {
        yield (0, connections_1.closeConnection)();
    }
});
exports.addSavedGame = addSavedGame;
const deleteSavedGame = (gameId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const savedGamesCollection = yield (0, connections_1.connectToSavedGames)();
        const query = { _id: gameId };
        const result = yield savedGamesCollection.deleteOne(query);
        if (result.deletedCount === 1) {
            return console.dir('Successfully deleted saved game.');
        }
        return console.dir('No saved games matched the query. Deleted 0 saved games.');
    }
    finally {
        yield (0, connections_1.closeConnection)();
    }
});
exports.deleteSavedGame = deleteSavedGame;
const managePlayerGames = (game, username, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const previouslySavedGame = yield (0, exports.findSavedGameIdByUser)(username, userId);
    if (previouslySavedGame) {
        yield (0, exports.deleteSavedGame)(previouslySavedGame);
    }
    yield (0, exports.addSavedGame)(game);
});
exports.managePlayerGames = managePlayerGames;
