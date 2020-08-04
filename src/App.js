import React, { Component } from 'react';

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
    console.log('App', this.state.events)
    return (
      <div className="App">
<<<<<<< ours
        <CitySearch  updateEvents= {this.updateEvents} />
        <EventList events={this.state.events} />
=======
        <CitySearch  updateEvents= { this.updateEvents } />
        <EventList events = { this.state.events } />
>>>>>>> theirs
        <NumberOfEvents />
      </div>
    );
  }
}


export default App;
