import React from 'react';
import ReadyToStart from '../../components/ReadyToStart/ReadyToStart';
import style from './pricing.module.scss';
import plans from './pricing.json';
import PricingPlan from './PricingPlan/PricingPlan';

const Pricing = () => (
  <main className={[style.pricing].join('')}>
    <div className={[style.pricing__container, 'anchor-page'].join(' ')}>
      <h2 className={[style['h2--margin'], 'h2'].join(' ')}>Pricing</h2>
      <div className={style.plans}>
        {plans.map((plan) => (
          <PricingPlan key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
    <ReadyToStart />
  </main>
);

export default Pricing;
