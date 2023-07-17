"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pageConfig_1 = require("../pageConfig");
const games_1 = __importDefault(require("./games"));
const login_1 = __importDefault(require("./login"));
const appRouter = (app) => {
    app.get('/slm', async (req, res) => {
        const response = {
            state: {},
            config: await (0, pageConfig_1.getSlmLoginPage)()
        };
        res.send(response);
    });
    (0, login_1.default)(app);
    (0, games_1.default)(app);
    // playersRoutes(app, fs);
};
exports.default = appRouter;
