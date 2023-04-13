/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from '../Button/Button';
import style from './schedule_demo.module.scss';

type Props = {
  pageId: string;
};

const ScheduleDemo = (props: Props) => {
  const { pageId } = props;
  return (
    <form className={style['schedule-demo__form']} action="/">
      <input
        className={style['schedule-demo__form__input']}
        type="email"
        name="scheduleDemoEmail"
        id={`scheduleDemoEmail${pageId}`}
        placeholder="Enter email address"
        aria-label="Enter email address"
      />
      <Button variant="primary">Schedule a Demo</Button>
    </form>
  );
};

export default ScheduleDemo;
