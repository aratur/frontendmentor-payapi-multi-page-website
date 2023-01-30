import React from 'react';
import style from './BackgroundPattern.module.scss';
import bgPatternCircle from '../assets/shared/desktop/bg-pattern-circle.svg';

type Props = {
  dataPageLocation: 'header' | 'home-we-work' | 'home-simple-ui' | 'other';
};

const BackgroundPattern = (props: Props) => {
  const { dataPageLocation } = props;
  return (
    <img
      src={bgPatternCircle}
      alt="background pattern"
      className={style.background_pattern}
      data-page={dataPageLocation}
      aria-hidden="true"
    />
  );
};

export default BackgroundPattern;
