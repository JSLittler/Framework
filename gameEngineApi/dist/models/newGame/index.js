"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupNewGame = void 0;
const crypto_1 = require("crypto");
const teamFunctions_1 = require("../teamFunctions");
const playerFunctions_1 = require("../playerFunctions");
const leagueFunctions_1 = require("../leagueFunctions");
const gameFunctions_1 = require("../../database/gameFunctions");
const arrayShuffle = (array) => array.sort((a, b) => 0.5 - Math.random());
const updatePlayers = () => {
    return {
        goalKeepers: arrayShuffle((0, playerFunctions_1.getPlayers)('goalKeepers')),
        defenders: arrayShuffle((0, playerFunctions_1.getPlayers)('defenders')),
        midfielders: arrayShuffle((0, playerFunctions_1.getPlayers)('midfielders')),
        forwards: arrayShuffle((0, playerFunctions_1.getPlayers)('forwards'))
    };
};
const setupSquads = () => {
    let { goalKeepers, defenders, midfielders, forwards } = updatePlayers();
    const teamNames = arrayShuffle((0, teamFunctions_1.getTeamNames)());
    const squads = teamNames.map((t) => {
        return {
            name: t,
            squad: {
                goalKeepers: goalKeepers.splice(-2),
                defenders: defenders.splice(-5),
                midfielders: midfielders.splice(-5),
                forwards: forwards.splice(-3)
            },
            tactics: {
                formation: '',
                selectedTeam: [],
            },
            leagueRecord: {
                played: 0,
                won: 0,
                lost: 0,
                drawn: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                goalDifference: 0,
            }
        };
    });
    const transferList = {
        goalKeepers,
        defenders,
        midfielders,
        forwards,
    };
    return { teams: squads, transferList };
};
const createFixtureList = () => {
    const teams = arrayShuffle((0, teamFunctions_1.getTeamNames)());
    const fixtures = [];
    for (let i = 1; i < teams.length; i++) {
        teams.push(teams.shift());
        const gameWeekTeams = [...teams];
        const gameWeekFixtures = {
            gameWeek: i,
            fixtures: []
        };
        for (let i = 0; gameWeekTeams.length > 1; i++) {
            gameWeekFixtures.fixtures.push({ home: gameWeekTeams.shift(), away: gameWeekTeams.shift() });
        }
        ;
        fixtures.push(gameWeekFixtures);
    }
    ;
    for (let i = 1; i < teams.length; i++) {
        const gameWeekFixtures = {
            gameWeek: fixtures.length + 1,
            fixtures: fixtures[i - 1].fixtures.map((gwf) => {
                return {
                    home: gwf.away,
                    away: gwf.home
                };
            }),
        };
        fixtures.push(gameWeekFixtures);
    }
    return fixtures;
};
const setupNewGame = async (username, userId) => {
    const { teams, transferList } = setupSquads();
    const table = (0, leagueFunctions_1.createLeagueTable)([...teams]);
    const playersTeam = teams.splice(-1)[0];
    const newGame = {
        _id: (0, crypto_1.randomUUID)(),
        owner: {
            username,
            userId,
        },
        formations: (0, teamFunctions_1.getFormations)(),
        playersTeam,
        oppositionTeams: [...teams],
        transferList: {
            name: 'Transfer List',
            squad: transferList,
        },
        gameWeek: 1,
        fixtures: createFixtureList(),
        leagueTable: table,
    };
    (0, gameFunctions_1.managePlayerGames)(newGame, username, userId);
    return newGame;
};
exports.setupNewGame = setupNewGame;