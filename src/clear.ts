import { Request } from './unimportant/RequestParser';
import { message } from './remember';



export function clear(request: Request): void {
    message.clearMessage();
    request.respond('Reminders cleared')

}