import React from 'react';
import style from '../../pages/home.module.scss';
import ownStyle from './simple_ui.module.scss';
import ImgWithShadow from './ImgWithShadow';
import BackgroundPattern from '../BackgroundPattern';

const SimpleUI = () => (
  <section
    className={[style.section, ownStyle.section, 'page__anchor'].join(' ')}
    data-section="four"
  >
    <BackgroundPattern dataPageLocation="home-simple-ui" />
    <div
      className={[
        style.section__description_container,
        ownStyle.section__description_container,
        style.section__description__area_left,
      ].join(' ')}
      data-section="four"
    >
      <h2 className="h2">Simple UI & UX</h2>
      <p>
        Our pre-built form is easy to integrate in your app or website’s
        checkout flow and designed to optimize conversion.
      </p>
    </div>
    <div className={style.section__image__area_right}>
      <ImgWithShadow img="SimpleUI" />
    </div>
  </section>
);

export default SimpleUI;
