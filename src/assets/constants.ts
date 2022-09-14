// Img path
export const imgPath = './assets/img/';

export const LNG = 'LNG';
export const DEFAULT_LNG = 'mk';

// Local Storage constants
export enum GLOBAL_CONSTS {
    UPDATE_PASSWORD = 'UPDATE_PASSWORD_ALERT',
    SERVER_STATUS = 'STATUS',
    MISSING_ROLE = 'MISSING_ROLE',
    ACCOUNT_NOT_COMPLETED = 'ACCOUNT_NOT_COMPLETED',
    DATE_FORMAT = 'dd.MM.yyyy HH:mm:ss',
    DATE_Y_FORMAT = 'dd.MM.yyyy',
}

/**
 * All Regex used in our app
 */
export const REGEX = {
    EMAIL: /^[a-zA-Z\u0400-\u04FF0-9_.-]*(\.[a-zA-Z\u0400-\u04FF][\u0400-\u04FFa-zA-Z0-9_.-]*)?@[a-zA-Z-0-9]*\.[a-zA-Z]+(\.[a-zA-Z]+)?$/,
    NUMBER: /\d+$/,
    ALPHA: /[a-zA-Z]+/,
    IP_ADDR: /^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$/,
    // tslint:disable-next-line:max-line-length
    DNS: /^(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5]))(,\s*(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])))*$/,
    // tslint:disable-next-line:max-line-length
    NTP: /(([a-z-_]*)?(\.[a-z0-9-_]+){2,4})(\s*([a-z-_]*)?(\.[a-z0-9-_]+){2,4})*$/,
    URL: /^(www|pool)?.?[a-z0-9-]+(.|:)([a-z0-9-]+)?$/,
    MAC_ADDRESS: '^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$',
    PHONE_NUMBER: /^(07)[0-9]{7}$|^((\+389)(7))[0-9]{7}$/
};

export const RESP_ERRORS = {
    GET: 'A server error occured while getting data',
    PUT: 'A server error occured while editing',
    POST: 'A server error occured while adding',
    DELETE: 'A server error occured while removing',
    ID: 'Error: Id not found!'
}
