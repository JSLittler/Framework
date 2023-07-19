"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userFunctions_js_1 = require("../database/userFunctions.js");
const index_js_1 = require("../models/newGame/index.js");
const index_js_2 = require("../pageConfig/index.js");
const gameFunctions_js_1 = require("../database/gameFunctions.js");
// import { findSavedGame, deleteSavedGame, managePlayerGames } from '../database/gameFunctions.js';
// import { simulateGames } from '../models/simulateGames.js';
const gamesRoutes = (app) => {
    app.get('/slm/game/new', async (req, res) => {
        const { username, id } = req === null || req === void 0 ? void 0 : req.headers;
        const { name, _id } = await (0, userFunctions_js_1.findUser)((username === null || username === void 0 ? void 0 : username.toString()) || '');
        if (!id || !username || _id.toString() !== (id === null || id === void 0 ? void 0 : id.toString())) {
            return res.status(401).json({});
        }
        const config = await (0, index_js_2.getSlmDashboardPage)();
        const newGame = await (0, index_js_1.setupNewGame)(name, _id);
        const userDetails = {
            id: _id,
            username: name,
            loggedIn: true
        };
        const response = {
            state: {
                userDetails,
                game: newGame
            },
            config
        };
        return res.send(response);
    });
    app.get('/slm/game/saved', async (req, res) => {
        const { username, id } = req === null || req === void 0 ? void 0 : req.headers;
        const { name, _id } = await (0, userFunctions_js_1.findUser)((username === null || username === void 0 ? void 0 : username.toString()) || '');
        if (!id || !username || _id.toString() !== (id === null || id === void 0 ? void 0 : id.toString())) {
            return res.status(401).json({});
        }
        const config = await (0, index_js_2.getSlmDashboardPage)();
        const savedGame = await (0, gameFunctions_js_1.findGameByUser)(name, _id);
        const userDetails = {
            id: _id,
            username: name,
            loggedIn: true
        };
        const response = {
            state: {
                userDetails,
                game: savedGame
            },
            config
        };
        return res.send(response);
    });
    app.get('/slm/game/team/:team', async (req, res) => {
        const { username, id } = req === null || req === void 0 ? void 0 : req.headers;
        const { team } = req.params;
        const { name, _id } = await (0, userFunctions_js_1.findUser)((username === null || username === void 0 ? void 0 : username.toString()) || '');
        if (!id || !username || _id.toString() !== (id === null || id === void 0 ? void 0 : id.toString())) {
            return res.status(401).json({});
        }
        const savedGame = await (0, gameFunctions_js_1.findGameByUser)(name, _id);
        const config = await (0, index_js_2.getSlmViewTeamPage)(team);
        const userDetails = {
            id: _id,
            username: name,
            loggedIn: true
        };
        const response = {
            state: {
                userDetails,
                game: savedGame
            },
            config
        };
        return res.send(response);
    });
    app.get('/slm/game/team/:team/player/:player', async (req, res) => {
        const { username, id } = req === null || req === void 0 ? void 0 : req.headers;
        const { team, player } = req.params;
        const { name, _id } = await (0, userFunctions_js_1.findUser)((username === null || username === void 0 ? void 0 : username.toString()) || '');
        if (!id || !username || _id.toString() !== (id === null || id === void 0 ? void 0 : id.toString())) {
            return res.status(401).json({});
        }
        const savedGame = await (0, gameFunctions_js_1.findGameByUser)(name, _id);
        const config = await (0, index_js_2.getSlmViewPlayerPage)(team, player);
        const userDetails = {
            id: _id,
            username: name,
            loggedIn: true
        };
        const response = {
            state: {
                userDetails,
                game: savedGame
            },
            config
        };
        return res.send(response);
    });
    app.get('/slm/game/transfers', async (req, res) => {
        const { username, id } = req === null || req === void 0 ? void 0 : req.headers;
        const { name, _id } = await (0, userFunctions_js_1.findUser)((username === null || username === void 0 ? void 0 : username.toString()) || '');
        if (!id || !username || _id.toString() !== (id === null || id === void 0 ? void 0 : id.toString())) {
            return res.status(401).json({});
        }
        const savedGame = await (0, gameFunctions_js_1.findGameByUser)(name, _id);
        const config = await (0, index_js_2.getSlmTransfersPage)();
        const userDetails = {
            id: _id,
            username: name,
            loggedIn: true
        };
        const response = {
            state: {
                userDetails,
                game: savedGame
            },
            config
        };
        return res.send(response);
    });
    app.post('/slm/game/pickTeam', async (req, res) => {
        const { username, id } = req === null || req === void 0 ? void 0 : req.headers;
        const { name, _id } = await (0, userFunctions_js_1.findUser)((username === null || username === void 0 ? void 0 : username.toString()) || '');
        if (!id || !username || _id.toString() !== (id === null || id === void 0 ? void 0 : id.toString())) {
            return res.status(401).json({});
        }
        const savedGame = await (0, gameFunctions_js_1.findGameByUser)(name, _id);
        const config = await (0, index_js_2.getSlmPickTeamPage)();
        const userDetails = {
            id: _id,
            username: name,
            loggedIn: true
        };
        const response = {
            state: {
                userDetails,
                game: savedGame
            },
            config
        };
        return res.send(response);
    });
    app.get('/slm/game/playGame', async (req, res) => {
        const { username, id } = req === null || req === void 0 ? void 0 : req.headers;
        const { name, _id } = await (0, userFunctions_js_1.findUser)((username === null || username === void 0 ? void 0 : username.toString()) || '');
        if (!id || !username || _id.toString() !== (id === null || id === void 0 ? void 0 : id.toString())) {
            return res.status(401).json({});
        }
        const savedGame = await (0, gameFunctions_js_1.findGameByUser)(name, _id);
        const config = await (0, index_js_2.getSlmPlayGamePage)();
        const userDetails = {
            id: _id,
            username: name,
            loggedIn: true
        };
        const response = {
            state: {
                userDetails,
                game: savedGame
            },
            config
        };
        return res.send(response);
    });
};
exports.default = gamesRoutes;
