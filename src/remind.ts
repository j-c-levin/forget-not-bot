import { Request } from './unimportant/RequestParser';
import { message } from './remember';
import { futureMessages } from './timed';
var fs = require('fs');

export function remind(request: Request): void {
    var fileContents =fs.readFileSync("C:/Users/Dev PC/Documents/forget-not-bot/src/reminders.rtf","utf8");

    var outputToUser =`Your reminders are:${" ‌‌".repeat(38)} ${fileContents.split("\n").splice(1,fileContents.split("\n").length)}`;
    var currentSetReminders =0;
    
    futureMessages.forEach(function (messageObject) {
        if (Date.now()- messageObject.dateTime.getTime() >= 0){
            currentSetReminders += 1;
            outputToUser+= ` , At ${messageObject.dateTime.toLocaleTimeString()} I was supposed to remind you to ${messageObject.message}`;
        }

    })
    
    if (fileContents !=="" || currentSetReminders > 0){
        
        request.respond(outputToUser);
    }
    else{
    
        request.respond(`You haven't set any reminders yet`);
        
    }

}

