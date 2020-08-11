import React from 'react';
import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';

import App from '../App';
import NumberOfEvents from '../NumberOfEvents';
import { mockEvents } from '../mockEvents/mockEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('The app is open', () => {
    });

    let AppWrapper;

    when('the user sees the events', () => {
      AppWrapper = mount(<App />)
    });

    then('the user should automatically see thirty-two events', () => {
       expect(AppWrapper.find('.event').length).toBeLessThanOrEqual(32);
    });
   });


   test('User can change the number of events they want to see', ({ given, when, then }) => {

    let AppWrapper;

    given('The app is open', () => {
      AppWrapper = mount(<App />);
    });

    when('the user wants to see more or less events', () => {
      AppWrapper.find('.numberOfEvents').simulate('change', {target: {value: 25}})
    });

    then('the user can change the number of events they will see', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
    });
  });
});
