import React from 'react';
import style from './background_pattern.module.scss';
import bgPatternCircle from '../../assets/shared/desktop/bg-pattern-circle.svg';

type Props = {
  variant: 'home' | 'home-we-work' | 'home-simple-ui' | 'other';
};

const BackgroundPattern = (props: Props) => {
  const { variant } = props;
  return (
    <img
      src={bgPatternCircle}
      alt="background pattern"
      className={style['background-pattern']}
      data-page={variant}
      aria-hidden="true"
    />
  );
};

export default BackgroundPattern;
