import { help } from './help';

export function mapRoutes(routes: any): void {
    routes['Help'] = help;
}
