import { Request } from './unimportant/RequestParser';
import { message } from './remember';

class parseTimes {
    hours = 0
    mins = 0
    message = ""
    constructor(inputTime: string[]) {
        if (inputTime[1].split(":").length == 2) {
            this.hours = Number(inputTime[1].split(":")[0])
            this.mins = Number(inputTime[1].split(":")[1])
            this.message = String(inputTime.splice(2, inputTime.length))
        }
    }
    getTimes(): getTimeResponse {
        var d = new Date();
        d.setHours(this.hours);
        d.setMinutes(this.mins);

        
        var response = {
            hours: this.hours,
            mins: this.mins,
            message: this.message,
            dateTime: d,

        }
        return response
    }
}
interface getTimeResponse{
    hours:number;
    mins:number;
    message:string;
    dateTime:Date;
}
export const futureMessages: getTimeResponse[] = [];

export function timed(request: Request): void {
    var times = request.getMessage().split(" ")
    var parsedTimes = new parseTimes(times);
    console.log(Date.now(),parsedTimes.getTimes().dateTime.getTime())
    if (Date.now() - parsedTimes.getTimes().dateTime.getTime() >= 0) {
        request.respond(`That time has already passed`)
    }
    else {
        futureMessages.push(parsedTimes.getTimes())
        request.respond(`Ok at ${parsedTimes.getTimes().dateTime.toLocaleTimeString()} I'll remind you to ${parsedTimes.getTimes().message}`)
    }

}


                                       

