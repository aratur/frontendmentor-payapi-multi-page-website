import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../../pages/home.module.scss';
import ownStyle from './start_building.module.scss';
import ImgWithShadow from '../ImgWithShadow/ImgWithShadow';
import ScheduleDemo from '../../ScheduleDemo/ScheduleDemo';

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
      <h1 className="h1">Start building with our APIs for absolutely free.</h1>
      <ScheduleDemo pageId="StartBuilding" />
      <div className={ownStyle.any_questions_container}>
        Have any questions?
        <Link to="/contact"> Contact Us</Link>
      </div>
    </div>
    <div className={style.section__image__area_right}>
      <ImgWithShadow img="PhoneMockUp" />
    </div>
  </section>
);

export default StartBuilding;
