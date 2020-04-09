/* eslint-disable @typescript-eslint/interface-name-prefix */
import { Serie } from '@nivo/line';

export interface IBar {
    label: string ;
    value: number;
  }

export interface ICalendar {
    day: string ;
    value: number;
  }

export type ILine = Serie;

export interface Click {
    createdAt: Date
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
