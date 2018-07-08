import { help } from './help';
import { remember } from './remember';
import { remind } from './remind';

export function mapRoutes(routes: any): void {
    routes['Help'] = help;
    routes['Remember'] = remember;
    routes['Remind'] = remind;
}
