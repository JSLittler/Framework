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
const userFunctions_1 = require("../database/userFunctions");
const gameFunctions_1 = require("../database/gameFunctions");
const pageConfig_1 = require("../pageConfig/pageConfig");
const loginRoutes = (app) => {
    app.get('/slm/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { username, password } = req.headers;
        if (!username && !password) {
            res.status(401).send('You do not have rights to visit this page');
        }
        const { _id, name, storedPassword } = yield (0, userFunctions_1.findUser)((username === null || username === void 0 ? void 0 : username.toString()) || '');
        const userDetails = {
            id: _id,
            username: name,
            loggedIn: true
        };
        const savedGame = yield (0, gameFunctions_1.findGameByUser)((username === null || username === void 0 ? void 0 : username.toString()) || '', _id);
        const config = yield (0, pageConfig_1.getSlmSelectGamePage)();
        const response = {
            state: {
                userDetails,
                savedGame
            },
            config
        };
        return storedPassword === password ? res.send(response) : res.send('incorrect username or password');
    }));
};
exports.default = loginRoutes;
