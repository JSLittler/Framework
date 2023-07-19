import { Application } from "express";

import { findUser } from '../database/userFunctions.js';
import { setupNewGame } from "../models/newGame/index.js";
import { getSlmDashboardPage, getSlmViewTeamPage, getSlmViewPlayerPage, getSlmTransfersPage, getSlmPickTeamPage, getSlmPlayGamePage } from "../pageConfig/index.js";
import { findGameByUser } from "../database/gameFunctions.js";

// import { findSavedGame, deleteSavedGame, managePlayerGames } from '../database/gameFunctions.js';

// import { simulateGames } from '../models/simulateGames.js';

const gamesRoutes = (app: Application) => {
  app.get('/slm/game/new', async (req, res) => {
    const { username, id } = req?.headers;
    const { name, _id } = await findUser(username?.toString() || '');
    
    if(!id || !username || _id.toString() !== id?.toString()) {
      return res.status(401).json({});
    }

    const config = await getSlmDashboardPage();
    const newGame = await setupNewGame(name, _id);
    const userDetails = {
      id: _id,
      username: name,
      loggedIn: true
    };

    const response = {
      state: { 
        userDetails,
        game: newGame
      },
      config
    };

    return res.send(response);
  });

  app.get('/slm/game/saved', async (req, res) => {
    const { username, id } = req?.headers;
    const { name, _id } = await findUser(username?.toString() || '');
    
    if(!id || !username || _id.toString() !== id?.toString()) {
      return res.status(401).json({});
    }

    const config = await getSlmDashboardPage();
    const savedGame = await findGameByUser(name, _id);
    const userDetails = {
      id: _id,
      username: name,
      loggedIn: true
    };

    const response = {
      state: { 
        userDetails,
        game: savedGame
      },
      config
    };

    return res.send(response);
  });

  app.get('/slm/game/team/:team', async (req, res) => {
    const { username, id } = req?.headers;
    const { team } = req.params
    const { name, _id } = await findUser(username?.toString() || '');
    
    if(!id || !username || _id.toString() !== id?.toString()) {
      return res.status(401).json({});
    }

    const savedGame = await findGameByUser(name, _id);
    const config = await getSlmViewTeamPage(team);
    const userDetails = {
      id: _id,
      username: name,
      loggedIn: true
    };

    const response = {
      state: { 
        userDetails,
        game: savedGame
      },
      config
    };

    return res.send(response);
  });

  app.get('/slm/game/team/:team/player/:player', async (req, res) => {
    const { username, id } = req?.headers;
    const { team, player } = req.params
    const { name, _id } = await findUser(username?.toString() || '');
    
    if(!id || !username || _id.toString() !== id?.toString()) {
      return res.status(401).json({});
    }

    const savedGame = await findGameByUser(name, _id);
    const config = await getSlmViewPlayerPage(team, player);
    const userDetails = {
      id: _id,
      username: name,
      loggedIn: true
    };

    const response = {
      state: { 
        userDetails,
        game: savedGame
      },
      config
    };

    return res.send(response);
  });
  
  app.get('/slm/game/transfers', async (req, res) => {
    const { username, id } = req?.headers;
    const { name, _id } = await findUser(username?.toString() || '');
    
    if(!id || !username || _id.toString() !== id?.toString()) {
      return res.status(401).json({});
    }

    const savedGame = await findGameByUser(name, _id);
    const config = await getSlmTransfersPage();
    const userDetails = {
      id: _id,
      username: name,
      loggedIn: true
    };

    const response = {
      state: { 
        userDetails,
        game: savedGame
      },
      config
    };

    return res.send(response);
  });

  app.post('/slm/game/pickTeam', async (req, res) => {
    const { username, id } = req?.headers;
    const { name, _id } = await findUser(username?.toString() || '');
    
    if(!id || !username || _id.toString() !== id?.toString()) {
      return res.status(401).json({});
    }

    const savedGame = await findGameByUser(name, _id);
    const config = await getSlmPickTeamPage();
    const userDetails = {
      id: _id,
      username: name,
      loggedIn: true
    };

    const response = {
      state: { 
        userDetails,
        game: savedGame
      },
      config
    };

    return res.send(response);
  });

  app.get('/slm/game/playGame', async (req, res) => {
    const { username, id } = req?.headers;
    const { name, _id } = await findUser(username?.toString() || '');
    
    if(!id || !username || _id.toString() !== id?.toString()) {
      return res.status(401).json({});
    }

    const savedGame = await findGameByUser(name, _id);
    const config = await getSlmPlayGamePage();
    const userDetails = {
      id: _id,
      username: name,
      loggedIn: true
    };

    const response = {
      state: { 
        userDetails,
        game: savedGame
      },
      config
    };

    return res.send(response);
  });
};

export default gamesRoutes;