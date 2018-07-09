import express from 'express';
import * as bodyParser from 'body-parser';
import { Request } from './RequestParser';
import { mapRoutes } from '../routeMapping';

async function init() {
    const app = express();
    app.listen(3000, () => console.log('Bot running on port 3000!'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    const routes: { [name: string]: (req: Request) => void } = {};
    mapRoutes(routes);
    app.post('*', (req, res) => {
        const intentName = req.body.queryResult.intent.displayName;
        console.log('incoming intent:', intentName);
        if (typeof routes[intentName] !== 'undefined') {
            routes[intentName](new Request(req, res));
        } else {
            console.log(`but it didn't match any route names`);
        }
    });
}

init();
