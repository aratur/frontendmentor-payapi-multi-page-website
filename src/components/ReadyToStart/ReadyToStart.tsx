import React from 'react';
import ScheduleDemo from '../ScheduleDemo/ScheduleDemo';
import style from './ready_to_start.module.scss';

const ReadyToStart = () => (
  <section className={[style['ready-to-start'], 'anchor-page'].join(' ')}>
    <h2 className="h2">Ready to start?</h2>
    <ScheduleDemo pageId="ReadyToStart" />
  </section>
);

export default ReadyToStart;
