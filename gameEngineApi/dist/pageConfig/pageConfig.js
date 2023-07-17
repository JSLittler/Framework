"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSlmDashboardPage = exports.getSlmSelectGamePage = exports.getSlmLoginPage = void 0;
const pageConfig = require('../data/config/pageOutline/slmPageOutline.json');
const loginPageComponents = require('../data/config/pageContent/slmLoginPage.json');
const selectGameComponents = require('../data/config/pageContent/slmSelectGamePage.json');
const dashboardComponents = require('../data/config/pageContent/dashboardPage.json');
const getUsernameUpdate = (ids) => {
    const usernameUpdate = {
        componentIds: [],
        attribute: 'username',
        stateAddress: 'userDetails.username'
    };
    ids.forEach(id => usernameUpdate.componentIds.push(id));
    return usernameUpdate;
};
const getSlmLoginPage = async () => {
    pageConfig.components = loginPageComponents;
    return pageConfig;
};
exports.getSlmLoginPage = getSlmLoginPage;
const getSlmSelectGamePage = async () => {
    pageConfig.components = selectGameComponents;
    const update = getUsernameUpdate(['select-game']);
    pageConfig.updates.push(update);
    return pageConfig;
};
exports.getSlmSelectGamePage = getSlmSelectGamePage;
const getSlmDashboardPage = async () => {
    pageConfig.components = dashboardComponents;
    const update = getUsernameUpdate(['dashboard']);
    pageConfig.updates.push(update);
    return pageConfig;
};
exports.getSlmDashboardPage = getSlmDashboardPage;
