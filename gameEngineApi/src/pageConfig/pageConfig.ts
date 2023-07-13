const loginPageConfig = require('../data/config/pageOutline/slmPageOutline.json');
const loginPageComponents = require('../data/config/pageContent/slmLoginPage.json');
const selectGameComponents = require('../data/config/pageContent/slmSelectGamePage.json');

export const getSlmLoginPage = async () => {
    loginPageConfig.components = loginPageComponents;

    return loginPageConfig;
};

export const getSlmSelectGamePage = async () => {
    loginPageConfig.components = selectGameComponents;
    const usernameUpdate = {
        componentIds: ['select-game'],
        attribute: 'username',
        stateAddress: 'userDetails.username'
    }
    loginPageConfig.updates.push(usernameUpdate);

    return loginPageConfig;
};
