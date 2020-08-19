import React, { Component } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import moment from 'moment';

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

  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  }

  getData = () => {
    const next7Days = []; // Create empty array for the next 7 days
    const currentDate = moment(); // Today
    // Loop 7 times for next 7 days
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days'); // Add 1 day to current date, currentDate changes
      const dateString = currentDate.format('YYYY-MM-DD'); // Format the date
      // Use the countEventsOnADate function to count #events on this date
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count }); // Add this date and number to the list
    }
    return next7Days;
  }

  render() {

    return (
      <div className="App">
          <img src="https://auth-server-dev-serverlessdeploymentbucket-1gfi6z6bkqcu9.s3.eu-central-1.amazonaws.com/logo--script.svg"
                alt="Meetup Logo in pink"
                width="400px"
                className="logo"/>
          <CitySearch  updateEvents= {this.updateEvents} />
          <OfflineAlert text={this.state.offlineText}/>
          <NumberOfEvents
            updateEvents={this.updateEvents}
            numberOfEvents={this.state.events.length}
            lat={this.state.lat}
            lon={this.state.lon} />
            <div className="units-row">
              <div className="unit-10"></div>
              <div className="unit-80">
                <ResponsiveContainer height={300}>
                  <ScatterChart
                    margin={{ top: 20, right: 20, bottom: 20, left: 20,}}
                    className="chart-container">
                    <CartesianGrid />
                    <XAxis type="category" dataKey="date" name="date"  />
                    <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter data={this.getData()} fill="#8884d8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              <div className="unit-10"></div>
            </div>
          <EventList events={this.state.events} />
      </div>
    );
  }
}


export default App;
