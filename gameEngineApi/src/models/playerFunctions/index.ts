import ATTRIBUTE_CONSTANTS from '../../constants/attributeConstants';

const players = {
    ['defenders']: require('../../data/players/defenders.json'),
    ['forwards']: require('../../data/players/forwards.json'),
    ['goalKeepers']: require('../../data/players/goalKeepers.json'),
    ['midfielders']: require('../../data/players/midfielders.json')
};


const { DEFENCE_ATTRIBUTES, ATTACK_ATTRIBUTES } = ATTRIBUTE_CONSTANTS;

const updateAttributeValue = (attributeValue: any) => {
  const updatedValue = attributeValue += Math.floor(Math.random() * 30);

  return updatedValue < 100 ? updatedValue : 100;
};

export const updatePlayerAttributes = (basePlayers: any) => {
  const updatedPlayers = basePlayers.map((p: any) => {
    return {
      name: p.name,
      club: p.club,
      positions: p.positions,
      attributes: p.attributes.map((attribute: any) => {
        return {
          attributeName: Object.keys(attribute)[0],
          attributeBaseValue: Object.values(attribute)[0],
          attributeFinalValue: updateAttributeValue(Object.values(attribute)[0])
        }
      }),
    };
  });

  return updatedPlayers;
};

const getAverageAttribute = (attributes: any) => {
  const attributeTotals = attributes.map((a: any) => a.attributeFinalValue);
  
  return Math.round(attributeTotals.reduce((a: any, b: any) => a + b) / attributeTotals.length);
}

export const addGoalKeeperAverage = (player: any) => {
  const { attributes } = player;

  return {
    ...player,
    attributesAverages: [{ attributeName: 'goalKeeperAverage', attributeFinalValue: getAverageAttribute(attributes) }],
  };
};

const getAttributes = (attributesArray: any, attributeNames: any) => {
  return attributesArray.filter((a: any) => attributeNames.includes(a.attributeName));
};

export const addOutfieldAverages = (player: any) => {
  const { attributes } = player;
  const defenceAttributes = getAttributes(attributes, DEFENCE_ATTRIBUTES);
  const attackAttributes = getAttributes(attributes, ATTACK_ATTRIBUTES);

  return {
    ...player,
    attributesAverages: [
      { attributeName: 'defenceAverage', attributeFinalValue: getAverageAttribute(defenceAttributes) },
      { attributeName: 'midfieldAverage', attributeFinalValue: getAverageAttribute(attributes) },
      { attributeName: 'attackAverage', attributeFinalValue: getAverageAttribute(attackAttributes) },
    ],
  };
};

export const getPlayers = (position: any) => {
  const playerDirectory: any = players
  const selectedPlayers: any = playerDirectory[position];
  const updatedPlayers = updatePlayerAttributes(selectedPlayers);

  return updatedPlayers.map((p: any) => p.positions.includes('GK') ? addGoalKeeperAverage(p) : addOutfieldAverages(p));
};
