import React from 'react';
import Button from '../../../components/Button/Button';
import style from './pricing-plan.module.scss';

type Props = {
  plan: {
    name: string;
    description: string;
    price: string;
    options: { name: string; checked?: boolean }[];
  };
};
const PricingPlan = (props: Props) => {
  const { plan } = props;

  return (
    <div className={style.plan}>
      <h4 className="h4">{plan.name}</h4>
      <div className={style.plan__description}>{plan.description}</div>
      <div className={style.plan__price}>{plan.price}</div>
      <div className={style.plan__list}>
        <ul className={style.plan__ul}>
          {plan.options.map(({ name, checked }) => (
            <li key={name} data-checked={checked}>
              {name}
            </li>
          ))}
        </ul>
      </div>
      <Button variant="tertiary">Request Access</Button>
    </div>
  );
};

export default PricingPlan;
