const pageConfig = require('../data/config/pageOutline/slmPageOutline.json');
const loginPageComponents = require('../data/config/pageContent/slmLoginPage.json');
const selectGameComponents = require('../data/config/pageContent/slmSelectGamePage.json');
const dashboardComponents = require('../data/config/pageContent/dashboardPage.json');
const viewTeamComponents = require('../data/config/pageContent/viewTeamPage.json');
const viewPlayerComponents = require('../data/config/pageContent/viewPlayerPage.json');
const transfersComponents = require('../data/config/pageContent/transfersPage.json');
const pickTeamComponents = require('../data/config/pageContent/pickTeamPage.json');

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
}

export const getSlmTransfersPage = async () => {
    pageConfig.components = transfersComponents;

    const updates = [
        getUpdate(['transfers'], 'username', 'userDetails.username'),
        getUpdate(['transfers'], 'playersTeam', 'game.playersTeam'),
        getUpdate(['transfers'], 'transferList', 'game.transferList')
    ];

    pageConfig.updates = updates

    return pageConfig;
}
export const getSlmPickTeamPage = async () => {
    pageConfig.components = pickTeamComponents;

    const updates = [
        getUpdate(['pick-team'], 'username', 'userDetails.username'),
        getUpdate(['pick-team'], 'playersTeam', 'game.playersTeam'),
        getUpdate(['pick-team'], 'formations', 'game.formations')
    ];
    
    pageConfig.updates = updates;

    return pageConfig;
}
export const getSlmPlayGamePage = async () => {}
