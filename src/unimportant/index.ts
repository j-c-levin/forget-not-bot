import express from 'express';
import * as bodyParser from 'body-parser';
import { Request } from './RequestParser';
import { help } from '../help';
import { mapRoutes } from '../mapping';
const localTunnel = require('localtunnel');

async function init() {
    const app = express();
    app.listen(80, () => console.log('Bot running on port 80!'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    const routes: { [name: string]: (req: Request) => void } = {};
    mapRoutes(routes);
    app.post('*', (req, res) => {
        const intentName = req.body.queryResult.intent.displayName;
        if (typeof routes[intentName] !== 'undefined') {
            routes[intentName](new Request(req, res));
        }
    });
}

init();
