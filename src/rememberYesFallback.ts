import { Request } from './unimportant/RequestParser';
import { message } from './remember';

export function rememberYesFallback(request: Request): void {
    message.writeFile(request.getMessage())
    request.respond("Ok I got that. Do you want to set anymore reminders?")
}