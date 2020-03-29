/* eslint-disable @typescript-eslint/interface-name-prefix */
export interface URL {
    full: string,
    short?: string,
    clicks?: number
}

export interface IAlert {
    message: string;
    type?: 'success' | 'warning' | 'error';
}
