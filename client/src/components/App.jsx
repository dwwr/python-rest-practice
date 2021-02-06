import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterAccess from './RouterAccess.jsx';

const App = () => {
  return (
    <Router>
      <RouterAccess/>
    </Router>
  );
}

export default App;