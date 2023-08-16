"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewSeason = exports.setupNewGame = void 0;
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
    const firstTeams = teams.slice(0, teams.length / 2);
    const secondTeams = teams.slice(teams.length / 2);
    for (let i = 0; i < teams.length - 1; i++) {
        const fix = { gameWeek: i + 1, fixtures: [] };
        firstTeams.forEach((team, index) => {
            fix.fixtures.push({ home: team, away: secondTeams[index] });
        });
        fixtures.push(fix);
        const movedFirstTeam = firstTeams.pop();
        secondTeams.push(movedFirstTeam);
        const movedSecondTeam = secondTeams.shift();
        firstTeams.splice(1, 0, movedSecondTeam);
    }
    ;
    for (let i = 0; i < teams.length - 1; i++) {
        const fix = { gameWeek: i + 10, fixtures: [] };
        firstTeams.forEach((team, index) => {
            fix.fixtures.push({ home: secondTeams[index], away: team });
        });
        fixtures.push(fix);
        const movedFirstTeam = firstTeams.pop();
        secondTeams.push(movedFirstTeam);
        const movedSecondTeam = secondTeams.shift();
        firstTeams.splice(1, 0, movedSecondTeam);
    }
    ;
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
        season: 1,
        endSeason: false,
        prevSeasons: [],
        gameWeek: 1,
        fixtures: createFixtureList(),
        leagueTable: table,
    };
    (0, gameFunctions_1.managePlayerGames)(newGame, username, userId);
    return newGame;
};
exports.setupNewGame = setupNewGame;
const updatePlayerAttributesEndSeason = (player) => {
    const updatedAttributes = player.attributes.map((a) => {
        const { attributeName, attributeBaseValue } = a;
        return {
            attributeName,
            attributeBaseValue,
            attributeFinalValue: attributeBaseValue + Math.floor(Math.random() * 30)
        };
    });
    player.attributes = updatedAttributes;
    return player;
};
const updatePlayersEndSeason = (squad) => {
    const { goalKeepers, defenders, midfielders, forwards } = squad;
    return {
        goalKeepers: goalKeepers.map((gk) => (0, playerFunctions_1.addGoalKeeperAverage)(updatePlayerAttributesEndSeason(gk))),
        defenders: defenders.map((def) => (0, playerFunctions_1.addOutfieldAverages)(updatePlayerAttributesEndSeason(def))),
        midfielders: midfielders.map((mid) => (0, playerFunctions_1.addOutfieldAverages)(updatePlayerAttributesEndSeason(mid))),
        forwards: forwards.map((att) => (0, playerFunctions_1.addOutfieldAverages)(updatePlayerAttributesEndSeason(att)))
    };
};
const updateTeamEndSeason = (team) => {
    const { name, squad, tactics } = team;
    return {
        name,
        squad: updatePlayersEndSeason(squad),
        leagueRecord: {
            played: 0,
            won: 0,
            lost: 0,
            drawn: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            goalDifference: 0,
        },
        tactics
    };
};
const createNewSeason = async (savedGame) => {
    const { _id, owner, playersTeam, season, prevSeasons, oppositionTeams, transferList } = savedGame;
    const { leagueRecord } = playersTeam;
    prevSeasons.push({ season, leagueRecord, table: (0, leagueFunctions_1.createLeagueTable)([playersTeam, ...oppositionTeams]) });
    const updatedPlayersTeam = updateTeamEndSeason(playersTeam);
    const updatedOppositionTeams = oppositionTeams.map((t) => updateTeamEndSeason(t));
    const updatedGame = {
        _id,
        owner,
        formations: (0, teamFunctions_1.getFormations)(),
        playersTeam: updatedPlayersTeam,
        oppositionTeams: updatedOppositionTeams,
        transferList: {
            name: 'Transfer List',
            squad: updatePlayersEndSeason(transferList.squad),
        },
        season: season + 1,
        prevSeasons,
        gameWeek: 1,
        fixtures: createFixtureList(),
        leagueTable: (0, leagueFunctions_1.createLeagueTable)([updatedPlayersTeam, ...updatedOppositionTeams]),
    };
    return updatedGame;
};
exports.createNewSeason = createNewSeason;
