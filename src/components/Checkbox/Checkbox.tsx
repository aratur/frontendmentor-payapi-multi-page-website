import React, { PropsWithChildren } from 'react';
import style from './checkbox.module.scss';

const Checkbox = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <div className={style.input__checkbox_container}>
      <input
        type="checkbox"
        className={[style.input__checkbox, 'sr_only'].join(' ')}
        name="stay-up-to-date"
        id="stay-up-to-date"
      />
      <label
        htmlFor="stay-up-to-date"
        className={style.input__checkbox_emulated}
      />
      <label htmlFor="stay-up-to-date" className={style.input__checkbox_label}>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
