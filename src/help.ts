import { Request } from './RequestParser';

export function help(request: Request): void {
    request.respond(`I can help with many things!...I've just forgotten what`);
}
