"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.addUser = exports.findUser = void 0;
const connections_1 = require("./connections");
const findUser = async (username) => {
    try {
        const usersCollection = await (0, connections_1.connectToUsers)();
        const query = { name: username };
        const user = await usersCollection.findOne(query);
        return {
            _id: user === null || user === void 0 ? void 0 : user._id,
            name: user === null || user === void 0 ? void 0 : user.name,
            storedPassword: user === null || user === void 0 ? void 0 : user.password
        };
    }
    finally {
        await connections_1.closeConnection;
    }
};
exports.findUser = findUser;
const addUser = async (username, password) => {
    const newUser = {
        name: username,
        password,
    };
    const usersCollection = await (0, connections_1.connectToUsers)();
    const result = await usersCollection.insertOne(newUser);
    if (result.insertedCount === 1) {
        return console.dir('Successfully added user.');
    }
    return console.dir('Unable to add user.');
};
exports.addUser = addUser;
const deleteUser = async (username) => {
    try {
        const usersCollection = await (0, connections_1.connectToUsers)();
        const query = { name: username };
        const result = await usersCollection.deleteOne(query);
        if (result.deletedCount === 1) {
            return console.dir('Successfully deleted user.');
        }
        return console.dir('No users matched the query. Deleted 0 users.');
    }
    finally {
        await (0, connections_1.closeConnection)();
    }
};
exports.deleteUser = deleteUser;
