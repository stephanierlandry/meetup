import React from 'react';
import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';

import App from '../App';
import Event from '../Event';
import { mockEvents } from '../mockEvents/mockEvents';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
     given('The main page is open', () => {
     });

     let AppWrapper;

     when('the user is viewing an event element', () => {
      AppWrapper = shallow(<App />)
     });

     then('the user will have to expand the element to view details', () => {
       expect(AppWrapper.find('.eventDetails')).toHaveLength(0);
     });
   });

   test('User can expand an event to see its details', ({ given, when, then }) => {

     let AppWrapper;

     given('The main page is open', () => {
       AppWrapper = mount(<App />);
     });

     when('the user wants to view event details', () => {
       AppWrapper.update();
       AppWrapper.find('.detail-btn').at(0).simulate('click');
     });

     then('the user will have to expand the element to view details', () => {
       expect(AppWrapper.find('.eventDetails')).toHaveLength(1);
     });
   });

   test('User can collapse an event to hide its details', ({ given, and, when, then }) => {

     let AppWrapper;

     given('The main page is open', () => {
       AppWrapper = mount(<App />);
     });

     and('the event details are expanded', () => {
       AppWrapper.update();
       AppWrapper.find('.detail-btn').at(0).simulate('click');
       expect(AppWrapper.find('.event')).toHaveLength(mockEvents.events.length);
     });

     when('the user clicks the hide button', () => {
       AppWrapper.find('.detail-btn').at(0).simulate('click');
     });

     then('the user will have to collapse the element to close details', () => {
       expect(AppWrapper.find('.eventDetails')).toHaveLength(0);
     });
   });
});
