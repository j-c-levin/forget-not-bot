import { Request } from './unimportant/RequestParser';

export function help(request: Request): void {
    
    request.respond(`I can help with many things!‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌
    Type "remember" followed by a message to set a reminder‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ 
    Type "remind" and I will remind you ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌
    Type "clear" to clear all reminders`);
    
    
}
