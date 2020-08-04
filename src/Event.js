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

    console.log(event)

    return (
      <div className="event">
        <div className="eventOverview">
          <h1 className="eventName"></h1>
          <p className="eventDate"></p>
          <p className="eventTime"></p>
          <p className="eventVenue"></p>

          {showDetails &&
            <button className="details-btn" onClick={() => this.handleShowDetails()}>hide details</button>
          }
          {!showDetails &&
            <button className="details-btn" onClick={() => this.handleShowDetails()}>show details</button>
          }
        </div>
        {showDetails &&
          <div className="eventDetails">
            <p className="eventDescription"></p>
            <p className="eventLink"></p>
          </div>
        }
      </div>
    );
  }
}

export default Event;
