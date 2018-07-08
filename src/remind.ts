import { Request } from './unimportant/RequestParser';

export function remind(request: Request): void {
    request.respond('I...may have forgotten what you asked for.');
}
