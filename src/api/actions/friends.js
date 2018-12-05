import { getAccessToken } from '../auth-helper';
import jsonp from 'jsonp';
import { stringify } from 'query-string';

const URL = 'https://api.vk.com/method/friends.get';
const PARAMS = {
  order: 'name',
  fields: 'common_count',
  v: 5.92,
};

const getFriends = (callback) => {
  jsonp(`${URL}?${stringify({ ...PARAMS, access_token: getAccessToken() })}`, (error, data) => {
    if (error) {
      console.error(error);

      return [];
    }

    callback(data.response.items);
  });
};

export { getFriends };
