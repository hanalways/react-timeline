import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent';
import Timeline from './components/Timeline';
import Timestamp from './components/Timestamp';

const events = timelineData.events

class App extends Component {
  render() {
    console.log(events);

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
          <Timeline 
            events={events}
          />
        </main>
      </div>
    );
  }
}

export default App;
