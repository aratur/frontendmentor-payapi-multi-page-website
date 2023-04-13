import React, { PropsWithChildren } from 'react';
import style from './checkbox.module.scss';

const Checkbox = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <div className={style.checkbox__container}>
      <input
        type="checkbox"
        className={[style.checkbox__input, 'sr_only'].join(' ')}
        name="stay-up-to-date"
        id="stay-up-to-date"
      />
      <label htmlFor="stay-up-to-date" className={style.checkbox__emulated} />
      <label htmlFor="stay-up-to-date" className={style.checkbox__label}>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
