import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import LoginRoute from './Routes/LoginRoute';
import HomeRoute from './Routes/HomeRoute';
import ErrorRoute from './Routes/ErrorRoute';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" render={() => <HomeRoute />} />
          <Route exact path="/login" render={() => <LoginRoute />} />
          <Route component={ErrorRoute} />
        </Switch>
      </div>
    );
  }
}

export default App;
