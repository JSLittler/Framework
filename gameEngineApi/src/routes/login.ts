import { Application } from "express";

import { findUser } from "../database/userFunctions";
import { findGameByUser } from "../database/gameFunctions";
import { getSlmSelectGamePage } from "../pageConfig";

const loginRoutes = (app: Application) => {
  app.get('/slm/login', async (req, res) => {
    const { username, password } = req.headers;
    
    if(!username && !password) {
        res.status(401).send('You do not have rights to visit this page');
    }
    
    const { _id, name, storedPassword } = await findUser(username?.toString() || '');

    const userDetails = {
      id: _id,
      username: name,
      loggedIn: true
    };

    const savedGame = await findGameByUser(name, _id);
    const config = await getSlmSelectGamePage();

    const response = {
      state: { 
        userDetails,
        game: savedGame
      },
      config
    };

    return storedPassword === password ? res.send(response) : res.send('incorrect username or password');
  });
};

export default loginRoutes;