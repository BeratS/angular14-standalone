import { environment } from "src/environments/environment";

export const PREFFIX = `${environment.url}/api/`;

export const URLS = {
    USERS: PREFFIX + 'users',
}
