import { randomUUID } from 'crypto';

import { getFormations, getTeamNames } from '../teamFunctions';
import { getPlayers } from '../playerFunctions';
import { createLeagueTable } from '../leagueFunctions';
import { managePlayerGames } from '../../database/gameFunctions';

const arrayShuffle = (array: []) => array.sort((a, b) => 0.5 - Math.random());

const updatePlayers = () => {
 return {
    goalKeepers: arrayShuffle(getPlayers('goalKeepers')),
    defenders: arrayShuffle(getPlayers('defenders')),
    midfielders: arrayShuffle(getPlayers('midfielders')),
    forwards: arrayShuffle(getPlayers('forwards'))
  };
};

const setupSquads = () => {
  let { goalKeepers, defenders, midfielders, forwards } = updatePlayers();

  const teamNames = arrayShuffle(getTeamNames());

  const squads = teamNames.map((t: any) => {
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
    }
  });

  const transferList = {
    goalKeepers,
    defenders,
    midfielders,
    forwards,
  }

  return { teams: squads, transferList };
};

const createFixtureList = () => {
  const teams: any = arrayShuffle(getTeamNames());
  const fixtures: any = [];

  for (let i = 1; i < teams.length; i++) {
    teams.push(teams.shift());

    const gameWeekTeams = [...teams];
    const gameWeekFixtures: any = {
      gameWeek: i,
      fixtures: []
    }; 

    for (let i = 0; gameWeekTeams.length > 1; i++) {
      gameWeekFixtures.fixtures.push({ home: gameWeekTeams.shift(), away: gameWeekTeams.shift() });
    };
    
    fixtures.push(gameWeekFixtures);
  };

  for (let i = 1; i < teams.length; i++) {
    const gameWeekFixtures: any = {
      gameWeek: fixtures.length + 1,
      fixtures: fixtures[i - 1].fixtures.map((gwf: any) => {
        return {
          home: gwf.away,
          away: gwf.home
        };
      }),
    };
    
    fixtures.push(gameWeekFixtures)
  }

  return fixtures;
};

export const setupNewGame = async (username: string, userId: any) => {
  const { teams, transferList } = setupSquads();
  const table = createLeagueTable([...teams]);
  const playersTeam = teams.splice(-1)[0];

  const newGame = {
    _id: randomUUID(),
    owner: {
      username,
      userId,
    },
    formations: getFormations(),
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

  managePlayerGames(newGame, username, userId);

  return newGame;
};
