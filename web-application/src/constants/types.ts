/* eslint-disable @typescript-eslint/interface-name-prefix */

export interface Click {
    CreatedAt: Date
}
export interface URL {
    full: string,
    short?: string,
    clicks?: Click[]
}

export interface IAlert {
    message: string;
    type?: 'success' | 'warning' | 'error';
}
