'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {


  console.log('event.pathParameters.code')

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=o3q8bebq46en36kbff39jm0srr'
    + '&client_secret=r1n92h2a46tcrlhg1qr2u50150'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://stephanierlandry.github.io/meetup/'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
