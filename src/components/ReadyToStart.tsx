import React from 'react';
import ScheduleDemo from './ScheduleDemo';
import style from './ready_to_start.module.scss';

const ReadyToStart = () => (
  <section className={[style.ready_to_start, 'page__anchor'].join(' ')}>
    <h2 className="h2">Ready to start?</h2>
    <ScheduleDemo pageId="ReadyToStart" />
  </section>
);

export default ReadyToStart;
