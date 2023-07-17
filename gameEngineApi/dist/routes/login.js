"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userFunctions_1 = require("../database/userFunctions");
const gameFunctions_1 = require("../database/gameFunctions");
const pageConfig_1 = require("../pageConfig");
const loginRoutes = (app) => {
    app.get('/slm/login', async (req, res) => {
        const { username, password } = req.headers;
        if (!username && !password) {
            res.status(401).send('You do not have rights to visit this page');
        }
        const { _id, name, storedPassword } = await (0, userFunctions_1.findUser)((username === null || username === void 0 ? void 0 : username.toString()) || '');
        const userDetails = {
            id: _id,
            username: name,
            loggedIn: true
        };
        const savedGame = await (0, gameFunctions_1.findGameByUser)(name, _id);
        const config = await (0, pageConfig_1.getSlmSelectGamePage)();
        const response = {
            state: {
                userDetails,
                game: savedGame
            },
            config
        };
        return storedPassword === password ? res.send(response) : res.send('incorrect username or password');
    });
};
exports.default = loginRoutes;
