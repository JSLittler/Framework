import { createLeagueTable } from '../leagueFunctions';

const arrayShuffle = (array: any) => array.sort((a: any, b: any) => 0.5 - Math.random());

export const simulateGames = async (game: any) => {
  const { _id, owner, formations, playersTeam, oppositionTeams, transferList, gameWeek, fixtures } = game;

  //maybe make this a function and just return the selected players
  const getSelectedTeam = (team: any) => {
    const selectedFormation = arrayShuffle(formations)[0];
    team.tactics = { formation: selectedFormation.name, selectedTeam: selectedFormation.teamShape };
    const [def, mid, att] = team.tactics.formation.split('-');

    return {
      selectedGoalkeeper: arrayShuffle(team.squad.goalKeepers)[0],
      selectedDefenders: arrayShuffle(team.squad.defenders).slice(0, +def),
      selectedMidfielders: arrayShuffle(team.squad.midfielders).slice(0, +mid),
      selectedForwards: arrayShuffle(team.squad.forwards).slice(0, +att)
    }
  };

  const playGame = (fixture: any) => {
    const { home, away } = fixture;
    
    const homeTeam: any = home === playersTeam.name ? getSelectedTeam(playersTeam) : getSelectedTeam(oppositionTeams.find((team: any) => team.name === home));
    const awayTeam: any = away === playersTeam.name ? getSelectedTeam(playersTeam) : getSelectedTeam(oppositionTeams.find((team : any) => team.name === away));;

    let homeDefTotal = 0
    homeTeam.selectedDefenders.forEach((player: any) => {
      homeDefTotal += player.attributesAverages.find((attribute: any) => attribute.attributeName === 'defenceAverage').attributeFinalValue;
    });

    let homeMidTotal = 0
    homeTeam.selectedMidfielders.forEach((player: any) => {
      homeMidTotal += player.attributesAverages.find((attribute: any) => attribute.attributeName === 'midfieldAverage').attributeFinalValue;
    });

    let homeAttTotal = 0
    homeTeam.selectedForwards.forEach((player: any) => {
      homeAttTotal += player.attributesAverages.find((attribute: any) => attribute.attributeName === 'attackAverage').attributeFinalValue;
    });

    const awayTeamGK = awayTeam.selectedGoalkeeper;

    let awayDefTotal = 0
    awayTeam.selectedDefenders.forEach((player: any) => {
      awayDefTotal += player.attributesAverages.find((attribute: any) => attribute.attributeName === 'defenceAverage').attributeFinalValue;
    });

    let awayMidTotal = 0
    awayTeam.selectedMidfielders.forEach((player: any) => {
      awayMidTotal += player.attributesAverages.find((attribute: any) => attribute.attributeName === 'midfieldAverage').attributeFinalValue;
    });

    let awayAttTotal = 0
    awayTeam.selectedForwards.forEach((player: any) => {
      awayAttTotal += player.attributesAverages.find((attribute: any) => attribute.attributeName === 'attackAverage').attributeFinalValue;
    });
    
    const homePossession = Math.round((homeMidTotal / (homeMidTotal + awayMidTotal)) * 100);
    const awayPossession = Math.round((awayMidTotal / (homeMidTotal + awayMidTotal)) * 100);

    const homeShotsCreated = Math.round(homePossession * (homeAttTotal / awayDefTotal));
    const awayShotsCreated = Math.round(awayPossession * (awayAttTotal / homeDefTotal));
    
    let homeGoals = 0;
    for (let index = 0; index < homeShotsCreated; index++) {
      if (Math.round(Math.random() * 100) > homeTeam.selectedGoalkeeper.attributesAverages.find((att: any) => att.attributeName === 'goalKeeperAverage').attributeFinalValue) {
        homeGoals++;
      }
    };

    let awayGoals = 0;
    for (let index = 0; index < awayShotsCreated; index++) {
      if (Math.round(Math.random() * 100) > awayTeam.selectedGoalkeeper.attributesAverages.find((att: any) => att.attributeName === 'goalKeeperAverage').attributeFinalValue) {
        awayGoals++;
      }
    };

    if(homeGoals > 9) {
      awayGoals = awayGoals - (homeGoals - 9);
      homeGoals = 9;
    }

    if(awayGoals > 9) {
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

  const updateTransfers = (teams: any) => {
    const updatedTransferList: any = {
      name: 'Transfer List',
      squad: {
        goalKeepers: [],
        defenders: [],
        midfielders: [],
        forwards: [],
      },
    };

    const shuffledTeams: any = arrayShuffle(teams);
    ['goalKeepers', 'defenders', 'midfielders', 'forwards'].map((v: any, i: any) => {
      shuffledTeams[i].squad[v] = arrayShuffle(shuffledTeams[i].squad[v]);
      shuffledTeams[i].squad[v].push(transferList.squad[v][0]);
      updatedTransferList.squad[v].push(shuffledTeams[i].squad[v][0]);
      shuffledTeams[i].squad[v] = shuffledTeams[i].squad[v].filter((p: any) => p.name !== updatedTransferList.squad[v][0].name);
    });

    return {
      updatedTransferList,
      updatedOppositionTeams: shuffledTeams,
    };
  };

  const updateLeagueRecord = ({ name, squad, tactics, leagueRecord: { played, won, lost, drawn, goalsFor, goalsAgainst} }: any, { fixtures }: any) => {
    const { home, away, result } = fixtures.filter((f: any) => f.home === name || f.away === name)[0];
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
        goalsAgainst: isHome ? result[away] : result[home],
        goalDifference: (goalsFor + result[name]) - (goalsAgainst + isHome ? result[away] : result[home]),
      }
    }
  }

  const updateFixturesWithResults = (currentFixtures: any) => {
    const gameWeekFixtures = currentFixtures[gameWeek - 1].fixtures;
    const playedGameWeekFixtures = gameWeekFixtures.map((f: any) => playGame(f));

    currentFixtures[gameWeek - 1].fixtures = playedGameWeekFixtures;
    const currentPlayersTeam = updateLeagueRecord(playersTeam, currentFixtures[gameWeek - 1]);
    const currentOppositionTeams = oppositionTeams.map((t: any) => updateLeagueRecord(t, currentFixtures[gameWeek - 1]));

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
    gameWeek: gameWeek + 1,
    fixtures: currentFixtures,
    leagueTable: createLeagueTable([currentPlayersTeam, ...updatedOppositionTeams]),
  };

  return updatedGame;
};
