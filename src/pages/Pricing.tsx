import React from 'react';
import Button from '../components/Button/Button';
import ReadyToStart from '../components/ReadyToStart';
import style from './pricing.module.scss';

const Pricing = () => (
  <main className={[style.main].join('')}>
    <div className={[style.pricing_container, 'page__anchor'].join(' ')}>
      <h2 className={[style.h2_margin, 'h2'].join(' ')}>Pricing</h2>
      <div className={style.plans}>
        <div className={style.plan}>
          <h4 className={['h4'].join(' ')}>Free Plan</h4>
          <div className={style.plan_description}>
            Build and test using our core set of products with up to 100 API
            requests
          </div>
          <div className={style.plan_price}>$0.00</div>
          <div className={style.plan__list_container}>
            <ul className={style.plan__ul_conditions}>
              <li data-checked="true">Transactions</li>
              <li data-checked="true">Auth</li>
              <li data-checked="true">Identity</li>
              <li>Investments</li>
              <li>Assets</li>
              <li>Liabilities</li>
              <li>Income</li>
            </ul>
          </div>
          <Button buttonClass="tertiary">Request Access</Button>
        </div>
        <div className={style.plan}>
          <h4 className="h4">Basic Plan</h4>
          <div className={style.plan_description}>
            Launch your project with unlimited requests and no contractual
            minimums
          </div>
          <div className={style.plan_price}>$249.00</div>
          <div className={style.plan__list_container}>
            <ul className={style.plan__ul_conditions}>
              <li data-checked="true">Transactions</li>
              <li data-checked="true">Auth</li>
              <li data-checked="true">Identity</li>
              <li data-checked="true">Investments</li>
              <li data-checked="true">Assets</li>
              <li>Liabilities</li>
              <li>Income</li>
            </ul>
          </div>
          <Button buttonClass="tertiary">Request Access</Button>
        </div>
        <div className={style.plan}>
          <h4 className="h4">Premium Plan</h4>
          <div className={style.plan_description}>
            Get tailored solutions, volume pricing, and dedicated support for
            your team
          </div>
          <div className={style.plan_price}>$499.00</div>
          <div className={style.plan__list_container}>
            <ul className={style.plan__ul_conditions}>
              <li data-checked="true">Transactions</li>
              <li data-checked="true">Auth</li>
              <li data-checked="true">Identity</li>
              <li data-checked="true">Investments</li>
              <li data-checked="true">Assets</li>
              <li data-checked="true">Liabilities</li>
              <li data-checked="true">Income</li>
            </ul>
          </div>
          <Button buttonClass="tertiary">Request Access</Button>
        </div>
      </div>
    </div>
    <ReadyToStart />
  </main>
);

export default Pricing;
