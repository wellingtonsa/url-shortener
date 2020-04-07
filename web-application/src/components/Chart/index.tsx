/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { IBar } from 'constants/types';
import Bar from './Bar';

interface Props {
    width: number;
    height: number;
    data: IBar[];
    type: 'bar'
}


const Chart:React.SFC<Props> = ({ type, ...props }) => {
  if (type === 'bar') {
    return (
      <Bar {...props} />
    );
  }
  return (
    <h1>No charts yet</h1>
  );
};

export default Chart;
