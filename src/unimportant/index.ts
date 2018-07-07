import express from 'express';
import * as bodyParser from 'body-parser';
import { help } from './help';
import { Request } from './RequestParser';
const localTunnel = require('localtunnel');

async function init() {
    const app = express();
    app.listen(80, () => console.log('Bot running on port 80!'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.post('*', (req, res) => {
        if (req.body.queryResult.intent.displayName === 'Help') {
            help(new Request(req, res));
        }
    });
    app.get('*', (req, res) => res.send('okay'));
}

init();
