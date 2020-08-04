import React, { Component } from 'react';

import Event from './Event';

class EventList extends Component {

  render() {
<<<<<<< ours
      return (
        <ul className="EventList">
          {this.props.events.map(event =>
            <li key={event.id}>
              <Event event={event} />
            </li>
          )}
        </ul>
      );
    }
=======

    return (
      <ul className="EventList">
        {this.props.events.map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
>>>>>>> theirs
  }

export default EventList;
