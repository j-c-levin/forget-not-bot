import { Request } from './unimportant/RequestParser';

export function remember(request: Request): void {
    request.respond(`Yes!  I shall remember ${request.getMessage()}!`);
}
