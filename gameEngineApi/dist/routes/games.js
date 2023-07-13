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
// import { findGameByUser, findSavedGame, deleteSavedGame, managePlayerGames } from '../database/gameFunctions.js';
// import { setupNewGame } from '../models/newGame.js';
// import { simulateGames } from '../models/simulateGames.js';
const gamesRoutes = (app) => {
    app.get('/slm/game/new', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // const { username, password } = req.headers;
        // const { _id } = await findUser(username);
        // console.log('id : ', _id);
        // if(_id.toString() !== password) {
        //   return res.status(403).json({});
        // }
        // const newGame = await setupNewGame(username, password);
        // return res.send(newGame);
        return res.send('new game');
    }));
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
