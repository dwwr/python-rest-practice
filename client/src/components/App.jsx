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
      <div>Heyyy</div>
    );
  }
}
export default App;