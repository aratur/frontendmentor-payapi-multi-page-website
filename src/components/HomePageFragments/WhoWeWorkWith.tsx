import React from 'react';
import style from '../../pages/home.module.scss';
import ownStyle from './WhoWeWorkWith.module.scss';
import Button from '../Button';
import CompanyLogos from '../CompanyLogos';
import BackgroundPattern from '../BackgroundPattern';

const WhoWeWorkWith = () => (
  <section
    className={[
      style.section,
      ownStyle.section,
      ownStyle.section__dark_colors,
      'page__anchor',
    ].join(' ')}
    data-section="two"
  >
    <BackgroundPattern dataPageLocation="home-we-work" />
    <div
      className={[
        style.section__description_container,
        ownStyle.section__description_container,
        style.section__description__area_left,
      ].join(' ')}
      data-section="two"
    >
      <h2>Who we work with</h2>
      <p>
        Today, millions of people around the world have successfully connected
        their accounts to apps they love using our API. We provide developers
        with the tools they need to create easy and accessible experiences for
        their users.
      </p>
      <Button buttonClass="secondary">About Us</Button>
    </div>
    <div className={style.section__image__area_right}>
      <CompanyLogos fill="light" />
    </div>
  </section>
);

export default WhoWeWorkWith;
