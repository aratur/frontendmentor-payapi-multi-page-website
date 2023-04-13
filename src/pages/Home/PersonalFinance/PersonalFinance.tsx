import React from 'react';
import iconPersonalFinance from '../../../assets/home/desktop/icon-personal-finances.svg';
import iconBankingAndCoverage from '../../../assets/home/desktop/icon-banking-and-coverage.svg';
import iconConsumerPayment from '../../../assets/home/desktop/icon-consumer-payments.svg';
import style from './personal_finance.module.scss';

const HomeSectionPersonalFinance = () => (
  <section
    className={[style['personal-finance__section'], 'anchor-page'].join(' ')}
  >
    <div className="">
      <img src={iconPersonalFinance} alt="personal finance icon" />
      <h3 className="h3-small">Personal Finances</h3>
      <p>
        Consolidate financial data from multiple sources and categorize
        transactions up to 2 years of history. Analyze reports to reconcile
        activities in your account.
      </p>
    </div>
    <div>
      <img src={iconBankingAndCoverage} alt="banking and coverage icon" />
      <h3 className="h3-small"> Banking & Coverage</h3>
      <p>
        With our platform, you can speed up account onboarding and support
        ongoing payments for checking, savings, credit card, and brokerage
        accounts.
      </p>
    </div>
    <div>
      <img src={iconConsumerPayment} alt="consumer payment" />
      <h3 className="h3-small">Consumer Payments</h3>
      <p>
        It’s easier to set up secure bank payments with us through a flow
        designed with the user experience in mind. Customers could instantly
        authenticate their account.
      </p>
    </div>
  </section>
);

export default HomeSectionPersonalFinance;
