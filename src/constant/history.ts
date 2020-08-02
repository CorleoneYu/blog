import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export enum RouterMap {
    index =  '/',
    about = '/about',
    article = '/article',
    search = '/search',
    archive = '/archive',
}

export default history;
