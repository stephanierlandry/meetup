import React, { Component } from 'react';

import './styles/ply.min.css';
import './styles/App.css';
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
          <img src="https://auth-server-dev-serverlessdeploymentbucket-1gfi6z6bkqcu9.s3.eu-central-1.amazonaws.com/logo--script.svg"
                alt="Meetup Logo in pink"
                width="400px"
                className="logo"/>
          <CitySearch  updateEvents= {this.updateEvents} />
          <NumberOfEvents />
          <EventList events={this.state.events} />
      </div>
    );
  }
}


export default App;
