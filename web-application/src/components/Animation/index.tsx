/* eslint-disable react/prop-types */
import React from 'react';
import Lottie from 'react-lottie';

interface Props {
    animation: any;
    width: number;
    height: number;
    loop?: boolean;
}

const Animation:React.SFC<Props> = ({
  animation, width, height, loop = true,
}) => {
  const defaultOptions = {
    animationData: animation,
    width: '100%',
    height: '100%',
    loop,
    autoPlay: true,
  };

  return (
    <Lottie
      options={defaultOptions}
      width={width}
      height={height}
      isClickToPauseDisabled
    />
  );
};

export default Animation;
