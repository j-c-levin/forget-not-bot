import * as ngrok from "ngrok";
// import * as df from 'dialogflow-fulfillment';
import express from 'express';

async function init() {
    // Start ngrok if not deployed
    const url = await ngrok.connect(80);
    console.log(url);
    console.log("bot running");
    const app = express();
    app.listen(80, () => console.log('Example app listening on port 80!'));
    // const WebhookClient = df.WebhookClient;
    app.use(() => {
        console.log('called');
    });
}

init();
