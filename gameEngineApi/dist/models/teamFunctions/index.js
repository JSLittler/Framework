"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormations = exports.getTeamNames = void 0;
const teamNames = require('../../data/teams/teamNames.json');
const formations = require('../../data/formations/formations.json');
const getTeamNames = () => {
    return teamNames;
};
exports.getTeamNames = getTeamNames;
const getFormations = () => {
    return formations;
};
exports.getFormations = getFormations;
