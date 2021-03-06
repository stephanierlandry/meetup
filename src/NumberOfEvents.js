import React, { Component } from 'react';

import {ErrorAlert} from './Alert';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    infoText: ''
  }

  handleNumberChange = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(null, null, value);

    if (value < 1) {
     this.setState({
       infoText: 'Number must be 1 or greater'
     });
   } else {
     this.setState({
       infoText: '',
     });
   }
  }

  render() {

    return (
      <div className="numberOfEvents">
        <input
          type="text"
          value={this.state.numberOfEvents}
          onChange={this.handleNumberChange}
          className="number"
          placeholder="number of events"/>
        <ErrorAlert text= {this.state.infoText}/>
      </div>
    );
  }
}

export default NumberOfEvents;
