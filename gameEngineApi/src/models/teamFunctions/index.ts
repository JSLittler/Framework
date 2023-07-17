const teamNames = require('../../data/teams/teamNames.json');
const formations = require('../../data/formations/formations.json');

export const getTeamNames = () => {
  return teamNames;
};

export const getFormations = () => {
  return formations;
};
