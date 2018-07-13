import { Request } from './unimportant/RequestParser';


export function rememberNo(request: Request): void {
    request.respond("Ok you can set a reminder at any time by typing the 'remember' command")
}