"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayers = exports.updatePlayerAttributes = void 0;
const attributeConstants_1 = __importDefault(require("../../constants/attributeConstants"));
const players = {
    ['defenders']: require('../../data/players/defenders.json'),
    ['forwards']: require('../../data/players/forwards.json'),
    ['goalKeepers']: require('../../data/players/goalKeepers.json'),
    ['midfielders']: require('../../data/players/midfielders.json')
};
const { DEFENCE_ATTRIBUTES, ATTACK_ATTRIBUTES } = attributeConstants_1.default;
const updateAttributeValue = (attributeValue) => {
    const updatedValue = attributeValue += Math.floor(Math.random() * 20);
    return updatedValue < 100 ? updatedValue : 100;
};
const updatePlayerAttributes = (basePlayers) => {
    const updatedPlayers = basePlayers.map((p) => {
        return {
            name: p.name,
            club: p.club,
            positions: p.positions,
            attributes: p.attributes.map((attribute) => {
                return {
                    attributeName: Object.keys(attribute)[0],
                    attributeBaseValue: Object.values(attribute)[0],
                    attributeFinalValue: updateAttributeValue(Object.values(attribute)[0])
                };
            }),
        };
    });
    return updatedPlayers;
};
exports.updatePlayerAttributes = updatePlayerAttributes;
const getAverageAttribute = (attributes) => {
    const attributeTotals = attributes.map((a) => a.attributeFinalValue);
    return Math.round(attributeTotals.reduce((a, b) => a + b) / attributeTotals.length);
};
const addGoalKeeperAverage = (player) => {
    const { attributes } = player;
    return Object.assign(Object.assign({}, player), { attributesAverages: [{ attributeName: 'goalKeeperAverage', attributeFinalValue: getAverageAttribute(attributes) }] });
};
const getAttributes = (attributesArray, attributeNames) => {
    return attributesArray.filter((a) => attributeNames.includes(a.attributeName));
};
const addOutfieldAverages = (player) => {
    const { attributes } = player;
    const defenceAttributes = getAttributes(attributes, DEFENCE_ATTRIBUTES);
    const attackAttributes = getAttributes(attributes, ATTACK_ATTRIBUTES);
    return Object.assign(Object.assign({}, player), { attributesAverages: [
            { attributeName: 'defenceAverage', attributeFinalValue: getAverageAttribute(defenceAttributes) },
            { attributeName: 'midfieldAverage', attributeFinalValue: getAverageAttribute(attributes) },
            { attributeName: 'attackAverage', attributeFinalValue: getAverageAttribute(attackAttributes) },
        ] });
};
const getPlayers = (position) => {
    const playerDirectory = players;
    const selectedPlayers = playerDirectory[position];
    const updatedPlayers = (0, exports.updatePlayerAttributes)(selectedPlayers);
    return updatedPlayers.map((p) => p.positions.includes('GK') ? addGoalKeeperAverage(p) : addOutfieldAverages(p));
};
exports.getPlayers = getPlayers;
