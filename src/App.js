import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import TimelineEvent from './components/TimelineEvent';
import Timeline from './components/Timeline';
import Timestamp from './components/Timestamp';

class App extends Component {
  render() {
    console.log(timelineData);

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
          <TimelineEvent 
            person="Hana"
            timestamp={<Timestamp />}
            status="this is a status"
          />
        </main>
      </div>
    );
  }
}

export default App;
