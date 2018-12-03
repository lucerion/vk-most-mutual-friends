import { stringify } from 'query-string';

const URL = 'https://oauth.vk.com/authorize';
const PARAMS = {
  client_id: process.env.APP_ID,
  display: 'page',
  redirect_uri: process.env.REDIRECT_URL || 'https://oauth.vk.com/blank.html',
  scope: 'friends',
  response_type: 'token',
  v: 5.92,
};

const authorize = () => {
  window.location = `${URL}?${stringify(PARAMS)}`;
};

export { authorize };
