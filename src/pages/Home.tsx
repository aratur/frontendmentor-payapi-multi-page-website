import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import illustrationEasyToImplement from '../assets/home/desktop/illustration-easy-to-implement.svg';
import illustrationSimpleUI from '../assets/home/desktop/illustration-simple-ui.svg';
import iconPersonalFinance from '../assets/home/desktop/icon-personal-finances.svg';
import iconBankingAndCoverage from '../assets/home/desktop/icon-banking-and-coverage.svg';
import iconConsumerPayment from '../assets/home/desktop/icon-consumer-payments.svg';
import style from './home.module.scss';
import ImgPhoneMockup from '../components/ImgPhoneMockup';
import ScheduleDemo from '../components/ScheduleDemo';
import CompanyLogos from '../components/CompanyLogos';

const Main = () => (
  <main className={style.main}>
    <section
      className={[
        style.section,
        style.section__light_colors,
        'page__anchor',
      ].join(' ')}
    >
      <div className={style.section__description_container} data-section="one">
        <h1>Start building with our APIs for absolutely free.</h1>
        <ScheduleDemo />
        <div className={style.any_questions_container}>
          Have any questions?
          <Link to="/"> Contact Us</Link>
        </div>
      </div>
      <div>
        <ImgPhoneMockup />
      </div>
    </section>
    <section
      className={[
        style.section,
        style.section__dark_colors,
        'page__anchor',
      ].join(' ')}
    >
      <div className={style.section__description_container} data-section="two">
        <h2>Who we work with</h2>
        <p>
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.
        </p>
        <Button buttonClass="secondary">About Us</Button>
      </div>
      <CompanyLogos fill="light" />
    </section>
    <section
      className={[
        style.section,
        style.section__light_colors,
        'page__anchor',
      ].join(' ')}
    >
      <img
        src={illustrationEasyToImplement}
        alt="code snippet illustrating how the product is easy to implement"
      />
      <div
        className={style.section__description_container}
        data-section="three"
      >
        <h1>Easy to implement</h1>
        <p>
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </p>
      </div>
    </section>
    <section
      className={[
        style.section,
        style.section__light_colors,
        'page__anchor',
      ].join(' ')}
    >
      <div className={style.section__description_container} data-section="four">
        <h1>Simple UI & UX</h1>
        <p>
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.
        </p>
      </div>
      <img
        src={illustrationSimpleUI}
        alt="payment confirmation on mobile device"
        width={263}
        height={500}
      />
    </section>
    <section
      className={[
        style.section,
        style.section__light_colors,
        'page__anchor',
      ].join(' ')}
    >
      <div className={style.section__description_container} data-section="five">
        <div>
          <img src={iconPersonalFinance} alt="personal finance icon" />
          <h2>Personal Finances</h2>
          <p>
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.
          </p>
        </div>
        <div>
          <img src={iconBankingAndCoverage} alt="banking and coverage icon" />
          <h2> Banking & Coverage</h2>
          <p>
            With our platform, you can speed up account onboarding and support
            ongoing payments for checking, savings, credit card, and brokerage
            accounts.
          </p>
        </div>
        <div>
          <img src={iconConsumerPayment} alt="consumer payment" />
          <h2>Consumer Payments</h2>
          <p>
            It’s easier to set up secure bank payments with us through a flow
            designed with the user experience in mind. Customers could instantly
            authenticate their account.
          </p>
        </div>
      </div>
    </section>
    <section
      className={[
        style.section,
        style.section__light_colors,
        'page__anchor',
      ].join(' ')}
    >
      <div className={style.section__description_container} data-section="six">
        <h1>Ready to start?</h1>
        <ScheduleDemo />
      </div>
    </section>
  </main>
);

export default Main;
