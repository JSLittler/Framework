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
exports.getSlmSelectGamePage = exports.getSlmLoginPage = void 0;
const loginPageConfig = require('../data/config/pageOutline/slmPageOutline.json');
const loginPageComponents = require('../data/config/pageContent/slmLoginPage.json');
const selectGameComponents = require('../data/config/pageContent/slmSelectGamePage.json');
const getSlmLoginPage = () => __awaiter(void 0, void 0, void 0, function* () {
    loginPageConfig.components = loginPageComponents;
    return loginPageConfig;
});
exports.getSlmLoginPage = getSlmLoginPage;
const getSlmSelectGamePage = () => __awaiter(void 0, void 0, void 0, function* () {
    loginPageConfig.components = selectGameComponents;
    const usernameUpdate = {
        componentIds: ['select-game'],
        attribute: 'username',
        stateAddress: 'userDetails.username'
    };
    loginPageConfig.updates.push(usernameUpdate);
    return loginPageConfig;
});
exports.getSlmSelectGamePage = getSlmSelectGamePage;
