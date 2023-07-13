import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import appRouter from './routes/appRouter';

const app: Application = express();
app.use(cors());
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

const PORT: number = 4002;

appRouter(app);

const server = app.listen(PORT, () => {
    console.log('listening on port %s...', server?.address());
});
