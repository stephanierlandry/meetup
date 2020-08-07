import React from 'react';
import { shallow, mount } from 'enzyme';


import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;

  beforeAll(() => {
    NumberOfEventsWrapper = shallow(< NumberOfEvents />)
  })

  test('render number of events container', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  })

  test('render textbox for number of events correctly', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.numberOfEvents input').prop('value')).toBe(numberOfEvents);
  });

  test('change state when number of events input changes', () => {
    const eventObject = {target: { value: 32 }};
    NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  });

});

describe('<NumberOfEvents /> integration', () => {
  let NumberOfEventsWrapper;

  test('number of events 32 automatically', () => {
    NumberOfEventsWrapper = shallow(< NumberOfEvents />);
    NumberOfEventsWrapper.update();
    expect((NumberOfEventsWrapper.find('.event')).length).toBeLessThanOrEqual(32);
  });

  test('user can change the number of events', () => {
    NumberOfEventsWrapper = mount(< NumberOfEvents />);
    const numberOfEvents = { target: { value: 32 }};
    NumberOfEventsWrapper.find('.number').simulate('change', numberOfEvents);
    NumberOfEventsWrapper.setState({ numberOfEvents: 13 });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(13);
  });

});
