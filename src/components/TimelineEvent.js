import React from 'react';
import './TimelineEvent.css';
// import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  console.log(props);
  const { person, status, timestamp } = props;

  return (
    <section>
      <h2>{ person }</h2>
      <aside>{ timestamp }</aside>
      <main>{ status }</main>
    </section>
  );
}

export default TimelineEvent;
