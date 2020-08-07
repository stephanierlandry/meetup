import React from 'react';
import { shallow } from 'enzyme';


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
  test('change state when input changes', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
    NumberOfEvents.find('.number').simulate('change', { target: { value: 2}});
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(2);
  })

});
