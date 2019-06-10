import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const generateTimelineEvents = (events) => {
  return events.map((event) => {
    const { person, timestamp, status } = event;

    return (<TimelineEvent 
      person={ person }
      timestamp={ timestamp }
      status={ status }
    />)
  })
}

const Timeline = (props) => {
  console.log(props);
  const { events } = props;
  
  const eventComponents = generateTimelineEvents(events);

  return (
    <div>
      { eventComponents }
    </div>
  );
}

export default Timeline;
