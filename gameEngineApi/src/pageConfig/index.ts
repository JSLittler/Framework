const pageConfig = require('../data/config/pageOutline/slmPageOutline.json');
const loginPageComponents = require('../data/config/pageContent/slmLoginPage.json');
const selectGameComponents = require('../data/config/pageContent/slmSelectGamePage.json');
const dashboardComponents = require('../data/config/pageContent/dashboardPage.json');
const viewTeamComponents = require('../data/config/pageContent/viewTeamPage.json');
const viewPlayerComponents = require('../data/config/pageContent/viewPlayerPage.json');
const transfersComponents = require('../data/config/pageContent/transfersPage.json');
const pickTeamComponents = require('../data/config/pageContent/pickTeamPage.json');
const playGameComponents = require('../data/config/pageContent/playGamePage.json');
const endSeasonComponents = require('../data/config/pageContent/endSeasonPage.json');

const getUpdate = (ids: Array<string>, attribute: string, stateAddress: string, setValue?: string) => {
    const update: any = {
        componentIds: [],
        attribute,
        stateAddress,
    }

    if (setValue) {
        update.setValue = setValue;
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

    const updates = [
        getUpdate(['select-game'], 'username', 'userDetails.username'),
        getUpdate(['select-game'], 'gameWeek', 'game.gameWeek'),
        getUpdate(['select-game'], 'playersTeam', 'game.playersTeam')
    ];

    pageConfig.updates = updates

    return pageConfig;
};

export const getSlmDashboardPage = async () => {
    pageConfig.components = dashboardComponents;

    const updates = [
        getUpdate(['dashboard'], 'username', 'userDetails.username'),
        getUpdate(['dashboard'], 'leagueTable', 'game.leagueTable'),
        getUpdate(['dashboard'], 'season', 'game.season'),
        getUpdate(['dashboard'], 'gameWeek', 'game.gameWeek'),
        getUpdate(['dashboard'], 'playersTeam', 'game.playersTeam'),
        getUpdate(['dashboard'], 'fixtures', 'game.fixtures')
    ];
    pageConfig.updates = updates;

    return pageConfig;
};

export const getSlmViewTeamPage = async (team: string) => {
    pageConfig.components = viewTeamComponents;

    const updates = [
        getUpdate(['view-team'], 'username', 'userDetails.username'),
        getUpdate(['view-team'], 'playersTeam', 'game.playersTeam'),
        getUpdate(['view-team'], 'oppositionTeams', 'game.oppositionTeams'),
        getUpdate(['view-team'], 'team', '', team)
    ];

    pageConfig.updates = updates;

    return pageConfig;
};

export const getSlmViewPlayerPage = async (team: string, player: string) => {
    pageConfig.components = viewPlayerComponents;

    const updates = [
        getUpdate(['view-player'], 'username', 'userDetails.username'),
        getUpdate(['view-player'], 'playersTeam', 'game.playersTeam'),
        getUpdate(['view-player'], 'oppositionTeams', 'game.oppositionTeams'),
        getUpdate(['view-player'], 'player', '', player),
        getUpdate(['view-player'], 'team', '', team)
    ];

    pageConfig.updates = updates;

    return pageConfig;
};

export const getSlmTransfersPage = async () => {
    pageConfig.components = transfersComponents;

    const updates = [
        getUpdate(['transfers'], 'username', 'userDetails.username'),
        getUpdate(['transfers'], 'playersTeam', 'game.playersTeam'),
        getUpdate(['transfers'], 'transferList', 'game.transferList')
    ];

    pageConfig.updates = updates

    return pageConfig;
};

export const getSlmPickTeamPage = async () => {
    pageConfig.components = pickTeamComponents;

    const updates = [
        getUpdate(['pick-team'], 'username', 'userDetails.username'),
        getUpdate(['pick-team'], 'playersTeam', 'game.playersTeam'),
        getUpdate(['pick-team'], 'formations', 'game.formations'),
        getUpdate(['pick-team'], 'fixtures', 'game.fixtures'),
        getUpdate(['pick-team'], 'selectedFormation', 'game.playersTeam.tactics.formation'),
        getUpdate(['pick-team'], 'teamShape', 'game.playersTeam.tactics.selectedTeam')
    ];
    
    pageConfig.updates = updates;

    return pageConfig;
};

export const getSlmPlayGamePage = async () => {
    pageConfig.components = playGameComponents;

    const updates = [
        getUpdate(['play-game'], 'fixtures', 'game.fixtures'),
        getUpdate(['play-game'], 'username', 'userDetails.username'),
        getUpdate(['play-game'], 'playersTeam', 'game.playersTeam'),
        getUpdate(['play-game'], 'gameWeek', 'game.gameWeek'),
        getUpdate(['play-game'], 'leagueTable', 'game.leagueTable'),
        getUpdate(['play-game'], 'endSeason', 'game.endSeason'),
    ];
    
    pageConfig.updates = updates;

    return pageConfig;
};

export const getSlmEndSeasonPage = async () => {
    pageConfig.components = endSeasonComponents;

    const updates = [
        getUpdate(['end-season'], 'prevSeasons', 'game.prevSeasons'),
        getUpdate(['end-season'], 'username', 'userDetails.username'),
        getUpdate(['end-season'], 'playersTeam', 'game.playersTeam'),
        getUpdate(['end-season'], 'season', 'game.season'),
    ];
    
    pageConfig.updates = updates;

    return pageConfig;
};
