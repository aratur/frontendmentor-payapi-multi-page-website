import React from 'react';
import { Link } from 'react-router-dom';
import style from '../home.module.scss';
import ownStyle from './start_building.module.scss';
import ImgWithShadow from '../ImgWithShadow/ImgWithShadow';
import ScheduleDemo from '../../../components/ScheduleDemo/ScheduleDemo';

const StartBuilding = () => (
  <section
    className={[
      style.home__section,
      ownStyle['start-building__section'],
      'anchor-page',
    ].join(' ')}
  >
    <div
      className={[
        style.home__container,
        ownStyle['start-building__container'],
        style['home__desc-area-left'],
      ].join(' ')}
    >
      <h1 className="h1">Start building with our APIs for absolutely free.</h1>
      <ScheduleDemo pageId="StartBuilding" />
      <div className={ownStyle['start-building__any-questions']}>
        Have any questions?
        <Link to="/contact"> Contact Us</Link>
      </div>
    </div>
    <div className={style['home__img-area-right']}>
      <ImgWithShadow variant="PhoneMockUp" />
    </div>
  </section>
);

export default StartBuilding;
