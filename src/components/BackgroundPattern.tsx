import React from 'react';
import style from './background-pattern.module.scss';
import bgPatternCircle from '../assets/shared/desktop/bg-pattern-circle.svg';

const BackgroundPattern = () => (
  <img
    src={bgPatternCircle}
    alt="background pattern"
    className={style.background_pattern}
    data-page="home"
    aria-hidden="true"
  />
);

export default BackgroundPattern;
