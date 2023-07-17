const pageConfig = require('../data/config/pageOutline/slmPageOutline.json');
const loginPageComponents = require('../data/config/pageContent/slmLoginPage.json');
const selectGameComponents = require('../data/config/pageContent/slmSelectGamePage.json');
const dashboardComponents = require('../data/config/pageContent/dashboardPage.json');

const getUpdate = (ids: Array<string>, attribute: string, stateAddress: string) => {
    const update: any = {
        componentIds: [],
        attribute,
        stateAddress,
    }

    ids.forEach(id => update.componentIds.push(id));
    
    return update;
};

export const getSlmLoginPage = async () => {
    pageConfig.components = loginPageComponents;

    return pageConfig;
};

export const getSlmSelectGamePage = async () => {
    pageConfig.components = selectGameComponents;

    const updateUsername = getUpdate(['select-game'], 'username', 'userDetails.username');
    pageConfig.updates.push(updateUsername);

    const updateGameWeek = getUpdate(['select-game'], 'gameWeek', 'game.gameWeek');
    pageConfig.updates.push(updateGameWeek);

    const updatePlayersTeam = getUpdate(['select-game'], 'playersTeam', 'game.playersTeam');
    pageConfig.updates.push(updatePlayersTeam);

    return pageConfig;
};

export const getSlmDashboardPage = async () => {
    pageConfig.components = dashboardComponents;

    const updateUsername = getUpdate(['dashboard'], 'username', 'userDetails.username');
    pageConfig.updates.push(updateUsername);

    const updateLeagueTable = getUpdate(['dashboard'], 'leagueTable', 'game.leagueTable');
    pageConfig.updates.push(updateLeagueTable);

    const updateGameWeek = getUpdate(['dashboard'], 'gameWeek', 'game.gameWeek');
    pageConfig.updates.push(updateGameWeek);

    const updatePlayersTeam = getUpdate(['dashboard'], 'playersTeam', 'game.playersTeam');
    pageConfig.updates.push(updatePlayersTeam);

    const updateFixtures = getUpdate(['dashboard'], 'fixtures', 'game.fixtures');
    pageConfig.updates.push(updateFixtures);

    return pageConfig;
};
