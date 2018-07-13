import { Request } from './unimportant/RequestParser';
import { futureMessages } from './timed';


var fs = require('fs');
class Message {
    messageList: string[] = []
    path ="C:/Users/Dev PC/Documents/forget-not-bot/src/reminders.rtf"
    clearMessage(){
        fs.writeFile(this.path, "")
        
        
    }
    writeFile(data:any) {
        fs.appendFile(this.path, data)
        

    }
}

export const message = new Message();

export function remember(request: Request): void {
    
    if ((request.getMessage()).replace(/ /g,'') !== "remember"){
        var str = request.getMessage();
        str = str.substring(9, str.length );
        message.writeFile(` \n ${str} `)
        request.respond(`Yes!  I shall remember ${str}  ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ Do you want to set anymore reminders?`); 
        
}
    else{
        request.respond("Please give me something to remember")  ;

    }
}