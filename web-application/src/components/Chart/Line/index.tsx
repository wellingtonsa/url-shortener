/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Line, LineSvgProps } from '@nivo/line';
import { Dimensions } from '@nivo/core';
import { ILine } from 'constants/types';
import { Tooltip } from '../index.styles';


interface Props {
    data: ILine[];
    width?: number;
    height?: number;
  }

  type LineConfig = LineSvgProps & Dimensions;

const LineChart:React.SFC<Props> = ({ data, width = 500, height = 500 }) => {
  const config:LineConfig = {
    data,
    width,
    height,
    margin: {
      top: 60, left: 20, right: 20, bottom: 60,
    },
    animate: true,
    colors: ['#f6435d'],
    curve: 'monotoneX',
    enableArea: true,
    axisBottom: null,
    axisLeft: null,
    enableGridX: false,
    enableGridY: false,
    lineWidth: 3,
    enablePoints: false,
  };

  const PointLayer = ({ points }:any) => {
    const { x, y, data } = points.sort((a:any, b:any) => b.data.y - a.data.y)[0];
    return (
      <>
        <rect
          x={x - 40}
          y={y - 55}
          width={80}
          height={40}
          rx="20"
          fill="#f6435d40"
        />
        <text x={x - 20} y={y - 30} fill="red">{`${data.y} clicks`}</text>
        <circle cx={x} cy={y} r="6" stroke="#f6435d" strokeWidth="3" fill="white" />
      </>
    );
  };


  return (
    <Line
      {...config}
      layers={[
        'grid',
        'markers',
        'areas',
        'lines',
        PointLayer,
        'points',
      ]}
    />
  );
};

export default LineChart;
