/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { IBar, ICalendar } from 'constants/types';
import Bar from './Bar';
import Calendar from './Calendar';

interface Props {
    width: number;
    height: number;
    data: IBar[] | ICalendar[];
    type: 'bar' | 'calendar'
}


const Chart:React.SFC<Props> = ({ type, data, ...props }) => {
  if (type === 'bar') {
    return (
      <Bar data={(data as IBar[])} {...props} />
    );
  }
  if (type === 'calendar') {
    return (
      <Calendar data={(data as ICalendar[])} {...props} />
    );
  }
  return (
    <h1>No charts yet</h1>
  );
};

export default Chart;
