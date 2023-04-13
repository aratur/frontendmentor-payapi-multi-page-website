import React from 'react';
import style from '../home.module.scss';
import ownStyle from './simple_ui.module.scss';
import ImgWithShadow from '../ImgWithShadow/ImgWithShadow';
import BackgroundPattern from '../../../components/BackgroundPattern';

const SimpleUI = () => (
  <section
    className={[
      style.home__section,
      ownStyle['simple-ui__section'],
      'anchor-page',
    ].join(' ')}
  >
    <BackgroundPattern variant="home-simple-ui" />
    <div
      className={[
        style.home__container,
        ownStyle['simple-ui__container'],
        style['home__desc-area-left'],
      ].join(' ')}
    >
      <h2 className="h2">Simple UI & UX</h2>
      <p>
        Our pre-built form is easy to integrate in your app or website’s
        checkout flow and designed to optimize conversion.
      </p>
    </div>
    <div className={style['home__img-area-right']}>
      <ImgWithShadow variant="SimpleUI" />
    </div>
  </section>
);

export default SimpleUI;
