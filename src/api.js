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

async function getOrRenewAccessToken(type, key) {
  let url;
  if (type === 'get') {
    // Lambda endpoint to get token by code
    url = 'https://dqcf31qq59.execute-api.eu-central-1.amazonaws.com/dev/api/token/'
      + key;
  } else if (type === 'renew') {
    // Lambda endpoint to get token by refresh_token
    url = 'https://dqcf31qq59.execute-api.eu-central-1.amazonaws.com/dev/api/refresh/'
      + key;
  }

  // Use Axios to make a GET request to the endpoint
  const tokenInfo = await axios.get(url);

  // Save tokens to localStorage together with a timestamp
  localStorage.setItem('access_token', tokenInfo.data.access_token);
  localStorage.setItem('refresh_token', tokenInfo.data.refresh_token);
  localStorage.setItem('last_saved_time', Date.now());

  // Return the access_token
  return tokenInfo.data.access_token;
}

export { getSuggestions, getEvents, getAccessToken };
