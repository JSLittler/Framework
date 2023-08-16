import { randomUUID } from 'crypto';

import { getFormations, getTeamNames } from '../teamFunctions';
import { addGoalKeeperAverage, addOutfieldAverages, getPlayers, updatePlayerAttributes } from '../playerFunctions';
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

  const firstTeams: any = teams.slice(0, teams.length / 2);
  const secondTeams: any = teams.slice(teams.length / 2);

  for (let i = 0; i < teams.length -1; i++) {
      const fix: any = { gameWeek: i + 1, fixtures: [] }

      firstTeams.forEach((team: any, index: any) => {
          fix.fixtures.push({ home: team, away: secondTeams[index] });
      });
      

      fixtures.push(fix);

      const movedFirstTeam = firstTeams.pop();
      secondTeams.push(movedFirstTeam);
      
      const movedSecondTeam = secondTeams.shift();
      firstTeams.splice(1, 0, movedSecondTeam);
  };

  for (let i = 0; i < teams.length -1; i++) {
      const fix: any = { gameWeek: i + 10, fixtures: [] }

      firstTeams.forEach((team: any, index: any) => {
          fix.fixtures.push({ home: secondTeams[index], away: team });
      });
      

      fixtures.push(fix);

      const movedFirstTeam = firstTeams.pop();
      secondTeams.push(movedFirstTeam);

      const movedSecondTeam = secondTeams.shift();
      firstTeams.splice(1, 0, movedSecondTeam);
  };

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
    season: 1,
    endSeason: false,
    prevSeasons: [],
    gameWeek: 1,
    fixtures: createFixtureList(),
    leagueTable: table,
  };

  managePlayerGames(newGame, username, userId);

  return newGame;
};

const updatePlayerAttributesEndSeason = (player: any) => {
  const updatedAttributes = player.attributes.map((a: any) => {
    const { attributeName, attributeBaseValue } = a;
    return {
      attributeName,
      attributeBaseValue,
      attributeFinalValue: attributeBaseValue + Math.floor(Math.random() * 30)
    }
  });

  player.attributes = updatedAttributes;
  
  return player;
}

const updatePlayersEndSeason = (squad: any) => {
  const { goalKeepers, defenders, midfielders, forwards } = squad;

  return {
    goalKeepers: goalKeepers.map((gk: any) => addGoalKeeperAverage(updatePlayerAttributesEndSeason(gk))) ,
    defenders: defenders.map((def: any) => addOutfieldAverages(updatePlayerAttributesEndSeason(def))),
    midfielders: midfielders.map((mid: any) => addOutfieldAverages(updatePlayerAttributesEndSeason(mid))),
    forwards: forwards.map((att: any) => addOutfieldAverages(updatePlayerAttributesEndSeason(att)))
  }  
}

const updateTeamEndSeason = (team: any) => {
  const { name, squad, tactics } = team

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
  }
}

export const createNewSeason = async (savedGame: any) => {
  const { _id, owner, playersTeam, season, prevSeasons, oppositionTeams, transferList } = savedGame;
  const { leagueRecord } = playersTeam;
  prevSeasons.push({ season, leagueRecord, table: createLeagueTable([playersTeam, ...oppositionTeams]) });
  const updatedPlayersTeam = updateTeamEndSeason(playersTeam);
  const updatedOppositionTeams = oppositionTeams.map((t: any) => updateTeamEndSeason(t));

  const updatedGame = {
    _id,
    owner,
    formations: getFormations(),
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
    leagueTable: createLeagueTable([updatedPlayersTeam, ...updatedOppositionTeams]),
  };

  return updatedGame;
};
