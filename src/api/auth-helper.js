import cookie from 'react-cookies';
import { parse } from 'query-string';

const TOKEN_KEY = 'accessToken';

const getAccessToken = () => {
  return cookie.load(TOKEN_KEY);
};

const setAccessToken = ({ accessToken, expiresIn }) => {
  cookie.save(TOKEN_KEY, accessToken, {
    path: '/',
    maxAge: expiresIn,
  });
};

const parseAuthResponse = () => {
  const { access_token: accessToken, expires_in: expiresIn } = parse(location.hash);
  // remove received params from url
  window.location.hash = '';

  return { accessToken, expiresIn };
};

export { getAccessToken, setAccessToken, parseAuthResponse };
