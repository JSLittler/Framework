import { Application } from "express";
import { getSlmLoginPage } from "../pageConfig";
import gamesRoutes from "./games";

import loginRoutes from "./login";

const appRouter = (app: Application) => {
    app.get('/slm', async (req, res) => {
      const response = {
        state: {},
        config: await getSlmLoginPage()
      };

      res.send(response);
    });
  
    loginRoutes(app);
  
    gamesRoutes(app);
  
    // playersRoutes(app, fs);
  };
  
  export default appRouter;