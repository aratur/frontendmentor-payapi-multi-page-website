import React from 'react';
import style from '../home.module.scss';
import ownStyle from './who_we_work_with.module.scss';
import Button from '../../../components/Button/Button';
import CompanyLogos from '../../../components/CompanyLogos/CompanyLogos';
import BackgroundPattern from '../../../components/BackgroundPattern/BackgroundPattern';

const WhoWeWorkWith = () => (
  <section
    className={[
      style.home__section,
      ownStyle['who-we-work-with'],
      ownStyle['who-we-work-with--dark'],
      'anchor-page',
    ].join(' ')}
  >
    <BackgroundPattern variant="home-we-work" />
    <div
      className={[
        style.home__container,
        ownStyle['who-we-work-with__container'],
        style['home__desc-area-left'],
      ].join(' ')}
    >
      <h2 className="h2">Who we work with</h2>
      <p>
        Today, millions of people around the world have successfully connected
        their accounts to apps they love using our API. We provide developers
        with the tools they need to create easy and accessible experiences for
        their users.
      </p>
      <Button variant="secondary" isLink linkTo="about">
        About Us
      </Button>
    </div>
    <div className={style['home__img-area-right']}>
      <CompanyLogos variant="light" />
    </div>
  </section>
);

export default WhoWeWorkWith;
