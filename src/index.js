import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-xryb36ac.us.auth0.com';
const clientId = 'HoL7RLQ4tJmabdAgYIe3okd0xcetPOYL';

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
