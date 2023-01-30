import React from 'react';
import ScheduleDemo from './ScheduleDemo';
import style from './ReadyToStart.module.scss';

const ReadyToStart = () => (
  <section className={[style.ready_to_start, 'page__anchor'].join(' ')}>
    <h2>Ready to start?</h2>
    <ScheduleDemo />
  </section>
);

export default ReadyToStart;
