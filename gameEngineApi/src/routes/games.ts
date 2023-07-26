import { Application } from "express";

import { findUser } from '../database/userFunctions.js';
import { setupNewGame } from "../models/newGame/index.js";
import { getSlmDashboardPage, getSlmViewTeamPage, getSlmViewPlayerPage, getSlmTransfersPage, getSlmPickTeamPage, getSlmPlayGamePage } from "../pageConfig/index.js";
import { findGameByUser, managePlayerGames } from "../database/gameFunctions.js";

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
  
  app.get('/slm/game/transfers/new', async (req, res) => {
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

  app.get('/slm/game/transfers/outgoing/:outgoing/incoming/:incoming', async (req, res) => {
    const { username, id } = req?.headers;
    const { outgoing, incoming } = req.params
    const { name, _id } = await findUser(username?.toString() || '');
    
    if(!id || !username || _id.toString() !== id?.toString()) {
      return res.status(401).json({});
    }

    const savedGame: any = await findGameByUser(name, _id);

    const getPlayer = (playerName: string, squad: any) => {
      const array: any[] = []
      Object.keys(squad).map((key: any) => {
        squad[`${key}`].forEach((player: any) => {
          if (player.name === playerName) {
            array.push({
              player,
              group: key
            })
          }
        });
      });

      return array.find((i: any) => i.player.name === playerName);
    };
    
    const { playersTeam, transferList } = savedGame;
    const playerOut = getPlayer(outgoing, playersTeam.squad);
    const playerIn = getPlayer(incoming, transferList.squad);

    playersTeam.squad[playerOut.group] = playersTeam.squad[playerOut.group].filter((p: any) => p.name !== playerOut.player.name);
    playersTeam.squad[playerOut.group].push(playerIn.player);
    savedGame.playersTeam = playersTeam;

    transferList.squad[playerIn.group] = transferList.squad[playerIn.group].filter((p: any) => p.name !== playerIn.player.name);
    transferList.squad[playerIn.group].push(playerOut.player);
    savedGame.transferList = transferList;

    await managePlayerGames(savedGame, name, _id);

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

  app.get('/slm/game/pick-team', async (req, res) => {
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

  app.post('/slm/game/pick-team', async (req, res) => {
    const { username, id } = req?.headers;
    const tactics = req.body;
    const { name, _id } = await findUser(username?.toString() || '');
    
    if(!id || !username || _id.toString() !== id?.toString()) {
      return res.status(401).json({});
    }

    const savedGame: any = await findGameByUser(name, _id);
    savedGame.playersTeam.tactics = tactics;
    await managePlayerGames(savedGame, name, _id);

    const config = await getSlmDashboardPage();

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