import { Request } from './unimportant/RequestParser';


export function rememberYes(request: Request): void {
    request.respond("Ok type another reminder. Remember this time you don't need to write 'remember' before it.")
}