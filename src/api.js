import { mockEvents } from './mockEvents/mockEvents.js';
import axios from 'axios';

async function getSuggestions(query) {
  return [
    {
      city: 'Munich',
      country: 'de',
      localized_country_name: 'Germany',
      name_string: 'Munich, Germany',
      zip: 'meetup3',
      lat: 48.14,
      lon: 11.58
    },
    {
      city: 'Munich',
      country: 'us',
      localized_country_name: 'USA',
      state: 'ND',
      name_string: 'Munich, North Dakota, USA',
      zip: '58352',
      lat: 48.66,
      lon: -98.85
    }
  ];
}

async function getEvents(lat, lon) {
  return mockEvents.events;
}

function getAccessToken() {
  const accessToken = localStorage.getItem('access_token');

  if (!accessToken) {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (!code) {
      window.location.href = 'https://secure.meetup.com/oauth2/authorize?client_id=o3q8bebq46en36kbff39jm0srr&response_type=code&redirect_uri=https://stephanierlandry.github.io/meetup/';
      return null;
    }
    return getOrRenewAccessToken('get', code);
  };

  const lastSavedTime = localStorage.getItem('last_saved_time');

  if (accessToken && (Date.now() - lastSavedTime < 3600000)) {
    return accessToken;
  }

  const refreshToken = localStorage.getItem('refresh_token');
  return getOrRenewAccessToken('renew', refreshToken);
};

export { getSuggestions, getEvents, getAccessToken };
