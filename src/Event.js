import React, { Component } from 'react';
import {  PieChart, Pie, ResponsiveContainer, Cell, Tooltip, Legend } from 'recharts';

class Event extends Component {

  state = {
    showDetails: false
  }

  handleShowDetails = () => {
    if(this.state.showDetails === false) {
      this.setState({ showDetails: true });
    }
    else {
      this.setState({ showDetails: false });
    }
  }

  render() {
    const showDetails = this.state.showDetails;
    const event = this.props.event;
    const date = new Date(new Date(event.local_date).toDateString());

    const rsvpLimit = event.rsvp_limit;
    const freeSlots = rsvpLimit - event.yes_rsvp_count;
    const rsvpData =[{name:'people coming', value: event.yes_rsvp_count}, {name:'free slots', value: freeSlots}];
    const colors = ['#ED1C40', '#0555BB'];

    return (
      <div className="event">
        <div className="eventOverview">
          <h1 className="eventName">{event.name}</h1>
          <p className="eventDate">{date.toUTCString()}</p>
          <p className="eventVenue">{event.venue ? event.venue.name : null}</p>

          {showDetails &&
            <button className=" detail-btn btn" onClick={() => this.handleShowDetails()}>hide details</button>
          }
          {!showDetails &&
            <button className="detail-btn btn" onClick={() => this.handleShowDetails()}>show details</button>
          }
        </div>
        {showDetails &&
          <div className="eventDetails">
            <p className="eventDescription" dangerouslySetInnerHTML={{ __html: event.description }}></p>
            <a href={event.link} target="_blank" className="eventLink">More Info</a>
            <div className="rsvp-chart">
              {rsvpLimit > 0 &&
                <ResponsiveContainer height={250} width={300}>
                  <PieChart width={400} height={250}>
                    <Pie dataKey="value" startAngle={180} endAngle={0} data={rsvpData} cx={200} cy={200} fill="#8884d8" label>
                      {
                        rsvpData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={colors[index]}/>
                        ))
                      }
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" align="center"/>
                  </PieChart>
                </ResponsiveContainer>
              }
            </div>
            <div className="no-rsvp">
              {!rsvpLimit &&
                <p className="no-rsvp-container">{event.yes_rsvp_count} people have RSVPd</p>
              }
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Event;
