"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateGames = void 0;
const leagueFunctions_1 = require("../leagueFunctions");
const arrayShuffle = (array) => array.sort((a, b) => 0.5 - Math.random());
const simulateGames = async (game) => {
    const { _id, owner, formations, playersTeam, oppositionTeams, transferList, season, prevSeasons, gameWeek, fixtures } = game;
    const getSelectedTeam = (team) => {
        const selectedFormation = arrayShuffle(formations)[0];
        team.tactics = { formation: selectedFormation.name, selectedTeam: selectedFormation.teamShape };
        const [def, mid, att] = team.tactics.formation.split('-');
        return {
            selectedGoalkeeper: arrayShuffle(team.squad.goalKeepers)[0],
            selectedDefenders: arrayShuffle(team.squad.defenders).slice(0, +def),
            selectedMidfielders: arrayShuffle(team.squad.midfielders).slice(0, +mid),
            selectedForwards: arrayShuffle(team.squad.forwards).slice(0, +att)
        };
    };
    const getPlayer = (p) => {
        return playersTeam.squad.goalKeepers.find((gk) => gk.name === p.player) ||
            playersTeam.squad.defenders.find((def) => def.name === p.player) ||
            playersTeam.squad.midfielders.find((mid) => mid.name === p.player) ||
            playersTeam.squad.forwards.find((att) => att.name === p.player);
    };
    const getPlayersSelectedTeam = () => {
        const { goalkeeper, defence, midfield, forwards } = playersTeam.tactics.selectedTeam;
        return {
            selectedGoalkeeper: goalkeeper.map((p) => getPlayer(p))[0],
            selectedDefenders: defence.map((p) => getPlayer(p)),
            selectedMidfielders: midfield.map((p) => getPlayer(p)),
            selectedForwards: forwards.map((p) => getPlayer(p))
        };
    };
    const playGame = (fixture) => {
        const { home, away } = fixture;
        const homeTeam = home === playersTeam.name ? getPlayersSelectedTeam() : getSelectedTeam(oppositionTeams.find((team) => team.name === home));
        const awayTeam = away === playersTeam.name ? getPlayersSelectedTeam() : getSelectedTeam(oppositionTeams.find((team) => team.name === away));
        ;
        let homeDefTotal = 0;
        homeTeam.selectedDefenders.forEach((player) => {
            homeDefTotal += player.attributesAverages.find((attribute) => attribute.attributeName === 'defenceAverage').attributeFinalValue;
        });
        let homeMidTotal = 0;
        homeTeam.selectedMidfielders.forEach((player) => {
            homeMidTotal += player.attributesAverages.find((attribute) => attribute.attributeName === 'midfieldAverage').attributeFinalValue;
        });
        let homeAttTotal = 0;
        homeTeam.selectedForwards.forEach((player) => {
            homeAttTotal += player.attributesAverages.find((attribute) => attribute.attributeName === 'attackAverage').attributeFinalValue;
        });
        const homeAttAverage = Math.round(homeAttTotal / homeTeam.selectedForwards.length);
        const awayTeamGK = awayTeam.selectedGoalkeeper;
        let awayDefTotal = 0;
        awayTeam.selectedDefenders.forEach((player) => {
            awayDefTotal += player.attributesAverages.find((attribute) => attribute.attributeName === 'defenceAverage').attributeFinalValue;
        });
        let awayMidTotal = 0;
        awayTeam.selectedMidfielders.forEach((player) => {
            awayMidTotal += player.attributesAverages.find((attribute) => attribute.attributeName === 'midfieldAverage').attributeFinalValue;
        });
        let awayAttTotal = 0;
        awayTeam.selectedForwards.forEach((player) => {
            awayAttTotal += player.attributesAverages.find((attribute) => attribute.attributeName === 'attackAverage').attributeFinalValue;
        });
        const awayAttAverage = Math.round(awayAttTotal / awayTeam.selectedForwards.length);
        const homePossession = Math.round((homeMidTotal / (homeMidTotal + awayMidTotal)) * 100);
        const awayPossession = Math.round((awayMidTotal / (homeMidTotal + awayMidTotal)) * 100);
        const homeShotsCreated = Math.round(homePossession * (homeAttTotal / awayDefTotal));
        const awayShotsCreated = Math.round(awayPossession * (awayAttTotal / homeDefTotal));
        let homeGoals = 0;
        for (let index = 0; index < homeShotsCreated; index++) {
            if (Math.round(Math.random() * homeAttAverage + 10) > homeTeam.selectedGoalkeeper.attributesAverages.find((att) => att.attributeName === 'goalKeeperAverage').attributeFinalValue) {
                homeGoals++;
            }
        }
        ;
        let awayGoals = 0;
        for (let index = 0; index < awayShotsCreated; index++) {
            if (Math.round(Math.random() * awayAttAverage + 6) > awayTeam.selectedGoalkeeper.attributesAverages.find((att) => att.attributeName === 'goalKeeperAverage').attributeFinalValue) {
                awayGoals++;
            }
        }
        ;
        if (homeGoals > 9) {
            awayGoals = awayGoals - (homeGoals - 9);
            homeGoals = 9;
        }
        if (awayGoals > 9) {
            homeGoals = homeGoals - (awayGoals - 9);
            awayGoals = 9;
        }
        homeGoals = homeGoals < 0 ? 0 : homeGoals;
        awayGoals = awayGoals < 0 ? 0 : awayGoals;
        return {
            home,
            away,
            result: {
                [home]: homeGoals,
                [away]: awayGoals,
            }
        };
    };
    const updateTransfers = (teams) => {
        const updatedTransferList = {
            name: 'Transfer List',
            squad: {
                goalKeepers: [],
                defenders: [],
                midfielders: [],
                forwards: [],
            },
        };
        const shuffledTeams = arrayShuffle(teams);
        ['goalKeepers', 'defenders', 'midfielders', 'forwards'].map((v, i) => {
            shuffledTeams[i].squad[v] = arrayShuffle(shuffledTeams[i].squad[v]);
            shuffledTeams[i].squad[v].push(transferList.squad[v][0]);
            updatedTransferList.squad[v].push(shuffledTeams[i].squad[v][0]);
            shuffledTeams[i].squad[v] = shuffledTeams[i].squad[v].filter((p) => p.name !== updatedTransferList.squad[v][0].name);
        });
        return {
            updatedTransferList,
            updatedOppositionTeams: shuffledTeams,
        };
    };
    const updateLeagueRecord = ({ name, squad, tactics, leagueRecord: { played, won, lost, drawn, goalsFor, goalsAgainst } }, { fixtures }) => {
        const { home, away, result } = fixtures.filter((f) => f.home === name || f.away === name)[0];
        const isHome = home === name;
        const isWin = isHome ? result[home] > result[away] : result[away] > result[home];
        const isDefeat = isHome ? result[home] < result[away] : result[away] < result[home];
        const isDraw = result[home] === result[away];
        return {
            name,
            squad,
            tactics,
            leagueRecord: {
                played: played + 1,
                won: isWin ? won + 1 : won,
                lost: isDefeat ? lost + 1 : lost,
                drawn: isDraw ? drawn + 1 : drawn,
                goalsFor: goalsFor + result[name],
                goalsAgainst: goalsAgainst + (isHome ? result[away] : result[home]),
                goalDifference: (goalsFor + result[name]) - (goalsAgainst + (isHome ? result[away] : result[home])),
            }
        };
    };
    const updateFixturesWithResults = (currentFixtures) => {
        const gameWeekFixtures = currentFixtures[gameWeek - 1].fixtures;
        const playedGameWeekFixtures = gameWeekFixtures.map((f) => playGame(f));
        currentFixtures[gameWeek - 1].fixtures = playedGameWeekFixtures;
        const currentPlayersTeam = updateLeagueRecord(playersTeam, currentFixtures[gameWeek - 1]);
        const currentOppositionTeams = oppositionTeams.map((t) => updateLeagueRecord(t, currentFixtures[gameWeek - 1]));
        return {
            currentFixtures,
            currentPlayersTeam,
            currentOppositionTeams,
        };
    };
    const { currentFixtures, currentPlayersTeam, currentOppositionTeams } = updateFixturesWithResults(fixtures);
    const { updatedTransferList, updatedOppositionTeams } = updateTransfers(currentOppositionTeams);
    const updatedGame = {
        _id,
        owner,
        formations,
        playersTeam: currentPlayersTeam,
        oppositionTeams: updatedOppositionTeams,
        transferList: updatedTransferList,
        season,
        endSeason: gameWeek + 1 > updatedOppositionTeams.length * 2,
        prevSeasons,
        gameWeek: gameWeek + 1,
        fixtures: currentFixtures,
        leagueTable: (0, leagueFunctions_1.createLeagueTable)([currentPlayersTeam, ...updatedOppositionTeams]),
    };
    return updatedGame;
};
exports.simulateGames = simulateGames;
