import React, { Component } from 'react';

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

    console.log(showDetails)

    return (
      <div className="event">
        <div className="eventOverview">
          <h1 className="eventName">{event.name}</h1>
          <p className="eventDate">{event.local_date}</p>
          <p className="eventTime">{event.local_time}</p>
          <p className="eventVenue">{event.venue.name}</p>

          {showDetails &&
            <button className="details-btn" onClick={() => this.handleShowDetails()}>hide details</button>
          }
          {!showDetails &&
            <button className="details-btn" onClick={() => this.handleShowDetails()}>show details</button>
          }
        </div>
        {showDetails &&
          <div className="eventDetails">
            <p className="eventDescription">{event.description}</p>
            <p className="eventLink">{event.link}</p>
          </div>
        }
      </div>
    );
  }
}

export default Event;
