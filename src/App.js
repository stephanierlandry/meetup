import React, { Component } from 'react';

import './ply/dist/css/ply.min.css';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {

  state = {
    events: []
  }

  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then(events => this.setState({ events }));
  }

  render() {
    return (
      <div className="App">


          <CitySearch  updateEvents= {this.updateEvents} />
          <NumberOfEvents />
        <div className="units-row">
          <EventList events={this.state.events} />
        </div>

      </div>
    );
  }
}


export default App;
