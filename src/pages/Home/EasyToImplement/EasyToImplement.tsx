import React from 'react';
import style from '../home.module.scss';
import ownStyle from './easy_to_implement.module.scss';
import ImgWithShadow from '../ImgWithShadow/ImgWithShadow';

const EasyToImplement = () => (
  <section
    className={[
      style.home__section,
      ownStyle['easy-to-implement__section'],
      'anchor-page',
    ].join(' ')}
  >
    <div
      className={[
        style.home__container,
        ownStyle['easy-to-implement__container'],
        style['home__desc-area-right'],
      ].join(' ')}
    >
      <h2 className="h2">Easy to implement</h2>
      <p>
        Our API comes with just a few lines of code. You’ll be up and running in
        no time. We built our documentation page to integrate payments
        functionality with ease.
      </p>
    </div>
    <div className={style['home__img-area-left']}>
      <ImgWithShadow variant="EasyToImplement" />
    </div>
  </section>
);

export default EasyToImplement;
