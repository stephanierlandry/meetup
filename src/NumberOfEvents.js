import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: '24',
    infoText: ''
  }

  handleNumberChange = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
  }

  render() {
    return (

      <div className="numberOfEvents">
<<<<<<< ours
        <div>Number of Events</div>
        <input type="text" value={this.state.numberOfEvents} onChange={this.handleNumberChange} className="number"/>
=======
        <input type="text" value={this.state.numberOfEvents} onChange={this.handleNumberChange} className="number" placeholder="number"/>
>>>>>>> theirs
      </div>
    );
  }
}

export default NumberOfEvents;
