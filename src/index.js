import React from 'react';
import ReactDOM from 'react-dom';
import { authorize } from './api/actions/auth';
import { parseAuthResponse, getAccessToken, setAccessToken } from './api/auth-helper';

export class App extends React.Component {
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
    return (
      <div></div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
