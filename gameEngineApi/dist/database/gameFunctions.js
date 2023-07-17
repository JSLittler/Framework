"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.managePlayerGames = exports.deleteSavedGame = exports.addSavedGame = exports.findSavedGameIdByUser = exports.findSavedGame = exports.findGameByUser = void 0;
const connections_1 = require("./connections");
const findGameByUser = async (username, userId) => {
    try {
        const savedGamesCollection = await (0, connections_1.connectToSavedGames)();
        const query = { owner: { username, userId, } };
        const savedGame = await savedGamesCollection.findOne(query);
        return savedGame;
    }
    finally {
        await connections_1.closeConnection;
    }
};
exports.findGameByUser = findGameByUser;
const findSavedGame = async (id) => {
    try {
        const savedGamesCollection = await (0, connections_1.connectToSavedGames)();
        const query = { _id: id };
        const savedGame = await savedGamesCollection.findOne(query);
        return savedGame;
    }
    finally {
        await connections_1.closeConnection;
    }
};
exports.findSavedGame = findSavedGame;
const findSavedGameIdByUser = async (username, userId) => {
    try {
        const savedGamesCollection = await (0, connections_1.connectToSavedGames)();
        const query = { owner: {
                username,
                userId
            } };
        const result = await savedGamesCollection.findOne(query);
        return result === null || result === void 0 ? void 0 : result._id;
    }
    catch (err) {
        console.log(err);
    }
    finally {
        await connections_1.closeConnection;
    }
};
exports.findSavedGameIdByUser = findSavedGameIdByUser;
const addSavedGame = async (savedGame) => {
    try {
        const savedGamesCollection = await (0, connections_1.connectToSavedGames)();
        const result = await savedGamesCollection.insertOne(savedGame);
        if (result.insertedId === savedGame._id) {
            return console.dir('Successfully saved game.');
        }
        return console.dir('Unable to save game.');
    }
    finally {
        await (0, connections_1.closeConnection)();
    }
};
exports.addSavedGame = addSavedGame;
const deleteSavedGame = async (gameId) => {
    try {
        const savedGamesCollection = await (0, connections_1.connectToSavedGames)();
        const query = { _id: gameId };
        const result = await savedGamesCollection.deleteOne(query);
        if (result.deletedCount === 1) {
            return console.dir('Successfully deleted saved game.');
        }
        return console.dir('No saved games matched the query. Deleted 0 saved games.');
    }
    finally {
        await (0, connections_1.closeConnection)();
    }
};
exports.deleteSavedGame = deleteSavedGame;
const managePlayerGames = async (game, username, userId) => {
    const previouslySavedGame = await (0, exports.findSavedGameIdByUser)(username, userId);
    if (previouslySavedGame) {
        await (0, exports.deleteSavedGame)(previouslySavedGame);
    }
    await (0, exports.addSavedGame)(game);
};
exports.managePlayerGames = managePlayerGames;
