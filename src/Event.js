import React, { Component } from 'react';
import {  PieChart, Pie } from 'recharts';

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
    const rsvpData =[{name:'people coming', value: event.yes_rsvp_count}, {name:'free slots', value: freeSlots}]

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
            <div>
              {rsvpLimit > 0 &&
                <PieChart width={400} height={250}>
                  <Pie dataKey="value" startAngle={180} endAngle={0} data={rsvpData} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
                </PieChart>
              }
              {!rsvpLimit &&
                <p>{event.yes_rsvp_count} people have RSVPd</p>
              }
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Event;
