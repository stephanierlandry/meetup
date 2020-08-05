import React, { Component } from 'react';

import Event from './Event';

class EventList extends Component {

  render() {
      return (
        <ul className="EventList">
          <div className="units-row">
            {this.props.events.map(event =>
              <div className="unit-33">
                <li key={event.id}>
                  <Event event={event} />
                </li>
              </div>
            )}
          </div>
        </ul>
      );
    }
  }

export default EventList;
