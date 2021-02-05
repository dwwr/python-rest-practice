import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  render () {
    return (
      <Router>
      <Security
        issuer='https://dev-67516213.okta.com/oauth2/default'
        client_id='0oa51880eJfas1ZtG5d6'
        redirect_uri={window.location.origin + '/implicit/callback'}
        scope={['openid', 'profile', 'email']}>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/implicit/callback" component={LoginCallback} />
          <SecureRoute path="/home" component={Home} />
        </Switch>
      </Security>
    </Router>
    );
  }
}
export default App;