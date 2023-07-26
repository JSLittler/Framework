import { connectToSavedGames, closeConnection } from "./connections"; 

export const findGameByUser = async (username: string, userId: string) => {
  try {
    const savedGamesCollection = await connectToSavedGames();
    
    const query = { owner: { username, userId, }};
    const savedGame = await savedGamesCollection.findOne(query);

    return savedGame;
  } finally {
    await closeConnection;
  }
};

export const findSavedGame = async (id: any) => {
  try {
    const savedGamesCollection = await connectToSavedGames();
    
    const query = { _id: id };
    const savedGame = await savedGamesCollection.findOne(query);

    return savedGame;
  } finally {
    await closeConnection;
  }
};

export const findSavedGameIdByUser = async (username: string, userId: string) => {
  try {
    const savedGamesCollection = await connectToSavedGames();
    
    const query = { owner: {
      username,
      userId
    } };
    const result = await savedGamesCollection.findOne(query);

    return result?._id;
  } catch(err) {
    console.log(err);
  }finally {
    await closeConnection;
  }
};

export const addSavedGame = async (savedGame: any) => {
  try {
    const savedGamesCollection = await connectToSavedGames();

    const result: any = await savedGamesCollection.insertOne(savedGame);

    if (result.insertedId === savedGame._id) {
      return console.dir('Successfully saved game.');
    }

    return console.dir('Unable to save game.');
  } finally {
    await closeConnection();
  }
};

export const deleteSavedGame = async (gameId: string) => {
  try {
    const savedGamesCollection = await connectToSavedGames();
    
    const query: any = { _id: gameId };
    const result = await savedGamesCollection.deleteOne(query);

    if (result.deletedCount === 1) {
      return console.dir('Successfully deleted saved game.');
    }

    return console.dir('No saved games matched the query. Deleted 0 saved games.');
  } finally {
    await closeConnection();
  }
};

export const managePlayerGames = async (game: any, username: string, userId: string) => {
  const previouslySavedGame: any = await findSavedGameIdByUser(username, userId);
  
  if(previouslySavedGame) {
    await deleteSavedGame(previouslySavedGame);
  }

  await addSavedGame(game);
};