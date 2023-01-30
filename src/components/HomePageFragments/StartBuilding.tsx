import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../pages/home.module.scss';
import ownStyle from './StartBuilding.module.scss';
import ImgWithShadow from './ImgWithShadow';
import ScheduleDemo from '../ScheduleDemo';

const StartBuilding = () => (
  <section
    className={[style.section, ownStyle.section, 'page__anchor'].join(' ')}
    data-section="one"
  >
    <div
      className={[
        style.section__description_container,
        ownStyle.section__description_container,
        style.section__description__area_left,
      ].join(' ')}
      data-section="one"
    >
      <h1>Start building with our APIs for absolutely free.</h1>
      <ScheduleDemo />
      <div className={ownStyle.any_questions_container}>
        Have any questions?
        <Link to="/"> Contact Us</Link>
      </div>
    </div>
    <div className={style.section__image__area_right}>
      <ImgWithShadow img="PhoneMockUp" />
    </div>
  </section>
);

export default StartBuilding;
