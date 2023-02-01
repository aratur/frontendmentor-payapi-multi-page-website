import React from 'react';
import ReadyToStart from '../components/ReadyToStart';
import style from './about.module.scss';
import teamMobile from '../assets/about/mobile/image-team-members.jpg';
import teamTablet from '../assets/about/tablet/image-team-members.jpg';
import teamDesktop from '../assets/about/desktop/image-team-members.jpg';

const About = () => (
  <main className={style.main}>
    <div className={[style.about_container, 'page__anchor'].join(' ')}>
      <h2 className={[style.about__h2_sizing, 'h2'].join(' ')}>
        We empower innovators
        <br /> by delivering access to the
        <br /> financial system
      </h2>
      <div className={style.about__description}>
        <h3 className="h3">Our Vision</h3>
        <p>
          Our main goal is to build beautiful consumer experiences along with
          developer-friendly infrastructure. The result is an intelligent tool
          that gives everyone the ability to create amazing products that solve
          big problems. We are deeply focused on democratizing financial
          services through technology.
        </p>
      </div>
      <div className={style.about__description}>
        <h3 className="h3">Our Business</h3>
        <p>
          At the core of our platform is the technical infrastructure APIs that
          connect consumers. Our innovative product provides key insights for
          businesses and individuals, as well as robust reporting for
          traditional financial institutions and developers.
        </p>
      </div>
      <div className={style.picture_container} aria-hidden>
        <picture className={style.about__team_picture}>
          <source media="(min-width: 768px)" srcSet={teamTablet} />
          <source media="(min-width: 1440px)" srcSet={teamDesktop} />
          <img src={teamMobile} alt="a team" />
        </picture>
      </div>
      <div className={style.about__in_numbers}>
        <div className={style.about__in_numbers__section}>
          <p className={style.about__in_numbers_paragraph}>Team Members</p>
          <div className={style.about_important_number}>300+</div>
        </div>
        <div className={style.about__in_numbers__section}>
          <p className={style.about__in_numbers_paragraph}>Offices in the US</p>
          <div className={style.about_important_number}>3</div>
        </div>
        <div className={style.about__in_numbers__section}>
          <p className={style.about__in_numbers_paragraph}>
            Transactions analyzed
          </p>
          <div className={style.about_important_number}>10M+</div>
        </div>
      </div>
      <div className={style.about__description}>
        <h3 className="h3">The Culture</h3>
        <p>
          We strongly believe there&apos;s always an opportunity to learn from
          each other outside of day-to-day work, whether it&apos;s company-wide
          offsites, internal hackathons, or co-worker meetups. We always value
          cross-team collaboration and diversity of thought, no matter the job
          title.
        </p>
      </div>
      <div className={style.about__description}>
        <h3 className="h3">The People</h3>
        <p>
          We&#39;re all passionate about building a more efficient and inclusive
          financial infrastructure together. At PayAPI, we have diverse
          backgrounds and skills.
        </p>
      </div>
    </div>
    <ReadyToStart />
  </main>
);

export default About;
