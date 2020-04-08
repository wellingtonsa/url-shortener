/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Calendar, CalendarSvgProps } from '@nivo/calendar';
import { Dimensions } from '@nivo/core';
import { ICalendar } from 'constants/types';
import moment from 'moment';
import { Tooltip } from '../index.styles';


interface Props {
    data: ICalendar[];
    width?: number;
    height?: number;
  }

  type CalendarConfig = CalendarSvgProps & Dimensions;

const CalendarChart:React.SFC<Props> = ({ data, width = 500, height = 500 }) => {
  const to = new Date();
  const from = to;

  const config:CalendarConfig = {
    data,
    width,
    height,
    margin: {
      top: 60, left: 20, right: 20, bottom: 60,
    },
    monthBorderWidth: 0,
    monthBorderColor: '#d5d5d5',
    dayBorderWidth: 2,
    dayBorderColor: '#d5d5d5',
    from: from.toISOString(),
    to: to.toISOString(),
    theme: {
      tooltip: {
        container: {
          background: '#333',
        },
      },
    },
    tooltip: ({
      value, color, day,
    }) => (
      <Tooltip>
        <span>{moment(day).format('MMMM Do')}</span>
        <strong style={{ color }}>
          {`Total clicks:${value}`}
        </strong>
      </Tooltip>
    ),

  };

  return (
    <Calendar
      {...config}
      colors={['#f0f0f0', '#ff96a6', '#e8566c', '#f6435d']}
    />
  );
};

export default CalendarChart;
