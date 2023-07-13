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
exports.deleteUser = exports.addUser = exports.findUser = void 0;
const connections_1 = require("./connections");
const findUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersCollection = yield (0, connections_1.connectToUsers)();
        const query = { name: username };
        const user = yield usersCollection.findOne(query);
        return {
            _id: user === null || user === void 0 ? void 0 : user.id,
            name: user === null || user === void 0 ? void 0 : user.name,
            storedPassword: user === null || user === void 0 ? void 0 : user.password
        };
    }
    finally {
        yield connections_1.closeConnection;
    }
});
exports.findUser = findUser;
const addUser = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        name: username,
        password,
    };
    const usersCollection = yield (0, connections_1.connectToUsers)();
    const result = yield usersCollection.insertOne(newUser);
    if (result.insertedCount === 1) {
        return console.dir('Successfully added user.');
    }
    return console.dir('Unable to add user.');
});
exports.addUser = addUser;
const deleteUser = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersCollection = yield (0, connections_1.connectToUsers)();
        const query = { name: username };
        const result = yield usersCollection.deleteOne(query);
        if (result.deletedCount === 1) {
            return console.dir('Successfully deleted user.');
        }
        return console.dir('No users matched the query. Deleted 0 users.');
    }
    finally {
        yield (0, connections_1.closeConnection)();
    }
});
exports.deleteUser = deleteUser;
