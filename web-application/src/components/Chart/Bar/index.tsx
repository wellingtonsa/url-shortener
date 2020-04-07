/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Bar, BarSvgProps } from '@nivo/bar';
import { Dimensions } from '@nivo/core';
import { IBar } from 'constants/types';
import moment from 'moment';
import { Tooltip } from './index.styles';


interface Props {
  data: IBar[];
  width?: number;
  height?: number;
}

type BarConfig = BarSvgProps & Dimensions;

const BarChart:React.SFC<Props> = ({ data, width = 500, height = 500 }) => {
  const config:BarConfig = {
    width,
    data,
    height,
    margin: {
      top: 60, left: 20, right: 20, bottom: 60,
    },
    indexBy: 'label',
    minValue: 0,
    maxValue: 50,
    labelSkipWidth: 16,
    labelSkipHeight: 16,
    enableGridX: false,
    enableGridY: false,
    enableLabel: false,
    axisLeft: null,
    axisBottom: {
      format: (value) => formatDate((value as string)),

    },
    theme: {
      axis: {
        ticks: {
          text: {
            fontSize: '12px',
            fontWeight: 600,
            fill: '#b3b3b3',
            fontFamily: 'SF Display',
          },
        },
      },
      tooltip: {
        container: {
          background: '#333',
        },
      },
    },
    tooltip: ({
      id, value, color, indexValue,
    }) => (
      <Tooltip>
        <span>{moment(indexValue).format('MMMM Do')}</span>
        <strong style={{ color }}>
          {`Total clicks:${value}`}
        </strong>
      </Tooltip>
    ),

  };

  const formatDate = (value:string):string => ((Number(value.slice(3, 5))) % 5 === 0 ? value : '');

  return (
    <Bar
      {...config}
      keys={['value']}
      colors={['#f6435d']}
    />
  );
};

export default BarChart;
