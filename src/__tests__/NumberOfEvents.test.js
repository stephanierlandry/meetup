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

});
