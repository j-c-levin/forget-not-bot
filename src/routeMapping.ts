import { help } from './help';
import { remember } from './remember';
import { remind } from './remind';
import { clear } from './clear';
import { timed } from './timed';
import { rememberYes } from './rememberYes';
import { rememberYesFallback } from './rememberYesFallback';
import { rememberNo } from './rememberNo';

export function mapRoutes(routes: any): void {
    routes['Help'] = help;
    routes['Remember'] = remember;
    routes['Remind'] = remind;
    routes['Clear'] = clear;
    routes['Timed'] = timed;
    routes['Remember - yes'] = rememberYes;
    routes['Remember - no'] = rememberNo;
    routes['Remember - yes - fallback'] = rememberYesFallback;
}
