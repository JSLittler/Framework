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
        return res.json(team);
        // const { name, _id } = await findUser(username?.toString() || '');
        // if(!id || !username || _id.toString() !== id?.toString()) {
        //   return res.status(401).json({});
        // }
        // const config = await getSlmDashboardPage();
        // const savedGame = await findGameByUser(name, _id);
        // const userDetails = {
        //   id: _id,
        //   username: name,
        //   loggedIn: true
        // };
        // const response = {
        //   state: { 
        //     userDetails,
        //     game: savedGame
        //   },
        //   config
        // };
        // return res.send(response);
    });
    //   app.get('/game/allUser', async (req, res) => {
    //     const { username, userId } = req.body;
    //     const games = await findGameByUser(username) || [];
    //     const checkedGames = games.map(game => game.user.username === username && game.user.id === userId);
    //     return checkedGames.length ? res.send(checkedGames) : res.send('No saved games found');
    //   });
    //   app.get('/game/read', async (req, res) => {
    //     const { gameId, username, userId } = req.body;
    //     const game = await findSavedGame(gameId);
    //     const checkAuth = game.user.username === username && game.user.id === userId;
    //     return checkAuth ? res.send(game) : res.send('Unable to load game');
    //   });
    //   app.post('/game/save', async (req, res) => {
    //     const { username } = req.headers;
    //     const game = req.body;
    //     await managePlayerGames(game, username, game.owner.userId);
    //     return res.status(200).json({});
    //   });
    //   app.get('/game/delete', async (req, res) => {
    //     const { gameId, username, userId } = req.body;
    //     const oldGame = await findSavedGame(gameId);
    //     const checkAuth = oldGame.user.username === username && oldGame.user.id === userId;
    //     if(!!oldGame && checkAuth) {
    //       deleteSavedGame(gameId);
    //       return res.send('game deleted');
    //     }
    //     return res.send('Unable to delete game');
    //   });
    //   app.post('/game/play', async (req, res) => {
    //     const game = req.body;
    //     const updatedGame = await simulateGames(game);
    //     return res.send(updatedGame);
    //   });
};
exports.default = gamesRoutes;
