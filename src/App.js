import React, { Component } from 'react';

import './styles/ply.min.css';
import './styles/App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { OfflineAlert } from './Alert';

class App extends Component {

  state = {
    events: [],
    page: null,
    lat: null,
    lon: null,
    offlineText: ''
  }

  componentDidMount(){
    getEvents().then(response => this.setState({ events: response }));
  }

  updateEvents = (lat, lon, page) => {

    if (!navigator.onLine) {
      this.setState({
        offlineText: 'You are offline! Reconnect to get new events.'
      })
    } else {
      this.setState({
        offlineText: ''
      })
    }

    if(lat && lon) {
      getEvents(lat, lon, this.state.page).then(response => this.setState({ events: response, lat, lon }));
    }
    else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(response => this.setState({ events: response, page }));
    }
    else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(response => this.setState({ events: response }));
    }
  }

  render() {

    return (
      <div className="App">
          <img src="https://auth-server-dev-serverlessdeploymentbucket-1gfi6z6bkqcu9.s3.eu-central-1.amazonaws.com/logo--script.svg"
                alt="Meetup Logo in pink"
                width="400px"
                className="logo"/>
          <CitySearch  updateEvents= {this.updateEvents} />
          <NumberOfEvents
            updateEvents={this.updateEvents}
            numberOfEvents={this.state.events.length}
            lat={this.state.lat}
            lon={this.state.lon} />
          <EventList events={this.state.events} />
      </div>
    );
  }
}


export default App;
