import React, { Component } from 'react';

import Event from './Event';

class EventList extends Component {

  render() {
      return (
        <ul className="EventList">
          <div className="units-row">
            {this.props.events.map(event =>
              <div className="event-container unit-50" tabIndex="0">
                <li key={event.id}>
                  <Event event={event} />
                </li>
              </div>
            )}
          </div>
          <div className="units-row"></div>
        </ul>
      );
    }
  }

export default EventList;
