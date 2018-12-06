import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FriendsTable from './containers/friends-table';
import { authorize } from './api/actions/auth';
import { parseAuthResponse, getAccessToken, setAccessToken } from './api/auth-helper';

import './styles/app.css';

export class App extends Component {
  componentDidMount() {
    const response = parseAuthResponse();
    if (response.accessToken) {
      setAccessToken(response);
    }

    const accessToken = getAccessToken();
    if (!accessToken) {
      authorize();
    }
  }

  render() {
    return <FriendsTable />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
