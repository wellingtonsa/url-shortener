/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { IBar, ICalendar, ILine } from 'constants/types';
import Bar from './Bar';
import Calendar from './Calendar';
import Line from './Line';

interface Props {
    width: number;
    height: number;
    data: IBar[] | ICalendar[] | ILine[];
    type: 'bar' | 'calendar'| 'line';
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

  if (type === 'line') {
    return (
      <Line data={(data as ILine[])} {...props} />
    );
  }
  return (
    <h1>No charts yet</h1>
  );
};

export default Chart;
