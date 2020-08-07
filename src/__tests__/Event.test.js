import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import EventList from '../EventList';
import Event from '../Event';

describe ('<Event /> component', () => {
  let EventWrapper;

  beforeAll(() => {
    let event = {
      "created": 1593648851000,
      "duration": 7200000,
      "id": "szbxtrybckbpc",
      "name": "Virtual Write-In!",
      "date_in_series_pattern": false,
      "status": "upcoming",
      "time": 1596240000000,
      "local_date": "2020-07-31",
      "local_time": "19:00",
      "updated": 1593648851000,
      "utc_offset": -18000000,
      "waitlist_count": 0,
      "yes_rsvp_count": 5,
      "venue": {
      "id": 26906060,
      "name": "Online event",
      "repinned": false,
      "country": "",
      "localized_country_name": ""
      },
        "is_online_event": true,
        "group": {
        "created": 1474745224000,
        "name": "Shut Up & Write!® New Orleans",
        "id": 20464293,
        "join_mode": "open",
        "lat": 29.959999084472656,
        "lon": -90.08000183105469,
        "urlname": "shutupandwriteneworleans",
        "who": "Writers",
        "localized_location": "New Orleans, LA",
        "state": "LA",
        "country": "us",
        "region": "en_US",
        "timezone": "US/Central"
      },
        "link": "https://www.meetup.com/shutupandwriteneworleans/events/szbxtrybckbpc/",
        "description": "<p>THIS IS A VIRTUAL SESSION<br/>Our mission is to provide a place for writers to get together and work on their projects. It will amaze you how motivating it is simply to be in the company of your fellow writers! And, you will see progress, even if you only spend one hour per week on your writing. Whether you are in the brainstorming phase or working on your final draft, this is the group to get things done.</p> <p>THE SCHEDULE:<br/>7:00 - 7:15 PM: Announcements and introductions<br/>7:15 - 8:15 PM: WRITING (No talking, please. Hence the title of the group)<br/>8:15 - 8:30 PM: Finish writing, Round Table chat. We will need to speak one at a time so the host will moderate.</p> <p>LATECOMERS: You will have a chance to introduce yourself at the end of the session.</p> ",
        "how_to_find_us": "https://us02web.zoom.us/j/4311827432",
        "visibility": "public",
        "pro_is_email_shared": false,
        "member_pay_fee": false
      }

    EventWrapper = shallow(<Event event = {event} />);
  })

  test('render event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  })

  test('render event container', () => {
    expect(EventWrapper.find('.eventOverview')).toHaveLength(1);
  });

  test('render event info', () => {
    expect(EventWrapper.find('.eventOverview').children()).toHaveLength(4);
  });

  test('render event details', () => {
    EventWrapper.setState({
      showDetails: true
    });
    expect(EventWrapper.find('.eventDetails').children()).toHaveLength(2);
  });

  test('render show/hide details button', () => {
    expect(EventWrapper.find('.eventOverview button')).toHaveLength(1);
  })

  test('click on button should show details', () => {
    EventWrapper.setState({
      showDetails: false
    });
    EventWrapper.find('.eventOverview button').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

})
