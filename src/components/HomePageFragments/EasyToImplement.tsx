import React from 'react';
import style from '../../pages/home.module.scss';
import ownStyle from './easy_to_implement.module.scss';
import ImgWithShadow from './ImgWithShadow';

const EasyToImplement = () => (
  <section
    className={[style.section, ownStyle.section, 'page__anchor'].join(' ')}
    data-section="three"
  >
    <div
      className={[
        style.section__description_container,
        ownStyle.section__description_container,
        style.section__description__area_right,
      ].join(' ')}
      data-section="three"
    >
      <h2 className="h2">Easy to implement</h2>
      <p>
        Our API comes with just a few lines of code. You’ll be up and running in
        no time. We built our documentation page to integrate payments
        functionality with ease.
      </p>
    </div>
    <div className={style.section__image__area_left}>
      <ImgWithShadow img="EasyToImplement" />
    </div>
  </section>
);

export default EasyToImplement;
