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
    const date = new Date(new Date(event.local_date).toDateString());

    console.log(event)

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
          </div>
        }
      </div>
    );
  }
}

export default Event;
