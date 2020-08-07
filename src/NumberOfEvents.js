import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: '',
    infoText: ''
  }

  handleNumberChange = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
  }

  render() {
    return (
      <div className="numberOfEvents">
        <input type="text" value={this.state.numberOfEvents} onChange={this.handleNumberChange} className="number" placeholder="number of events"/>
      </div>
    );
  }
}

export default NumberOfEvents;
